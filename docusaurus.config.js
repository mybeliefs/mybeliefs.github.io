const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My Beliefs Site',
  tagline: 'Why I believe',
  url: 'https://mybeliefs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mybeliefs.png',
  organizationName: 'mybeliefs', 
  projectName: 'mybeliefs.github.io', 
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: true, // the default
        },
        blog: false, 
        theme: {
           customCss: require.resolve('./src/css/customTheme2.css'), 
          //customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MyBeliefs Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mybeliefs.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'why-i-believe',
            position: 'right',
            label: 'Thoughts',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Site',
                to: 'https://mybeliefs.github.io/',
              },
            ],
          },
          {
            items: [
              {
                label: 'Discussions',
                to: 'https://github.com/mybeliefs/mybeliefs.github.io/discussions',
              },
            ],
          },
 
          {
            items: [
              {
                label: 'Contact',
                to: 'mailto:mark.mybeliefs@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Beliefs project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
