/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "dooboo",
  url: "https://docs.dooboo.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "hyochan",
  projectName: "dooboo",
  onBrokenLinks: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/next/hello",
            from: "/docs/hello",
          },
          {
            to: "/docs/next",
            from: "/docs",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "dooboo",
      logo: {
        alt: "dooboo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs",
          label: "Documentation",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/hyochan/docs.dooboo.io",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Implementation",
              to: "/docs/next/hello",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://dooboolab.com/joinSlack",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/dooboolab",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dooboolab.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          lastVersion: "current",
          versions: {
            current: {
              label: "next",
              path: "next",
            },
          },
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, docPath }) => {
            if (locale !== "en") {
              return `https://github.com/hyochan/docs.dooboo.io/tree/main/${locale}`;
            }
            // We want users to submit doc updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = "docs";
            return `https://github.com/hyochan/docs.dooboo.io/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
