We're excited to announce Bublik v2.19.0! <br />
This release adds **result classification**. You can explain a failure once by
attaching it to an issue, and Bublik matches the same failure in future runs.
Sign-in now happens in a **dialog** on the page you're on, and the sidebar gets
an **account menu** with a **dark mode** and **Beta features**. **History**
search now runs on the server

### What's New

**Result Classification** <br />
Select failed results, classify them under a new or existing issue, and decide
whether they still count as unexpected. The rules carry the classification over
to future runs. Issues, rules and their results each have their own page.

**Sign In Without Leaving the Page** <br />
When an action needs an account, Bublik opens a login dialog and then finishes
what you started. The sidebar's Settings item becomes an account menu.

**Dark Mode and Beta Features** <br />
Choose System, Light or Dark in the account menu. Try experimental features
from the new Beta menu.

<!--truncate-->

## Highlights

### Result Classification

A run often fails in ways the team already knows about: a known product bug, a flaky test. <br />
Until now every run reported them again as unexpected. <br />
With classification you explain a failure **once** and Bublik remembers it.

There are three new terms:

- **Issue**: the reason results failed, such as a bug, a flaky test or an
  environment problem. It can link to your bug tracker, for example `JIRA-145`.
- **Rule**: the results of one test that belong to the issue. A rule matches
  the test path and, optionally, parameters, verdicts and tags.
- **Stamp**: the mark a rule leaves on a matching result. Stamps are added
  when a run is imported, when you classify, or when you click **Apply Rules**.

Each rule has a **category**, and the category sets the default
**disposition**, which decides whether the stamped results still count:

| Category            | Badge       | Default disposition |
| ------------------- | ----------- | ------------------- |
| Product defect      | DEFECT      | Unexpected          |
| Test/automation bug | TEST BUG    | Expected            |
| Environment / infra | ENV         | Expected            |
| Known issue         | KNOWN       | Expected            |
| Flaky / intermittent | FLAKY      | Expected            |
| To investigate      | INVESTIGATE | Marked              |

:::info
Viewing classifications is public. <br />
Classifying results, applying rules and editing issues and rules require sign-in. <br />
To allow this without sign-in, add `manage_issues` to the project's
`NOT_PERMISSION_REQUIRED_ACTIONS`.
:::

#### 1. See What Is Already Explained

Open a run and expand a test. <br />
Every result that a rule matched shows its stamps under the verdicts: the issue key and the category.

![Classification stamps in the run results](/bublik-release/blog/img/run-stamps.webp)

1. **Stamps.** Each line is one issue. The key links to the issue in your
   tracker. Here every `ping` failure is matched by a flaky issue (`#21`) and
   by a product defect (`JIRA-145`).
2. **Counts follow the disposition.** The flaky rule marks these failures as
   expected, so all 8 move to **Expected → Failed**. The run no longer reports
   them as new problems.
3. **Classification filter.** Show only untriaged results, or only results with
   a particular effect, to find what still needs attention.

#### 2. Classify New Failures

Click a failed result row to select it. Click more rows, even rows of other
tests, to classify them together.

![Selecting results to classify](/bublik-release/blog/img/classify-select.webp)

1. **Select rows** by clicking them. Click a row again to deselect it.
2. **Classify N** opens the Classify drawer for the selected results.
3. The **selection pill** stays at the bottom of the page while you scroll and
   reopens the list of selected results.

The Classify drawer has three sections:

![Classify drawer](/bublik-release/blog/img/classify-drawer.webp)

1. **Issue.** Record a **New issue** with a title, tracker and bug key, or pick
   an **Existing issue**. <br />
   Pasting a full reference into Bug Key fills in the
   tracker and the key for you.
2. **Classification.** Choose one or more categories. The disposition follows
   the category (see the table above), and you can override it. Each category
   creates its own rule.
3. **Apply to.** **This + future matching runs** creates rules, so the same
   failure is stamped automatically when future runs are imported. **Just this
   result** stamps only the selected results and creates no rule.
4. **Match scope.** Choose which future results the rule matches. The path is
   always matched. Parameters, verdicts and tags are pre-filled from the
   selected results; remove values to make the rule broader, or clear a field
   to stop matching on it. **How matching works** explains each field.

:::tip
When you create a rule for future runs, Bublik stamps only the results you
selected. To stamp the other matching results in the current run, click
**Apply Rules** on the run page.
:::

#### 3. Review the Run's Issues

Each run now has an **Issues** page. It lists every issue that stamped at
least one of the run's results, together with the number of results it
stamped.

![Run issues](/bublik-release/blog/img/run-issues.webp)

1. **Run → Issues** in the sidebar shows how many open issues the run has. You
   can also open it with the **Issues** button in the run header.
2. **Actionable** and **Triaged** set the Category filter with one click.
   Actionable covers to investigate, product defects and test bugs. Triaged
   covers environment, flaky and known issues.
3. **Apply Rules** runs all active rules against the run's results again.
   Use it after you add or edit rules. Inactive rules and rules of closed
   issues are skipped. Apply Rules is also on the log and measurements pages.

#### 4. Manage Issues and Rules

**Issues** is a new top-level sidebar section. It lists the issues of all
projects, grouped by project.

![Issues page](/bublik-release/blog/img/issues-page.webp)

1. **Issues** and **Rules** in the sidebar list all issues and all rules. The
   badge shows the number of open issues.
2. **Key.** The issue's tracker key. Issues without a key show their ID, such
   as `#21`.
3. **Rules state.** The number of active rules out of the total. An issue can
   also show **No rules**, **No active rules** or **Deactivated**.
4. **Actionable / Triaged** presets, as on the run issues page. Search, State,
   Category, Rules and the sort order are kept in the URL, so you can share a
   filtered list.
5. **New Issue** records an issue before anything fails, for example a bug
   that's already known.

Click an issue to open its page:

![Issue page](/bublik-release/blog/img/issue-page.webp)

1. The sidebar's **Issue** entry shows the issue key. Its submenu opens the
   issue's **Results** and **Rules**, with their counts.
2. **Close** closes the issue and deactivates its rules. Suppressed results
   count as unexpected again. Reopening an issue does **not** reactivate its
   rules. Turn them back on one by one.
3. **Results** lists every result the issue stamped, across all runs, with
   links to the run, log and history.
4. **Match scope** shows what each rule matches on. Edit a rule to change its
   disposition, parameters, verdicts or tags, or to deactivate it.
5. **New Rule** adds a rule to this issue without classifying a result first.

#### 5. Follow an Issue in History

History can now filter by classification. Open **Edit Search** and scroll to
the new **Classification** section:

![Classification filters in History search](/bublik-release/blog/img/history-form.webp)

1. **Issue.** Show only the results stamped by one issue.
2. **Triage state.** **Untriaged** shows results that no rule has stamped.
   **Triaged** shows results that are already explained.
3. **Category.** Show only results stamped under the selected categories.

The filters are written to the URL, so a filtered History page can be shared:

![History filtered by an issue](/bublik-release/blog/img/history-issue.webp)

1. The **Issue** filter shows the issue's key and title.
2. Each result shows its stamps, as on the run page.

The search form's parameter, tag, label, branch and revision fields now suggest
values that exist in the project.

### Sign-In Dialog and Account Menu

Signing in is now done in a dialog instead of on a separate page.

- **Signing in.** If your session is missing or has expired, Bublik shows a
  login dialog and repeats the request after you sign in. You stay on the same
  page.
- **Run page.** When you're signed out, adding or editing notes and marking a
  run as compromised show a "Log in to …" tooltip. Clicking opens the login
  dialog. These actions used to fail with an error toast. Error toasts now show
  the reason the server gave.
- **Protected pages.** Chat requires sign-in. Admin → Users and Admin →
  Analytics are available to administrators only.
- **Account menu.** The sidebar's Settings item is replaced by an account row
  with your avatar, name and email. It opens a menu with the settings sections
  and Sign Out. When you're signed out, it shows a Sign In button.
- **Signing out** keeps the sidebar state and the selected project. If you're
  on a public page, you stay on it.

![Sign-in dialog](/bublik-release/blog/img/login-dialog.webp)

1. The dialog says which action needs an account. Here a signed-out user
   clicked **Classify**. After signing in, Bublik continues with the
   classification.

### Dark Mode and Beta Features

![Account menu with Appearance and Beta](/bublik-release/blog/img/account-beta.webp)

1. **Appearance.** Switch between System, Light and Dark right in the account
   menu, or under Settings → Appearance. The choice is saved in your browser,
   and Light is the default. Tables, charts, code editors and logs all follow
   the theme.
2. **Beta.** A list of experimental features, each with an on/off switch. The
   number on the Beta item shows how many features are available, and new ones
   are marked **NEW**. The same switches are under Settings → Beta.

The first Beta feature is **Dashboard Grid Layout**. It lays out the dashboard
table as a grid: numbers are right-aligned, short values are never cut off,
and headers stay at the top while you scroll.

### Server-Side History Search

The History substring filter used to match only the rows on the current page.
Matches on other pages were missing, and counts and pagination ignored the
filter. The search now runs on the server across all results:

![History search](/bublik-release/blog/img/history-search.webp)

1. Type in **Substring filter** and press Submit. The search matches tags,
   metadata shown on the page, parameters in `name=value` form, verdicts and
   the result type. It is case-insensitive.
2. The search is saved in the URL as `?search=`, so it survives a reload and is
   included when you share a link. **Reset Filter** clears it.

Counts, pagination, measurements and the legend now reflect the search.

### User Management

Admin → Users shows each user's **Status** (Pending, Active or Deactivated)
and the date they **joined**. Deactivated users can now be **reactivated**, so
deactivation is no longer permanent. If a user action fails, the error message
shows the reason the server gave.

Account security is tightened as well:

- Changing your password now requires the current one. Changing or resetting a
  password signs out the user's other sessions.
- Deactivating a user ends their existing sessions right away.
- Password reset links work only for the user they were sent to, and deactivated
  users can no longer reset their password or get reactivated by an old
  verification link.
- Administrators can't deactivate themselves or the system user, and the system
  user is no longer listed.
- If an email can't be sent, the error says so instead of reporting an
  unexpected server error.

### Smaller Improvements

- **Sidebar.** The Log entry moved under **Run**, next to Details, with
  buttons to switch the log layout. The Run entry shows the run ID, and the
  navigation scrolls with a thin scrollbar that doesn't take up width.
- **Dashboard.** The **Auto reload** setting is kept when you reload the page.
  Runs with hundreds of iterations no longer shrink their result strip to
  nothing.
- The **version label** in the sidebar links to the release notes for that
  version.
- In the **run table**, Objective and Notes come right after the tree by
  default instead of at the end, unless the project's
  `RUN_STATS_COLUMNS_DEFAULT` sets their position. Column orders you've saved
  are kept.
- The **Import** events table no longer re-renders four times a second while
  auto-refresh is on.
- **Short URLs** that failed to open or led to the wrong page now open the
  page that was shortened.
- **API.** A JSON request body that repeats a key is now rejected with 400, and
  an invalid project ID returns a clear error instead of a server error.

## Admin Section

### Backend Update

:::warning
The `server_packages` deployment step requires root rights. If you don't have root access, you must manually install the `python3-venv` package, which is now used instead of `python3-virtualenv` to build the virtual environment. If `ENV_PYTHON` points to a non-default Python, install the matching `python3.X-venv` package instead.
:::

1. `cd bublik`
2. `git remote update`
3. `git checkout v2.19.0`
4. `./scripts/deploy --steps server_packages general_conf pip_requirements django_settings migrate_db run_services`

:::warning
`EMAIL_USE_TLS` now defaults to `false`, but existing configurations may still contain `"EMAIL_USE_TLS": true`. Check it: use `false` for a local mail agent on `localhost` and `true` for an external SMTP server that requires STARTTLS.
:::

### Frontend Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-ui`
4. `git remote update`
5. `git checkout v2.19.0`

### Documentation Update

1. Trigger the workflow in your frontend repository
2. Synchronize the mirrors
3. `cd bublik-docs`
4. `git remote update`
5. `git checkout v2.19.0`

### Docker Instance Update

```bash
# 1. Backup the current db
task backup:create

# 2. Update the image tag in the .env file
sed -i "s/^IMAGE_TAG=.*/IMAGE_TAG=2.19.0/" .env

# 3. Pull the latest docker image
task pull

# 4. Start the docker container
task up
```

## Changelog

### Frontend

#### 🚀 New Feature

* **admin:** reactivate deactivated users ([1ad296b](https://github.com/ts-factory/bublik-ui/commit/1ad296b1e67b03fc44657044173302334cf814e6))
* **admin:** show user status and joined date in the users table ([ce06766](https://github.com/ts-factory/bublik-ui/commit/ce06766592ce4644a731a21b55c825e385b4ee7d)), closes [ts-factory/bublik#384](https://github.com/ts-factory/bublik/issues/384)
* **api:** accept search param on history endpoints ([5d2e194](https://github.com/ts-factory/bublik-ui/commit/5d2e19405883bfaca5c40cc0018fd6cf9eedac24)), closes [ts-factory/bublik#380](https://github.com/ts-factory/bublik/issues/380)
* **api:** add issues, rules and classify endpoints ([e52bd41](https://github.com/ts-factory/bublik-ui/commit/e52bd4165f2ac6d88ec5a09cfec488b2ae35f6e3))
* **api:** add the admin activate_user endpoint ([904138f](https://github.com/ts-factory/bublik-ui/commit/904138f5ffae5ef6d8f14be2fbbc39eead74167d)), closes [ts-factory/bublik#384](https://github.com/ts-factory/bublik/issues/384)
* **api:** prompt for login and retry on Not Authenticated ([5d8e3cc](https://github.com/ts-factory/bublik-ui/commit/5d8e3cc5d1fc39ada8e64e97837d6e23535d1e9f))
* **auth:** gate protected routes in the router ([8e762cd](https://github.com/ts-factory/bublik-ui/commit/8e762cd7c2d26e17b5655a4a4cf450bfc2736fda))
* **auth:** login dialog for missing or expired sessions ([c839cbe](https://github.com/ts-factory/bublik-ui/commit/c839cbe7f5c3f550b1ba787781fe973749a23c77))
* **classification:** add Actionable and Triaged category presets ([97a224e](https://github.com/ts-factory/bublik-ui/commit/97a224e917f7947d98966e8a66cda7bec4bab27a))
* **classification:** add issues pages, routes and sidebar ([68269ae](https://github.com/ts-factory/bublik-ui/commit/68269ae4d39efde8cf40282c201a89970d7ab3ac))
* **classification:** add issues, rules and results tables ([97e0991](https://github.com/ts-factory/bublik-ui/commit/97e0991f854d95e2bcb360da7e33017f6f2f90f0))
* **classification:** add lib with vocabulary and table shell ([dedc8a4](https://github.com/ts-factory/bublik-ui/commit/dedc8a47239089524cd55817b123f2158a9c2332))
* **classification:** classify results and edit issues and rules ([453e2f9](https://github.com/ts-factory/bublik-ui/commit/453e2f909bd102a914bd7f230bee58fad9b234e0))
* **dashboard:** lay the table out as a grid behind the dashboard-grid flag ([292075e](https://github.com/ts-factory/bublik-ui/commit/292075e8e0a3c380a27fe525d1e8a64aa93ba644))
* **history:** add classification filters and badges ([820d38b](https://github.com/ts-factory/bublik-ui/commit/820d38b2975559c8eae772a2d62462760a9cce6c))
* **history:** run substring filter on the server via ?search= ([92b34b7](https://github.com/ts-factory/bublik-ui/commit/92b34b7a250a69be52de29623708f01944acc75e)), closes [ts-factory/bublik#282](https://github.com/ts-factory/bublik/issues/282)
* **run:** require sign-in for notes and the compromised status ([3b6b248](https://github.com/ts-factory/bublik-ui/commit/3b6b24816a95416ada2b3c29a25fce28a31609e8))
* **run:** show classification in run, log and measurements ([64db980](https://github.com/ts-factory/bublik-ui/commit/64db980efc24dadb0b0c177cabf5bbe8d559e4d9))
* **settings:** add feature flags with switches in the Beta tab ([21b4a2e](https://github.com/ts-factory/bublik-ui/commit/21b4a2eb8915c14cb9758c26bdafbf6672e26e57))
* **sidebar:** add Rules and Results under the Issue entry ([e0478fd](https://github.com/ts-factory/bublik-ui/commit/e0478fdf2441760521c613a20e8d10dc3366cb3f))
* **sidebar:** float a thin scrollbar over the navigation ([6598ffb](https://github.com/ts-factory/bublik-ui/commit/6598ffb89fda302f9601c99852ba52e11d6c8aab))
* **sidebar:** fold the Log entry into the Run entry ([6ce4e9a](https://github.com/ts-factory/bublik-ui/commit/6ce4e9a5b5fad5ccc6eb56b42fd140e7910b783c))
* **sidebar:** link the version label to its release notes ([03013ea](https://github.com/ts-factory/bublik-ui/commit/03013eaa990bfd6373d958d0f3787f53190eeadc))
* **sidebar:** replace the settings item with an account menu ([5ca7c72](https://github.com/ts-factory/bublik-ui/commit/5ca7c72eb73d639dc2e7cb4f65f5828f32894a8c))
* **theme:** add a dark mode chosen in the Appearance settings ([f562540](https://github.com/ts-factory/bublik-ui/commit/f562540d0af242732e23671ddf639196cdf5f2f9))
* **types:** add user status and joined date ([b88da07](https://github.com/ts-factory/bublik-ui/commit/b88da07bc6c61d47f277b9aa6bc9c691a22cc6f0)), closes [ts-factory/bublik#384](https://github.com/ts-factory/bublik/issues/384)
* **ui:** add shared UI for classification ([8611bb2](https://github.com/ts-factory/bublik-ui/commit/8611bb2e2353688e22cd80c9fd22ab5ce8013e79))
* **ui:** replace EnvBadge with ParameterValue ([0f89380](https://github.com/ts-factory/bublik-ui/commit/0f893806ab2ca5efc9a90cd9db3a9e4c1008b987))


#### 💅 Polish

* **icons:** centre the Bulb glyph in its viewBox ([b1d0203](https://github.com/ts-factory/bublik-ui/commit/b1d0203fa6d346e05b06649507f65956d64de3e4))
* **log:** change icon for download attachment action ([4c9fc0d](https://github.com/ts-factory/bublik-ui/commit/4c9fc0da5a54ef8cf764a2ace48193921cdac34d))
* **ui:** size avatars with size-* utilities ([226c15f](https://github.com/ts-factory/bublik-ui/commit/226c15fb7e8a2d2632eb80e755d2a8e148d77c33))


#### 🐛 Bug Fix

* **admin:** surface backend errors from user actions ([ba22a45](https://github.com/ts-factory/bublik-ui/commit/ba22a450eb23a6c10f69a5dfe178421d53cf1553))
* **auth:** keep the sidebar state and project when signing out ([1483a91](https://github.com/ts-factory/bublik-ui/commit/1483a91f1cf3de18320d77b49b1234df2873c505))
* **auth:** stay on public pages when signing out ([5d1512b](https://github.com/ts-factory/bublik-ui/commit/5d1512bcf1d8c7674c56767fb9e9e73062dca628))
* **dashboard:** keep long run strips visible ([b63e0a5](https://github.com/ts-factory/bublik-ui/commit/b63e0a5ff2141649ccf95ecd751ab3883fa55b8c))
* **dashboard:** remember the Auto reload toggle across reloads ([98da063](https://github.com/ts-factory/bublik-ui/commit/98da063b4fda34594b3f1619a97dabed2864d5a6))
* **e2e:** wait for the import, compare and report pages to settle ([9eeeaf5](https://github.com/ts-factory/bublik-ui/commit/9eeeaf556214b5f35d60cccc39e0957d016a88fe))
* **import:** stop countdown from re-rendering the events table ([ae5c181](https://github.com/ts-factory/bublik-ui/commit/ae5c1816aa57edcc16c6c13c8ed44531cf76d6d4))
* **log:** route JSON log fetches through the dev proxy ([d1de35e](https://github.com/ts-factory/bublik-ui/commit/d1de35ea4b31c2ca12d3e633719bcaa1d269ec8e))
* **measurements,report:** render preformatted parameters as badges ([1b9e3cb](https://github.com/ts-factory/bublik-ui/commit/1b9e3cbfb81438fab543a8e8e53ee1396c71a494))
* **rules:** filter by whole verdict lists as the server matches them ([b4a06a6](https://github.com/ts-factory/bublik-ui/commit/b4a06a6df6638c7232a9a619863cea21ea9aa284))
* **run,history,run-diff:** render preformatted parameters as blocks ([493f4c6](https://github.com/ts-factory/bublik-ui/commit/493f4c647a177564e1de9197920b1826f9d0d1a0))
* **run:** keep Objective and Notes after the tree by default ([dd894a0](https://github.com/ts-factory/bublik-ui/commit/dd894a0e58442f024cc7b9154f900b2118b33022))
* **sidebar:** size the submenu guide in rem so it follows the rows ([a472033](https://github.com/ts-factory/bublik-ui/commit/a4720335e799c2ff573e4b81f98f4c8c2c67f880))


#### ♻ Code Refactoring

* **sidebar:** share the sidebar padding transition ([f7ea842](https://github.com/ts-factory/bublik-ui/commit/f7ea8426d14078c222156888ba599bea439cbd7c))
* **utils:** extract parameter formatting into shared util ([ea3a93a](https://github.com/ts-factory/bublik-ui/commit/ea3a93a881a4ff4bb7cd4f5c918e90e197f3ef25))

#### ✅ Tests

* **e2e:** right-click parameter badges to open context menu ([4579009](https://github.com/ts-factory/bublik-ui/commit/4579009d94f0ff7fe8b8cf0dfdaf7702bb71dbb5))
* **e2e:** add classification support helpers ([765dcd7](https://github.com/ts-factory/bublik-ui/commit/765dcd7c437a7a2d0005f7b5f6438dc6b8988703))
* **e2e:** add page objects for issues, rules and classification ([faf4f67](https://github.com/ts-factory/bublik-ui/commit/faf4f67ecffe5707037d95927968959649119587))
* **e2e:** add the classification keys to the manifest schema ([c403a9c](https://github.com/ts-factory/bublik-ui/commit/c403a9c6c451e9dcced5e7b407a8f31966021f90))
* **e2e:** check rule matcher semantics through Apply Rules ([0dedae2](https://github.com/ts-factory/bublik-ui/commit/0dedae2c875e322b10f63337e5cf82dc09b47236))
* **e2e:** check that seeded rules discriminate on the run imported after them ([158e6ae](https://github.com/ts-factory/bublik-ui/commit/158e6aec4bfa551c0567e17905d6e42f806addec))
* **e2e:** check that the next import honours the classify match scope ([db7943f](https://github.com/ts-factory/bublik-ui/commit/db7943f335485b5bd9de6665996352dbad3a25d9))
* **e2e:** check the classification pages against seeded data ([209cea6](https://github.com/ts-factory/bublik-ui/commit/209cea67093a1bb0043e5b206ebb733e43e1fde2))
* **e2e:** check the run table column order against the Columns menu ([5a6a59f](https://github.com/ts-factory/bublik-ui/commit/5a6a59fb5d0f879a9c032d250c3e746b6505880a))
* **e2e:** cover classifying results and editing issues and rules ([b855f62](https://github.com/ts-factory/bublik-ui/commit/b855f62bbdf4d30a7abdc0430e14a08fa6ece347))
* **e2e:** cover server-side history search ([879fe33](https://github.com/ts-factory/bublik-ui/commit/879fe337c333bd4c2c2794d8e59000e483eb499e))
* **e2e:** cover sign-in, protected pages and the account menu ([9e010cf](https://github.com/ts-factory/bublik-ui/commit/9e010cff1ab86b35dff75cccddde61cb1791f74d))
* **e2e:** cover the users table status and the self-deactivation guard ([db521a0](https://github.com/ts-factory/bublik-ui/commit/db521a03bed6339c5294e69c7e122af6b4cf7405))

---

### Backend

#### 🐛 Bug Fix

- **url:** return a clear error for invalid project ID ([ae99b3e](https://github.com/ts-factory/bublik/commit/ae99b3e274eff471ab7ab4f36627086959a58247))
- **pagination:** return DRF validation errors for invalid parameters ([51a7dc3](https://github.com/ts-factory/bublik/commit/51a7dc3eb4511c710c91a6d109f9101d95211e2d))
- **history:** return clear errors for missing test names ([d44c04f](https://github.com/ts-factory/bublik/commit/d44c04f44698092d6a2b9b2fe3e233c0168ab8f4))
- **config:** fix configurations being deleted along with their author ([6d89522](https://github.com/ts-factory/bublik/commit/6d89522f8b07ba83a4ca268e6466da3c9149d3fb))
- **config:** fix sending email with the default SMTP settings ([03e0570](https://github.com/ts-factory/bublik/commit/03e05703928fed62372679756dca374d03ba8759)), related to [#208](https://github.com/ts-factory/bublik/issues/208)
- **auth:** fix email sending failures reported as unexpected server errors ([7af057a](https://github.com/ts-factory/bublik/commit/7af057ac429054f7fee213f752dbaff1c6c09a53)), related to [#208](https://github.com/ts-factory/bublik/issues/208)
- **importruns:** isolate import statistics from worker process reuse ([4eb7155](https://github.com/ts-factory/bublik/commit/4eb7155aeb7981e7ec83a148fd98c239b5236ca5)), related to [#105](https://github.com/ts-factory/bublik/issues/105)
- **importruns:** keep logged stage durations accurate across clock changes ([c19fb31](https://github.com/ts-factory/bublik/commit/c19fb318c3ee428aab820972d5bac3a730bda0ef)), related to [#105](https://github.com/ts-factory/bublik/issues/105)
- **deploy:** fix losing the virtual environment when its rebuild fails ([f39cff8](https://github.com/ts-factory/bublik/commit/f39cff8d17181fd8ca1018b128a5574a8c9917c9)), related to [#258](https://github.com/ts-factory/bublik/issues/258)
- **deploy:** fix services step reusing the action chosen for side servers ([89e889a](https://github.com/ts-factory/bublik/commit/89e889a82e8ff3a14a686cc18e7269338bef8c27))
- **deploy:** restart side servers when no action is entered ([d36e851](https://github.com/ts-factory/bublik/commit/d36e8511942ff0b633be9a65c7172623da0191a8))
- **deploy:** support quiet mode in the side servers step ([7740674](https://github.com/ts-factory/bublik/commit/77406745acafa12f12ab58fb27002f590de95859))
- **auth:** fix users being left unverifiable when the verification email fails ([eb8c4b2](https://github.com/ts-factory/bublik/commit/eb8c4b204271664fe7bfedd09a0dcd92ef0be380))
- **auth:** fix password reset links not being bound to their user ([593458a](https://github.com/ts-factory/bublik/commit/593458af94ccbbdb05d7b9cb9a983eaf752e771f))
- **auth:** fix users being able to change their password without the current one ([930e145](https://github.com/ts-factory/bublik/commit/930e145ccba3e74dcf9e822dc093b37f31bc24ce))
- **auth:** fix email being silently ignored when users update their own info ([7f4e390](https://github.com/ts-factory/bublik/commit/7f4e3909fcfbe288000cead8ca17c3d65761549c))
- **auth:** fix old sessions staying active after a password change ([22b1dbf](https://github.com/ts-factory/bublik/commit/22b1dbf383ebb345da80d6993fa4721113b9282a))
- **auth:** fix deactivated users keeping access through existing sessions ([7e608fd](https://github.com/ts-factory/bublik/commit/7e608fd2dad8332b661905ba05349536ae52b104))
- **auth:** fix email verification links reactivating deactivated users ([99fda28](https://github.com/ts-factory/bublik/commit/99fda285f93fe2ab29c33e2199b4d192ba1df570))
- **auth:** fix deactivation of oneself and the system user being allowed ([5d04e90](https://github.com/ts-factory/bublik/commit/5d04e90f969f79bb5225b92413ca247e9ee69bd3))
- **auth:** forbid password reset for deactivated users ([f9cff25](https://github.com/ts-factory/bublik/commit/f9cff2528a42164f6d973ec60b65dd2e874ee738))
- **auth:** fix server error on user management for unknown emails ([7c62d51](https://github.com/ts-factory/bublik/commit/7c62d51418c9f99db6135a5abc639b11601ff3a4))
- **auth:** fix token refresh and logout errors being reported as failures ([bb03940](https://github.com/ts-factory/bublik/commit/bb0394029220bd484e5eec8fb12d7045eaba758b))
- **auth:** fix logout leaving the client logged in when the session is revoked ([8d63cbf](https://github.com/ts-factory/bublik/commit/8d63cbfee431d9e9e918fadc62ca4ec60f56dc5d))
- **auth:** fix conflicting user migrations ([90aa808](https://github.com/ts-factory/bublik/commit/90aa8085ad734c762c2110a8c4d25501331125f4))
- **auth:** fix password reset email failures reported as unexpected errors ([901c856](https://github.com/ts-factory/bublik/commit/901c856e626c04f59699c2ceb51362614ec22162)), related to [#208](https://github.com/ts-factory/bublik/issues/208)
- **middleware:** normalize project ID before settings lookup ([5804466](https://github.com/ts-factory/bublik/commit/5804466dbea4a3ec5e50af36e02a1a2f87ab228c))
- **performance:** return a clear error for invalid project ID ([0133dbc](https://github.com/ts-factory/bublik/commit/0133dbc85665caed40a2c7377d5c15f7a0dd5d79))
- **core:** reject a JSON request body that repeats a key ([3b83d86](https://github.com/ts-factory/bublik/commit/3b83d86deee0de598a7253c70e51fc97ed92c8d3))
- **run:** reject result IDs in run lookup ([0370bde](https://github.com/ts-factory/bublik/commit/0370bde9866ede5ea2908d72b867370d17028c02))
- **run:** fix greedy tracker match in ref://TRACKER/KEY parsing ([9350ae5](https://github.com/ts-factory/bublik/commit/9350ae5e7e8dacadee29df34a7c7945759671fa5))
- **pagination:** fix the response for an invalid page ([af70ac9](https://github.com/ts-factory/bublik/commit/af70ac90576edbc83cff4a6b5315b80cf282dc45))
- **exceptions:** keep nested validation errors structured ([17c6a67](https://github.com/ts-factory/bublik/commit/17c6a67d959925e5ce715f56dcdbc87c697e7f9d))
- **urls:** fix short URLs that fail to open for some hashes ([fe30aaf](https://github.com/ts-factory/bublik/commit/fe30aaf43cb29059508971708f330a2aafc38b0e)), closes [#394](https://github.com/ts-factory/bublik/issues/394)
- **urls:** fix short URLs leading to a view other than the shortened one ([5daa452](https://github.com/ts-factory/bublik/commit/5daa452150ed151792e47216d42939e21ccb186d))
- **urls:** fix server error on short URLs without a view ([6d5317c](https://github.com/ts-factory/bublik/commit/6d5317c9b04f59103f32ccc3d9883ebf950a29b5))
- **chat:** fix failed tool calls shown as successful ([8aeae75](https://github.com/ts-factory/bublik/commit/8aeae758b93f3f472e7473c8c45099dadbecdb18))
- **chat:** stop counting Moonshot AI as a fixed-endpoint provider ([9b93128](https://github.com/ts-factory/bublik/commit/9b93128772525cc34881b85d3be2a6d3ddd1c277))

#### 🚀 New Feature

- **importruns:** make unexpected import failure messages more informative ([d48a900](https://github.com/ts-factory/bublik/commit/d48a900450fd99d58a8454e930aaae7900750eed)), related to [#262](https://github.com/ts-factory/bublik/issues/262)
- **deploy:** allow building virtual environment with non-default Python ([b49ab84](https://github.com/ts-factory/bublik/commit/b49ab841e31a28142dab8615afeeb2fbe9911eff)), closes [#258](https://github.com/ts-factory/bublik/issues/258)
- **history:** allow filtering history by substring ([9d2abe0](https://github.com/ts-factory/bublik/commit/9d2abe054dd5ee105e82a3349c520a0111482947)), closes [#282](https://github.com/ts-factory/bublik/issues/282)
- **auth:** record when users join ([b19d061](https://github.com/ts-factory/bublik/commit/b19d061b67961e9cf45d28731dfcc73f49e6ad9f))
- **auth:** replace the user active flag with a status ([5214abe](https://github.com/ts-factory/bublik/commit/5214abee47bd9c7d7cc5fc07ed2353be8d31824e))
- **auth:** report invalid user status transitions with a dedicated error ([cb2ea34](https://github.com/ts-factory/bublik/commit/cb2ea341edf9a8febc4b9f1d2443cec7c7785386))
- **auth:** verify the email when a pending user resets the password ([bb0c95c](https://github.com/ts-factory/bublik/commit/bb0c95cdee2d7f13f1f84cf3eea1f5e57d72fdc0))
- **auth:** hide the system user from the list of users ([a1b0977](https://github.com/ts-factory/bublik/commit/a1b09778c53698550aa4aed5b402fafd60070537))
- **auth:** allow administrators to reactivate deactivated users ([7462214](https://github.com/ts-factory/bublik/commit/746221408176a3ed7c7ef6890eb866370ba3c029))
- **core:** make it possible to reject an invalid date query parameter ([3875c3b](https://github.com/ts-factory/bublik/commit/3875c3b43c88d9a5559a4d919f2ae53529f1aa3c))
- **issue:** introduce data structure for issue classification ([c0315af](https://github.com/ts-factory/bublik/commit/c0315af6d96bb1c79ed91be98112ad3d66ee735c))
- **core:** define suppression rule for expected classifications ([46107b7](https://github.com/ts-factory/bublik/commit/46107b798f0842d47b78c8a73e21cb095ec0f4ed))
- **issue:** add validation and preprocessing for issues and rules ([1c1bd5d](https://github.com/ts-factory/bublik/commit/1c1bd5d39a18477718f07bb3420e9b4bc0e1f758))
- **result:** augment result details with full test path ([bdfa366](https://github.com/ts-factory/bublik/commit/bdfa366e6fc89aa0f673756e5f2928c308bc2e6f))
- **filters:** add a stable-ordering filter backend ([881282e](https://github.com/ts-factory/bublik/commit/881282ea48dd981a4d1d5bb4c7350940562794c1))
- **pagination:** make it possible to page a list by project ([2ec3d36](https://github.com/ts-factory/bublik/commit/2ec3d36ba450c355025beb032620641392aec3e6))
- **cache:** add invalidation for classification-affected caches ([2e37cb1](https://github.com/ts-factory/bublik/commit/2e37cb1b69000afddf4793bb78f0c7c6d99b5adf))
- **core:** add rule-matching engine for classification ([0336ea9](https://github.com/ts-factory/bublik/commit/0336ea9adab4b68df39402d2693624309d32b9f4))
- **auth:** allow judging permissions by the projects of changed objects ([53b3c2f](https://github.com/ts-factory/bublik/commit/53b3c2f2646d60cb0674837d02bcbfb87c3ae3b8))
- **issue:** add API for management ([e6cd8ac](https://github.com/ts-factory/bublik/commit/e6cd8ac13890806d893ae568fb9d4f1d0f9a0ef5))
- **run:** add endpoint to apply classification rules on demand ([605338b](https://github.com/ts-factory/bublik/commit/605338b2a04588e55dea6fb673c2d30d8ac72c0e))
- **run stats:** suppress results classified as expected ([b4160c3](https://github.com/ts-factory/bublik/commit/b4160c3205d4926a058f27b63de7ae77e734c5d8))
- **result:** include classification info in result details ([ad1a96d](https://github.com/ts-factory/bublik/commit/ad1a96dc5311064e3ef5ac114cfa0b5fb0c72632))
- **result:** add endpoint to classify results ([2e3e3c2](https://github.com/ts-factory/bublik/commit/2e3e3c2538164d60e1dd1e88110df772ffb4db6c))
- **result:** allow filtering results by issue ([abaa2d1](https://github.com/ts-factory/bublik/commit/abaa2d13160654b9279850e042b81eca7d0cab5d))
- **result:** add endpoint to unclassify results ([413e004](https://github.com/ts-factory/bublik/commit/413e00492f5cb7b9c6273dea28d78f466cc4a726))
- **importruns:** classify results automatically on import ([0872f49](https://github.com/ts-factory/bublik/commit/0872f499bea37ab84aa98afa0bb565acf6b8b300))
- **history:** add filters to find classified and not-yet-triaged results ([9be3645](https://github.com/ts-factory/bublik/commit/9be3645cd3ae5aecadd01e71b3468fc11c172d1b))
- **history:** add endpoint to fetch issue search options ([6b97a4e](https://github.com/ts-factory/bublik/commit/6b97a4ec394ecd42cc34ea2f8f3f48ff6a4fa193))
- **run:** add endpoint to summarize classified issues per run ([bb2f554](https://github.com/ts-factory/bublik/commit/bb2f554baaf3768c66138ba46b236583b3f27d72))
- **run:** add endpoint to list a run's results classified under an issue ([08d6330](https://github.com/ts-factory/bublik/commit/08d6330a81ff70177a9256f66fc29e41a78bee4a))
- **issue:** add endpoint to search and suggest issues for classification ([f098690](https://github.com/ts-factory/bublik/commit/f09869007cd2a34985711b905185050b7a172942))
- **issue:** add endpoint to search and suggest tests for the rule form ([c04e14c](https://github.com/ts-factory/bublik/commit/c04e14cf7d32d6fe3b27f541ace691a92dab1832))
- **issue:** add endpoint to page and filter an issue's results ([dd0b7a2](https://github.com/ts-factory/bublik/commit/dd0b7a2467dfcaa9b8eb9617d605e568066fe15f))
- **config:** make issue management without authentication possible ([9305a74](https://github.com/ts-factory/bublik/commit/9305a74fdbb9cecbeed983a0ed0876ec9a5819a5))

#### ⚡ Performance

- **result:** avoid an extra query per result when listing result details ([519c1c5](https://github.com/ts-factory/bublik/commit/519c1c5c7fa92b85b42537fd23e286f37f93fcdd))
- **result:** avoid queries per expectation when listing result details ([70f9c5b](https://github.com/ts-factory/bublik/commit/70f9c5be5b66c94c9e1ee9bfac5dc8fb853d08dd))
- **pagination:** avoid loading a whole queryset to page over it ([385bfca](https://github.com/ts-factory/bublik/commit/385bfca28c29312418bc639c3a3d61d5eaf4e405))

#### ♻️ Code Refactoring

- **project:** introduce DTO-based service contracts ([9abf69f](https://github.com/ts-factory/bublik/commit/9abf69f7acbe9a543b2832610ffb39acd9e378e8))
- **project:** remove pagination from ViewSet for consistency ([e066559](https://github.com/ts-factory/bublik/commit/e066559fcf0ce4bd42e39f1be87267ac142e9a92))
- **url:** prepare API module for independent evolution ([3df2ea0](https://github.com/ts-factory/bublik/commit/3df2ea0dddc83ef9b7b9642aba5182ab6590975b))
- **history:** prepare API module for independent evolution ([40f8423](https://github.com/ts-factory/bublik/commit/40f8423efbcf844a3be4c1d103e8c8a9ab8aeaf0))
- **history:** introduce DTO-based service contracts ([752d30f](https://github.com/ts-factory/bublik/commit/752d30f58a825d698d26724b97b2cb8a26e03e93))
- **history:** remove pagination from ViewSet for consistency ([bbefab1](https://github.com/ts-factory/bublik/commit/bbefab1b03d3293994bc4eb43221d7631fa3bab9))
- **config:** follow Django's recommended way of referencing the user model ([209aee9](https://github.com/ts-factory/bublik/commit/209aee99cef506752a48fd8cbd435c7caaada194))
- **history:** prepare results data for substring filtering ([e0e2aeb](https://github.com/ts-factory/bublik/commit/e0e2aeb900a02dd4bff40b04330283a790491ab2)), related to [#282](https://github.com/ts-factory/bublik/issues/282)
- **auth:** validate requests with serializers the way DRF intends ([4b55c89](https://github.com/ts-factory/bublik/commit/4b55c89830f0fdc14fa2b2e663bfc70b24dd902f))
- **auth:** authenticate login requests with a serializer ([2aff564](https://github.com/ts-factory/bublik/commit/2aff564b9554f6bffa98e69c2826ab6637f2afb5))
- **auth:** group the public endpoints into viewsets ([495e736](https://github.com/ts-factory/bublik/commit/495e7367f0990f46892adfff801c1a10fcd86a79))
- **auth:** get the current user and serializers the way DRF intends ([98fd656](https://github.com/ts-factory/bublik/commit/98fd6561fb35b0cd52578538964a19a6c1fcf3ac))
- **auth:** prepare API module for independent evolution ([ce439ab](https://github.com/ts-factory/bublik/commit/ce439ab9066f02dac62511e61fc14d916837d3cd))
- **auth:** remove pagination from admin ViewSet for consistency ([9f4e0ab](https://github.com/ts-factory/bublik/commit/9f4e0abc66ff1338137d41440108f4e5a7cd710c))
- **auth:** keep user status transitions in the user model ([a58071f](https://github.com/ts-factory/bublik/commit/a58071f196bd24d5c107b6ae54a289d8a01de4fb))
- **performance:** prepare API module for independent evolution ([4500d1c](https://github.com/ts-factory/bublik/commit/4500d1cb4a3d596ce4a6d697e067e89787b77732))
- **tree:** prepare API module for independent evolution ([d12cfbe](https://github.com/ts-factory/bublik/commit/d12cfbe50f48f1e74c2dc67092a2fd0fc193556b))
- **tree:** introduce DTO-based service contracts ([4fad89b](https://github.com/ts-factory/bublik/commit/4fad89b2272dfdcc2a8c2018c4baff16e2292e55))
- **history:** prevent positional argument mix-ups when building history queries ([8f5c79b](https://github.com/ts-factory/bublik/commit/8f5c79b97171e3870ef2297d202c0680948580e8))
- **run:** extract shared ref://TRACKER/KEY parsing helper ([6e652c7](https://github.com/ts-factory/bublik/commit/6e652c7bb3d9b1ff8af44f9640bfbeffa76183b4))
- **auth:** make the user check usable outside decorators ([9285b77](https://github.com/ts-factory/bublik/commit/9285b77dea102ac25304d063f48acc31de9847e7))

#### 📝 Documentation

- **readme:** update formatting and structure for better clarity ([04da480](https://github.com/ts-factory/bublik/commit/04da480ca0f669df41c92d484ab0d40474ab2a25))
- **readme:** update installation instructions ([449d7df](https://github.com/ts-factory/bublik/commit/449d7df8fe3bb6df0725a69659ccc489e0fec1fb))

#### 📦 Chores

- **deploy:** rename initial deployment script for clarity ([fbb94f6](https://github.com/ts-factory/bublik/commit/fbb94f640bd252a37851dc87031925557f67b978))
- **project:** align OpenAPI schemas with actual API responses ([582f86e](https://github.com/ts-factory/bublik/commit/582f86e4cb9f77e27d5f2804e5220cadcfa2cbd9))
- **url:** align OpenAPI schemas with actual API responses ([b2147f7](https://github.com/ts-factory/bublik/commit/b2147f736c05c70fbdf1b25871b514af71f36dc8))
- **history:** align OpenAPI schemas with actual API responses ([c7d125e](https://github.com/ts-factory/bublik/commit/c7d125ec88d4dd2c12806c9e8ae0aa205c1b236e))
- **deploy:** make virtual environment build independent of system tools ([07c22f6](https://github.com/ts-factory/bublik/commit/07c22f66bf58fdfefbc63d500795240a304b97e5)), related to [#258](https://github.com/ts-factory/bublik/issues/258)
- **auth:** align OpenAPI schemas with actual API responses ([dc28448](https://github.com/ts-factory/bublik/commit/dc2844836579d40dca20004b889762f92cc98d0f))
- **auth:** document email sending failures in OpenAPI schemas ([3e5c519](https://github.com/ts-factory/bublik/commit/3e5c519e72793e9f6c1b4180dcb422a631969d2e)), related to [#208](https://github.com/ts-factory/bublik/issues/208)
- **requirements:** update packages versions to pick up bug fixes ([4c79888](https://github.com/ts-factory/bublik/commit/4c798881496ee952b12c7cdb0d89f13744f9ea90))
- **performance:** align OpenAPI schema with actual API response ([1437a15](https://github.com/ts-factory/bublik/commit/1437a1549032adc18d3edc68f841204954f0e49c))
- **tree:** align OpenAPI schemas with actual API responses ([2fabe0e](https://github.com/ts-factory/bublik/commit/2fabe0ef114f76cd590e8c36998b5c89ba1d7b6d))
- **requirements:** update packages versions to pick up bug fixes ([a11cd2b](https://github.com/ts-factory/bublik/commit/a11cd2bda16a645e29521e9557e8291be819db2f))

#### 🧹 Cleanup

- **importruns:** fix lint failure on the intentionally local import ([7b34d4f](https://github.com/ts-factory/bublik/commit/7b34d4fe6354c5c4fc1320618238e7d01be1ed74))
