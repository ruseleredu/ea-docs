---
sidebar_label: "Introdução"
sidebar_position: 1
---

## Getting Started

- https://adrianoruseler.github.io/site/docs/docusaurus/folder
- https://docusaurus.io/docs

## Clone repo

```bash
git clone https://github.com/ruseleredu/ea-docs.git
cd ea-docs
npm i
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```bash
npm run serve
```

## Deployment

```bash
set GIT_USER=ruseleredu
npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Upgrade Docusaurus

To upgrade Docusaurus packages with the latest version, run the following command:

```bash
npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/theme-mermaid@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest
```

To ensure accurate Baseline data, please update:

```bash
npm i baseline-browser-mapping@latest -D
```

```bash
npm audit fix
```

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)

## Calendário Acadêmico de 2026

[Calendário Acadêmico de 2026](/pdf/CT2026.pdf)

![Calendário Acadêmico de 2026](/img/CT2026.png)
