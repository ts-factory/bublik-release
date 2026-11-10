#!/usr/bin/env node
// Takes the user guide's screenshots from a running Bublik with the E2E seed,
// numbered callouts included, and writes them to docs/user-guide/img as WebP.
//
//   BUBLIK_URL=https://host BUBLIK_EMAIL=.. BUBLIK_PASSWORD=.. \
//   BUBLIK_UI_DIR=../bublik-ui node scripts/shoot-user-guide.mjs [shot ...]
//
// Playwright comes from a bublik-ui checkout, so the docs site gains no
// dependency. It needs `cwebp` on PATH. Name shots to retake only those.
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = process.env.BUBLIK_URL;
const UI_DIR = resolve(process.env.BUBLIK_UI_DIR ?? '../bublik-ui');
const OUT = join(dirname(fileURLToPath(import.meta.url)), '../docs/user-guide/img');
const PNG_DIR = process.env.GUIDE_PNG_DIR ?? mkdtempSync(join(tmpdir(), 'user-guide-'));
const WEBP_QUALITY = process.env.GUIDE_WEBP_QUALITY ?? '75';
const MAX_BYTES = 300 * 1024;

const VIEWPORT = { width: 1680, height: 1050 };
const NET_DRV = 'tsf/net-drv';
const DPDK = 'tsf/dpdk-ethdev';
const E2E = 'bublik-e2e';
const MEASURED_TEST = 'dpdk-ethdev-ts/perf/testpmd_rxonly';
const DATES = 'startDate=2026-04-01&finishDate=2026-04-30';
const SERIES_TEST = 'example-ci/storage/io/throughput_rw/throughput_rw';

if (!ORIGIN || !process.env.BUBLIK_EMAIL || !process.env.BUBLIK_PASSWORD) {
	console.error('Set BUBLIK_URL, BUBLIK_EMAIL and BUBLIK_PASSWORD.');
	process.exit(2);
}

const { chromium } = createRequire(join(UI_DIR, 'package.json'))('@playwright/test');

/** Draws callouts over the page: `[locator, number, label, { below, right, left, end, noBox }]`. Above by default. */
async function mark(page, callouts) {
	const boxes = [];
	for (const [locator, number, label, options = {}] of callouts) {
		const box = await locator.first().boundingBox({ timeout: 15_000 });
		if (!box) throw new Error(`callout ${number} (${label}) has no box`);
		boxes.push({ box, number, label, ...options });
	}
	await page.evaluate((items) => {
		const layer = document.createElement('div');
		layer.style.cssText = 'position:fixed;inset:0;z-index:2147483647;pointer-events:none;font:600 13px/1 Inter,sans-serif';
		document.body.append(layer);
		const red = '#e5234f';
		for (const { box, number, label, below, right, left, end, noBox } of items) {
			const pad = 3;
			if (!noBox) {
				const frame = document.createElement('div');
				frame.style.cssText = `position:absolute;left:${box.x - pad}px;top:${box.y - pad}px;width:${box.width + 2 * pad}px;height:${box.height + 2 * pad}px;border:2px solid ${red};border-radius:6px;box-shadow:0 0 0 1px #fff`;
				layer.append(frame);
			}
			const pill = document.createElement('div');
			pill.style.cssText = `position:absolute;display:flex;align-items:center;gap:6px;padding:3px ${label ? '10px' : '3px'} 3px 3px;background:${red};color:#fff;border-radius:999px;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,.3)`;
			pill.innerHTML = `<span style="display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#fff;color:${red}">${number}</span>${label ? `<span></span>` : ''}`;
			if (label) pill.lastChild.textContent = label;
			layer.append(pill);
			const { width, height } = pill.getBoundingClientRect();
			const beside = right || left;
			let x = right ? box.x + box.width + 8 : left ? box.x - width - 8 : end ? box.x + box.width - width : box.x - 6;
			let y = beside ? box.y + box.height / 2 - height / 2 : below ? box.y + box.height + 6 : box.y - height - 6;
			x = Math.max(4, Math.min(x, innerWidth - width - 4));
			y = Math.max(4, Math.min(y, innerHeight - height - 4));
			pill.style.left = `${x}px`;
			pill.style.top = `${y}px`;
		}
	}, boxes);
}

/** Log URLs name the instance that imported them; keep it out of the docs. */
async function neutralHost(page) {
	await page.evaluate(() => {
		for (const a of document.querySelectorAll('a')) {
			if (/^https?:\/\//.test(a.textContent)) {
				a.textContent = a.textContent.replace(/^https?:\/\/[^/]+\//, 'https://bublik.example.com/');
			}
		}
	});
}

async function settle(page) {
	await page.waitForLoadState('networkidle', { timeout: 20_000 }).catch(() => undefined);
	await page.waitForTimeout(900);
}

const api = {};

async function setup(context) {
	const get = async (path) => (await context.request.get(`${ORIGIN}/api/v2/${path}`)).json();
	const projects = await get('projects/');
	api.project = (name) => projects.find((project) => project.name === name).id;
	api.run = async (project, fixtureId) => {
		const { results } = await get(`runs/?project=${api.project(project)}&page=1&page_size=100`);
		const run = results.find((item) =>
			item.important_tags.some((tag) => tag.endsWith(fixtureId))
		);
		if (!run) throw new Error(`no run ${fixtureId} in ${project}`);
		return run.id;
	};
	api.testNode = async (runId, name, hasCharts) => {
		const { tree } = await get(`tree/${runId}/`);
		for (const node of Object.values(tree)) {
			if (node.name !== name || node.entity !== 'test') continue;
			if (!hasCharts) return node.id;
			const { charts } = await get(`results/${node.id}/measurements/`);
			if (charts?.length) return node.id;
		}
		throw new Error(`no test ${name} in run ${runId}`);
	};
	api.get = get;
}

const p = (name) => `project=${api.project(name)}`;
const go = async (page, path) => {
	await page.goto(`${ORIGIN}/v2${path}`, { waitUntil: 'load' });
	await settle(page);
};
const link = (page, name) => page.getByRole('link', { name, exact: true });
const button = (page, name) => page.getByRole('button', { name, exact: true });
const text = (page, value) => page.getByText(value, { exact: true });
const sidebarWidth = 252;
const contentOnly = { x: sidebarWidth, y: 0, width: VIEWPORT.width - sidebarWidth, height: VIEWPORT.height };

async function selectRuns(page, runIds) {
	for (const id of runIds) {
		await page
			.locator(`[data-testid="runs-row"][data-run-id="${id}"]`)
			.locator('td')
			.first()
			.click({ position: { x: 2, y: 2 } });
		await page.waitForTimeout(250);
	}
}

async function openResults(page, packageName) {
	const row = page.locator('[data-testid="run-row"]').filter({ hasText: packageName }).first();
	await row.getByRole('button').first().click();
	await settle(page);
	const test = page.locator('[data-testid="run-row"][data-node-type="test"]').first();
	await test.locator('[data-testid="tw-badge"][data-column-id]').first().click();
	await page.locator('[data-testid="run-result-table"]').first().waitFor({ timeout: 60_000 });
	await settle(page);
}

const SHOTS = {
	async 'sidebar'(page) {
		await go(page, `/runs?${p(NET_DRV)}`);
		await mark(page, [
			[button(page, 'tsf/net-drv Project').or(page.locator('button').filter({ hasText: 'tsf/net-drv' })), 1, 'Project', { right: true }],
			[link(page, 'Dashboard'), 2, 'Pages', { right: true }],
			[page.locator('[data-info-button]:visible').first(), 3, 'Docs for this page', { right: true }],
			[link(page, 'Admin'), 4, 'Admin', { right: true }],
			[page.locator('button, a').filter({ hasText: 'admin@bublik.com' }), 5, 'Account and settings', { right: true }]
		]);
		return { clip: { x: 0, y: 0, width: 620, height: VIEWPORT.height } };
	},
	async 'project-switcher'(page) {
		await go(page, `/runs?${p(NET_DRV)}`);
		await page.locator('button').filter({ hasText: 'tsf/net-drv' }).first().click();
		await settle(page);
		return { clip: { x: 0, y: 0, width: 900, height: 620 } };
	},
	async 'dashboard'(page) {
		await go(page, `/dashboard?${p(NET_DRV)}`);
		await mark(page, [
			[page.getByPlaceholder('Search...'), 1, 'Search', { below: true }],
			[button(page, 'Today'), 2, 'Back to today', { below: true }],
			[button(page, 'TV'), 3, 'TV mode', { below: true }],
			[text(page, 'Auto reload'), 4, 'Auto reload', { below: true }],
			[text(page, '191').first(), 5, 'Unexpected results', { right: true }]
		]);
		return { clip: { ...contentOnly, height: 560 } };
	},
	async 'runs-list'(page) {
		await go(page, `/runs?${p(NET_DRV)}`);
		const row = page.locator('[data-testid="runs-row"]').first();
		await mark(page, [
			[page.getByPlaceholder('Metas or expression'), 1, 'Filter', { below: true }],
			[row.getByTestId('run-log-link'), 2, 'Log and run', {}],
			[page.locator('[data-testid="run-summary-badge"][data-summary="nok"]').first().or(text(page, 'NOK:').first()), 3, 'Open the failures', { below: true }]
		]);
		return { clip: contentOnly };
	},
	async 'runs-selected'(page) {
		await go(page, `/runs?${p(NET_DRV)}`);
		const first = await api.run(NET_DRV, 'nok-warning-032');
		const second = await api.run(NET_DRV, 'nok-warning-031');
		await selectRuns(page, [first, second]);
		await page.mouse.move(0, 0);
		await settle(page);
		await mark(page, [
			[page.locator(`[data-testid="runs-row"][data-run-id="${first}"]`), 1, 'Click rows to select', {}],
			[page.locator(`[data-testid="runs-row"][data-run-id="${second}"]`), 1, '', {}],
			[page.getByRole('link', { name: 'Multiple', exact: true }).last(), 2, 'Multiple', { below: true }],
			[page.getByRole('link', { name: 'Compare', exact: true }).last(), 3, 'Compare', { below: true }],
			[page.getByRole('button', { name: /\d+ runs selected/ }), 4, 'Selected runs', { left: true }]
		]);
		return {};
	},
	async 'runs-charts'(page) {
		await go(page, `/runs?${p(NET_DRV)}&mode=charts`);
		await mark(page, [
			[text(page, 'Group by'), 1, 'Day, week or month', {}],
			[page.getByTestId('runs-stats-summary'), 2, 'Totals for the range', { below: true, end: true }],
			[text(page, 'Runs by conclusion'), 3, 'Click a bar to list its runs', { right: true }]
		]);
		return { clip: contentOnly };
	},
	async 'runs-table'(page) {
		await go(page, `/runs?${p(NET_DRV)}&mode=progress`);
		await mark(page, [
			[page.getByText('Improved').first(), 1, 'Legend', { below: true }],
			[page.getByText('Group By').first(), 2, 'Group By', { below: true }],
			[page.getByText('Changes Only').first(), 3, 'Changes Only', { below: true }]
		]);
		return { clip: { ...contentOnly, height: 700 } };
	},
	async 'multiple'(page) {
		const a = await api.run(NET_DRV, 'nok-warning-031');
		const b = await api.run(NET_DRV, 'nok-warning-030');
		await go(page, `/multiple?${p(NET_DRV)}&runIds=${a}&runIds=${b}`);
		await mark(page, [
			[button(page, `Run ${a}`).or(link(page, `Run ${a}`)), 1, 'One tab per run', { below: true }],
			[page.locator('[data-testid="run-row"]').first(), 2, 'Counts added across the runs', { below: true, end: true }]
		]);
		return { clip: { ...contentOnly, height: 760 } };
	},
	async 'compare'(page) {
		const a = await api.run(NET_DRV, 'nok-warning-031');
		const b = await api.run(NET_DRV, 'ok-029');
		await go(page, `/compare?${p(NET_DRV)}&left=${a}&right=${b}`);
		await mark(page, [
			[text(page, 'Info Diff'), 1, '', { below: true }],
			[page.locator('[data-testid="tw-badge"]').filter({ hasText: '228' }).first().or(text(page, '228').first()), 2, '', { left: true }],
			[text(page, '+/-').first(), 3, '', { below: true }]
		]);
		return { clip: { ...contentOnly, height: 760 } };
	},
	async 'run-details'(page) {
		const run = await api.run(NET_DRV, 'nok-warning-031');
		await go(page, `/runs/${run}?${p(NET_DRV)}`);
		const firstRow = page.locator('[data-testid="run-row"]').first();
		await mark(page, [
			[button(page, 'Compare'), 1, 'Compare with another run', { below: true }],
			[link(page, 'Log').last().or(text(page, 'Log').last()), 2, 'Log', { below: true }],
			[button(page, 'Apply Rules'), 3, 'Apply Rules', { below: true }],
			[page.getByRole('button', { name: 'Requirements' }).first(), 4, 'Filter by requirements', {}],
			[button(page, 'Preview NOK').or(text(page, 'Preview NOK')), 5, 'Failures at a glance', {}],
			[firstRow.getByTestId('tw-badge').last(), 6, 'Click a count to list its results', { below: true, end: true }]
		]);
		return { clip: { ...contentOnly, height: 760 } };
	},
	async 'run-results'(page) {
		const run = await api.run(NET_DRV, 'nok-warning-031');
		await go(page, `/runs/${run}?${p(NET_DRV)}`);
		await openResults(page, 'basic');
		const table = page.locator('[data-testid="run-result-table"]').first();
		await mark(page, [
			[table.getByRole('button', { name: 'Obtained Result' }).or(table.getByText('Obtained Result')).first(), 1, 'Filter results', { below: true }],
			[table.getByRole('link', { name: 'Preview' }).first().or(table.getByText('Preview').first()), 2, 'Log, History, Preview', { below: true }]
		]);
		return { clip: contentOnly };
	},
	async 'run-report'(page) {
		const run = await api.run(DPDK, 'nok-error-035');
		const { run_report_configs: configs } = await api.get(`report/${run}/configs`);
		await go(page, `/runs/${run}/report?${p(DPDK)}&config=${configs[0].id}`);
		return { clip: contentOnly };
	},
	async 'run-report-section'(page) {
		const run = await api.run(DPDK, 'nok-error-035');
		const { run_report_configs: configs } = await api.get(`report/${run}/configs`);
		await go(page, `/runs/${run}/report?${p(DPDK)}&config=${configs[0].id}`);
		await page.getByRole('link', { name: /^Pps \(pps, mean\)/ }).first().click();
		await settle(page);
		await mark(page, [
			[text(page, 'TOC').first(), 1, 'Back to the contents', { left: true }],
			[text(page, 'Next').first(), 2, 'Next section', { below: true, end: true }]
		]);
		return { clip: contentOnly };
	},
	async 'run-issues'(page) {
		const run = await api.run(NET_DRV, 'nok-error-036');
		await go(page, `/runs/${run}/issues?${p(NET_DRV)}`);
		await mark(page, [
			[button(page, 'State').or(text(page, 'State').first()), 1, 'Filter issues', {}],
			[button(page, 'Apply Rules').last(), 2, 'Apply Rules', {}]
		]);
		return { clip: { ...contentOnly, height: 800 } };
	},
	async 'log'(page) {
		const run = await api.run(NET_DRV, 'nok-warning-031');
		await go(page, `/log/${run}?${p(NET_DRV)}&mode=treeAndinfoAndlog`);
		await page.getByTestId('log-legacy-toggle').waitFor();
		await mark(page, [
			[page.getByTestId('run-sidebar-log-mode'), 1, 'Layout', { right: true }],
			[page.getByTestId('log-legacy-toggle'), 2, 'Legacy Log', { left: true }],
			[text(page, 'Attachments').first(), 3, 'Attachments', { below: true }],
			[text(page, 'Error').first(), 4, 'Filter the lines', { right: true }]
		]);
		return {};
	},
	async 'history-search'(page) {
		await go(page, `/history?${p(DPDK)}&testName=${MEASURED_TEST}&${DATES}&mode=linear`);
		await button(page, 'Edit Search').click();
		await settle(page);
		return {};
	},
	async 'history-list'(page) {
		await go(page, `/history?${p(DPDK)}&testName=${MEASURED_TEST}&${DATES}&mode=linear`);
		await mark(page, [
			[text(page, 'Test Results').first(), 1, 'Totals', { below: true }],
			[button(page, 'Edit Search'), 2, 'Edit Search', { below: true }],
			[text(page, 'Test Path:'), 3, 'Active search', { below: true }],
			[link(page, 'Preview').first().or(text(page, 'Preview').first()), 4, 'Log, run, report, result', { below: true }]
		]);
		return { clip: { ...contentOnly, height: 620 } };
	},
	async 'history-groups'(page) {
		await go(page, `/history?${p(DPDK)}&testName=${MEASURED_TEST}&${DATES}&mode=aggregation`);
		return { clip: { ...contentOnly, height: 700 } };
	},
	async 'history-trend'(page) {
		await go(page, `/history?${p(DPDK)}&testName=${MEASURED_TEST}&${DATES}&mode=measurements`);
		await mark(page, [
			[page.getByRole('button', { name: 'Add to combined chart' }).first(), 1, 'Add to stacked', { below: true }]
		]);
		return { clip: { ...contentOnly, height: 560 } };
	},
	async 'history-series'(page) {
		// Only bublik-e2e has sampled series; the dpdk results are single values.
		await go(page, `/history?${p(E2E)}&testName=${SERIES_TEST}&${DATES}&mode=measurements-by-iteration`);
		return { clip: { ...contentOnly, height: 720 } };
	},
	async 'history-stacked'(page) {
		await go(page, `/history?${p(DPDK)}&testName=${MEASURED_TEST}&${DATES}&mode=measurements`);
		const add = page.getByRole('button', { name: 'Add to combined chart' });
		await add.nth(0).click();
		await add.nth(1).click();
		await settle(page);
		const stacked = page.getByRole('button', { name: 'Stacked', exact: true });
		if (!(await stacked.isVisible())) {
			await page.getByRole('button', { name: /chart\(s\) selected/i }).click();
		}
		await stacked.click();
		await settle(page);
		return { clip: { ...contentOnly, height: 920 } };
	},
	async 'result-default'(page) {
		const node = await api.testNode(1, 'throughput_rw', true);
		await go(page, `/runs/1/results/${node}/measurements?${p(E2E)}&mode=default`);
		const controls = page.getByRole('toolbar', { name: 'Chart controls' }).first().or(page.locator('[aria-label="Chart controls"]').first());
		await mark(page, [
			[controls, 1, 'Zoom, sliders and chart type', { below: true }],
			[page.getByRole('button', { name: 'Add to combined chart' }).first(), 2, 'Add to stacked', {}],
			[button(page, 'Export'), 3, 'Export', { below: true }]
		]);
		return { clip: { ...contentOnly, height: 720 } };
	},
	async 'result-split'(page) {
		const node = await api.testNode(1, 'throughput_rw', true);
		await go(page, `/runs/1/results/${node}/measurements?${p(E2E)}&mode=split`);
		return { clip: { ...contentOnly, height: 900 } };
	},
	async 'result-tables'(page) {
		const run = await api.run(DPDK, 'nok-error-035');
		const node = await api.testNode(run, 'testpmd_rxonly', false);
		await go(page, `/runs/${run}/results/${node}/measurements?${p(DPDK)}&mode=tables`);
		return { clip: { ...contentOnly, height: 360 } };
	},
	async 'issues'(page) {
		await go(page, `/issues?${p(NET_DRV)}`);
		const row = page.getByTestId('issue-row').first();
		await mark(page, [
			[page.getByTestId('issues-preset-attention'), 1, 'Actionable', { below: true }],
			[page.getByTestId('issues-preset-explained'), 2, 'Triaged', { right: true }],
			[row.getByText(/of \d+ active/i), 3, 'Rules', {}],
			[row.getByTestId('issue-result-count'), 4, 'Matched results', {}],
			[page.getByTestId('issue-create'), 5, 'New Issue', { left: true }]
		]);
		return { clip: { ...contentOnly, height: 620 } };
	},
	async 'issue-rules'(page) {
		await go(page, `/issues/rules?${p(NET_DRV)}`);
		return { clip: { ...contentOnly, height: 620 } };
	},
	async 'issue'(page) {
		await go(page, `/issues?${p(NET_DRV)}`);
		await text(page, 'Link drops under load across the basic suite').click();
		await settle(page);
		await mark(page, [
			[button(page, 'Results').or(link(page, 'Results')), 1, 'Results it matched', { below: true }],
			[page.getByText(/of \d+ rules active/i), 2, '', { right: true }],
			[page.getByRole('button', { name: 'New Rule' }).or(link(page, 'New Rule')), 3, 'New Rule', { below: true }]
		]);
		return { clip: { ...contentOnly, height: 420 } };
	},
	async 'admin-import'(page) {
		await go(page, '/admin/import');
		await neutralHost(page);
		await mark(page, [
			[button(page, 'Import'), 1, 'Import a run', { right: true }],
			[text(page, 'Auto-refresh'), 2, 'Auto-refresh', { below: true }],
			[text(page, 'Task').first(), 3, 'Task in Flower', { right: true }]
		]);
		return { clip: { ...contentOnly, height: 620 } };
	},
	async 'admin-configs'(page) {
		await go(page, '/admin/config');
		await page.getByText('per_conf #1').first().click();
		await settle(page);
		return { clip: { ...contentOnly, height: 620 } };
	},
	async 'admin-users'(page) {
		await go(page, '/admin/users');
		return { clip: { ...contentOnly, height: 220 } };
	}
};

const browser = await chromium.launch();
const context = await browser.newContext({
	viewport: VIEWPORT,
	deviceScaleFactor: 2,
	colorScheme: 'light',
	timezoneId: 'UTC',
	locale: 'en-US',
	ignoreHTTPSErrors: true
});
const login = await context.request.post(`${ORIGIN}/auth/login/`, {
	data: { email: process.env.BUBLIK_EMAIL, password: process.env.BUBLIK_PASSWORD }
});
if (!login.ok()) throw new Error(`login failed: ${login.status()}`);
await context.addInitScript(() => localStorage.setItem('sidebar-open', 'true'));
// Bublik builds its log URLs as https. Behind a plain http origin, serve them over http.
if (ORIGIN.startsWith('http://')) {
	const { host } = new URL(ORIGIN);
	await context.route(`https://${host}/**`, async (route) => {
		const response = await route.fetch({ url: route.request().url().replace('https://', 'http://') });
		await route.fulfill({
			response,
			headers: { ...response.headers(), 'access-control-allow-origin': ORIGIN, 'access-control-allow-credentials': 'true' }
		});
	});
}
await setup(context);
mkdirSync(OUT, { recursive: true });

const wanted = process.argv.slice(2);
let total = 0;
let failed = 0;
for (const [name, shoot] of Object.entries(SHOTS)) {
	if (wanted.length && !wanted.includes(name)) continue;
	const page = await context.newPage();
	try {
		const { clip } = await shoot(page);
		const png = join(PNG_DIR, `${name}.png`);
		const webp = join(OUT, `${name}.webp`);
		await page.screenshot({ path: png, clip });
		execFileSync('cwebp', ['-quiet', '-q', WEBP_QUALITY, '-m', '6', '-sharp_yuv', '-mt', png, '-o', webp]);
		const { size } = statSync(webp);
		total += size;
		const over = size > MAX_BYTES ? '  OVER BUDGET' : '';
		console.log(`${name.padEnd(18)} ${String(Math.round(size / 1024)).padStart(4)} KB${over}`);
	} catch (error) {
		failed += 1;
		console.error(`${name}: FAILED ${error.message.split('\n')[0]}`);
	} finally {
		await page.close();
	}
}
await browser.close();
console.log(`total ${(total / 1024 / 1024).toFixed(2)} MB, png in ${PNG_DIR}`);
process.exit(failed ? 1 : 0);
