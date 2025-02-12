// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TexTransTool',
  tagline: '非破壊テクスチャ改変ツール',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ttt.rs64.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Reina_Sakiria', // Usually your GitHub org/user name.
  projectName: 'TTT-Docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', "en"],
    localeConfigs: {
      ja: {
        htmlLang: 'ja',
      },
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ReinaS-64892/TTT-Docs/tree/main',
        },
        blog: {
          onUntruncatedBlogPosts: 'ignore'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/TTT_logo.png',
      navbar: {
        title: 'TexTransTool',
        logo: {
          alt: 'TTT icon',
          src: 'img/TTT_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentSidebar',
            position: 'left',
            label: 'ドキュメント',
          },
          { to: 'blog', label: 'ブログ', position: 'left' }, // or position: 'right'
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ReinaS-64892/TexTransTool',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Reina_Sakiria, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/FAQ',
            from: ['/docs/FAQ.md']
          },
        ],
      }
    ]
  ]
};

export default config;
