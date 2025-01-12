// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DEPLOYMENT_BRANCH = 'gh-pages';
const ORGANIZATION_NAME = 'ts-factory';
const PROJECT_NAME = 'bublik-release';
const GITHUB_REPO_URL = `https://github.com/${ORGANIZATION_NAME}/${PROJECT_NAME}`;

const BASE_URL = `${process.env['BASE_URL'] ?? `/${PROJECT_NAME}/`}`;
const URL = `${
  process.env['URL'] ?? `https://${ORGANIZATION_NAME}/${PROJECT_NAME}`
}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bublik',
  tagline: 'Dinosaurs are cool',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: URL,
  baseUrl: BASE_URL,
  projectName: PROJECT_NAME, // Usually your repo name.
  organizationName: ORGANIZATION_NAME, // Usually your GitHub org/user name.
  deploymentBranch: DEPLOYMENT_BRANCH,
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'Bublik Blog',
          blogDescription: 'The personal blog of Bublik',

          showReadingTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${GITHUB_REPO_URL}/edit/main/`,
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bublik',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: GITHUB_REPO_URL,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    }),
  plugins: ['docusaurus-plugin-image-zoom'],
};

module.exports = config;
