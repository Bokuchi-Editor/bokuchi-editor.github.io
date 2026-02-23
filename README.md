# Bokuchi Official Website

Landing page for [Bokuchi](https://github.com/Bokuchi-Editor/bokuchi), built with Astro and deployed on GitHub Pages.

- **English**: `/`
- **Japanese**: `/ja/`

**日本語**: [README.ja.md](README.ja.md)

---

## Folder structure

The layout follows the structure proposed in `website-proposal.md`.

```
bokuchi-editor.github.io/
├── .github/
│   └── workflows/
│       └── deploy-website.yml   # Builds website/dist and deploys to gh-pages on push to main
├── image/                       # Source screenshots (#1.png through #10-2.png)
├── website/                     # Astro project
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.astro      # English LP
│   │   │   └── ja/
│   │   │       └── index.astro  # Japanese LP
│   │   ├── components/
│   │   │   ├── Hero.astro
│   │   │   ├── WhyBokuchi.astro
│   │   │   ├── Features.astro
│   │   │   ├── ThemeGallery.astro
│   │   │   ├── SupportedLanguages.astro
│   │   │   └── Download.astro
│   │   ├── layouts/
│   │   │   └── Layout.astro
│   │   ├── i18n/
│   │   │   └── ui.ts            # EN / JA copy
│   │   └── styles/
│   │       └── global.css
│   ├── public/
│   │   ├── screenshots/         # Site screenshots (copied from image/)
│   │   ├── favicon.svg
│   │   ├── favicon.ico
│   │   ├── og-image.png         # OGP image
│   │   └── robots.txt
│   ├── astro.config.mjs
│   ├── package.json
│   └── tsconfig.json
├── website-proposal.md          # Design / proposal doc
└── README.md                   # This file
```

---

## Local development

### Prerequisites

- Node.js 20+
- npm

### Steps

1. From the repository root, go to `website` and install dependencies:

   ```bash
   cd website
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open in a browser:

   | Language | URL                       |
   | -------- | ------------------------- |
   | English  | http://localhost:4321/    |
   | Japanese | http://localhost:4321/ja/ |

4. Quick checks (optional)
   - Hero shows the tagline and download button.
   - Nav links (Why Bokuchi?, Features, Themes, Languages, Download) scroll to the right sections.
   - Footer language switch toggles between `/` and `/ja/`.
   - Features section shows screenshots (preview, tabs, variables, search, themes, settings).
   - Theme gallery shows all five themes.
   - Download section primary button label updates by OS (e.g. “Download for macOS”) when JavaScript is enabled.

---

## Build and preview

To build and preview the production output locally:

```bash
cd website
npm run build
npm run preview
```

The site is served at `http://localhost:4321/`. The contents of `website/dist` are what gets deployed.

---

## GitHub Pages setup

Pushing to the `main` branch runs GitHub Actions: it builds `website/dist` and pushes the result to the `gh-pages` branch. GitHub Pages serves the site from that branch.

### 1. Open repository Settings

On the repo page: **Settings** → **Pages** (sidebar).

### 2. Build and deployment

- **Source**: **Deploy from a branch**.
- **Branch**: **gh-pages** (appears after the first successful deploy).
- **Folder**: **/ (root)**.
- Click **Save**.

### 3. Deploy flow

1. Push changes under `website/` or `.github/workflows/deploy-website.yml` to `main`.
2. The “Deploy website” workflow runs under the **Actions** tab.
3. On success, the contents of `website/dist` are pushed to the `gh-pages` branch.
4. After a few minutes, the site is available at `https://bokuchi-editor.github.io/` (when the repo name is `bokuchi-editor.github.io`).

### 4. Published URL

| Repository name                             | Published URL                               |
| ------------------------------------------- | ------------------------------------------- |
| `bokuchi-editor.github.io` (user/org Pages) | `https://bokuchi-editor.github.io/`         |
| Anything else (e.g. `bokuchi`)              | `https://bokuchi-editor.github.io/bokuchi/` |

With the repo name `bokuchi-editor.github.io`, the current config publishes at the root. To publish under a subpath (e.g. `/bokuchi/`), set `base: '/bokuchi/'` in `website/astro.config.mjs`.

### 5. When deploys run

A deploy is triggered when:

- You push to `main`, and
- The push touches `website/**` or `.github/workflows/deploy-website.yml`.

Pushing anything under `website/` is enough to run the workflow.

---

## References

- Bokuchi app: [Bokuchi-Editor/bokuchi](https://github.com/Bokuchi-Editor/bokuchi).
