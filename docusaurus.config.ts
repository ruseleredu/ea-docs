import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Enabling math equations in markdown files
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} sd-docs, Inc. Built with Docusaurus at ${utc3Time} UTC-3.`;

const config: Config = {
  title: "ELT82E - Eletrônica Analógica",
  tagline:
    "Polarizar componentes ativos para atuar na região de corte, saturação e linear. Ensaiar circuitos eletrônicos contendo componentes ativos e passivos.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ruseleredu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ea-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ruseleredu", // Usually your GitHub org/user name.
  projectName: "ea-docs", // Usually your repo name.

  deploymentBranch: "gh-pages", // The branch that GitHub pages will deploy from.
  trailingSlash: false, // Set to true if you want to add a trailing slash to all URLs.
  onDuplicateRoutes: "warn",
  onBrokenLinks: "warn", // 'warn' or 'ignore'
  markdown: {
    mermaid: true, // Diagrams can be rendered using Mermaid in a code block.
    hooks: {
      onBrokenMarkdownLinks: "warn", // or 'throw'
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Include the KaTeX CSS in your config under stylesheets:
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Wsr4Nh3yrvMf2KCebJchRJoVo1gTU6kcP05uRSh5NV3sj9+a8IomuJoQzf3sMq4T",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/ea-docs/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ruseleredu/ea-docs/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "psim", // Unique ID for this docs instance
        path: "psim", // Path to your PSIM docs folder
        routeBasePath: "psim", // Base URL for these docs (e.g., yoursite.com/psim/...)
        sidebarPath: require.resolve("./sidebars-psim.ts"), // Separate sidebar for PSIM docs
        // ... other options specific to your PSIM docs
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "ltspice", // Unique ID for this docs instance
        path: "ltspice", // Path to your LTspice docs folder
        routeBasePath: "ltspice", // Base URL for these docs (e.g., yoursite.com/ltspice/...)
        sidebarPath: require.resolve("./sidebars-ltspice.ts"), // Separate sidebar for LTspice docs
        // ... other options specific to your LTspice docs
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ELT82E",
      logo: {
        alt: "ELT82E Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/psim/intro", // Link to a page in your PSIM docs
          label: "PSIM",
          position: "left",
          activeBaseRegex: `/psim/`, // Highlight when any PSIM doc is active
        },
        {
          to: "/ltspice/intro", // Link to a page in your LTspice docs
          label: "LTspice",
          position: "left",
          activeBaseRegex: `/ltspice/`, // Highlight when any LTspice doc is active
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          to: "/pdf/CT2026.pdf",
          label: "Calendário",
          position: "right",
          target: "_blank",
        },
        {
          href: "https://github.com/ruseleredu/ea-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "UTFPR",
          items: [
            {
              label: "Moodle",
              href: "https://moodle.utfpr.edu.br/",
            },
            {
              label: "Webmail",
              href: "https://webmail.utfpr.edu.br/",
            },
            {
              label: "Sistemas",
              href: "https://sistemas2.utfpr.edu.br/",
            },
            {
              label: "SEI",
              href: "https://sei.utfpr.edu.br/",
            },
            {
              label: "Chat",
              href: "https://chat.utfpr.edu.br/",
            },
            {
              label: "Ajuda",
              href: "https://ajuda.utfpr.edu.br/",
            },
            {
              label: "Calendário",
              href: "https://www.utfpr.edu.br/alunos/calendario",
            },
            {
              label: "TCC",
              href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
            },
          ],
        },
        {
          title: "Sistemas",
          items: [
            {
              label: "Sigepe",
              href: "https://sougov.sigepe.gov.br/sougov/Home",
            },
            {
              label: "Consulta Diários",
              href: "https://sistemas2.utfpr.edu.br/url/1141",
            },
            {
              label: "Permanências",
              href: "https://sistemas2.utfpr.edu.br/url/1026",
            },
            {
              label: "Planejamento",
              href: "https://sistemas2.utfpr.edu.br/url/1890",
            },
            {
              label: "Lançamentos",
              href: "https://sistemas2.utfpr.edu.br/url/1514",
            },
            {
              label: "Mapa de Professor",
              href: "https://sistemas2.utfpr.edu.br/url/1022",
            },
            {
              label: "Mapa de Sala",
              href: "https://sistemas2.utfpr.edu.br/url/1934",
            },
          ],
        },
        {
          title: "Desenvolvedor",
          items: [
            {
              label: "Visual Studio Code",
              href: "https://code.visualstudio.com/download",
            },
            {
              label: "Git SCM",
              href: "https://git-scm.com/downloads",
            },
            {
              label: "GitHub CLI",
              href: "https://cli.github.com/",
            },
            {
              label: "GitHub Desktop",
              href: "https://desktop.github.com/download/",
            },
            {
              label: "PlatformIO",
              href: "https://platformio.org//install/ide?install=vscode",
            },
            {
              label: "Arduino IDE",
              href: "https://www.arduino.cc/en/software/",
            },
          ],
        },
        {
          title: "Ferramentas",
          items: [
            {
              label: "LTspice",
              href: "https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html",
            },
            {
              label: "PSIM",
              href: "https://altair.com/psim",
            },
            {
              label: "SMath Studio",
              href: "https://smath.com/en-US",
            },
            {
              label: "Tinkercad Circuits",
              href: "https://www.tinkercad.com/circuits",
            },
          ],
        },
        {
          title: "Doku Sites",
          items: [
            {
              label: "Main Site",
              href: "https://adrianoruseler.github.io/site/",
            },
            {
              label: "STM32 Docs",
              href: "https://ruseleredu.github.io/stm32doc/",
            },
            {
              label: "Sistemas Digitais",
              href: "https://ruseleredu.github.io/sd-docs/",
            },
            {
              label: "Analógica",
              href: "https://ruseleredu.github.io/ea-docs/",
            },
            {
              label: "LabSEC",
              href: "https://ruseleredu.github.io/labsec/",
            },
            {
              label: "Moodle Docs",
              href: "https://adrianoruseler.github.io/moodle-docs/",
            },
            {
              label: "My Docs",
              href: "https://adrianoruseler.github.io/my-docs/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@Rusla82",
            },
            {
              label: "YouTube Edu",
              href: "https://www.youtube.com/@adrianoruseler653",
            },
            {
              label: "GitHub",
              href: "https://github.com/AdrianoRuseler/",
            },
            {
              label: "GitHub Edu",
              href: "https://github.com/ruseleredu/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/adrianoruseler/",
            },
            {
              label: "ResearchGate",
              href: "https://www.researchgate.net/profile/Adriano-Ruseler/",
            },
            {
              label: "ORCID",
              href: "https://orcid.org/0000-0003-0915-9483",
            },
          ],
        },
      ],
      copyright: COPYRIGHT_STRING,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "autohotkey",
        "arduino",
        "apacheconf",
        "nginx",
        "bash",
        "matlab",
        "powershell",
        "ini",
        "latex",
        "java",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
