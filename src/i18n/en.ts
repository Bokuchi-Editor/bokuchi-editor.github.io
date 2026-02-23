export const en = {
  lang: 'en' as 'en' | 'ja',
  meta: {
    title: 'Bokuchi — Free Lightweight Markdown Editor',
    description:
      'A free, fast, and lightweight Markdown editor built with Tauri and Rust. Real-time preview, multi-tab editing, variable system, and 14 languages supported.',
    ogTitle: 'Bokuchi — Free Lightweight Markdown Editor',
  },
  nav: {
    why: 'Why Bokuchi',
    features: 'Features',
    themes: 'Themes',
    download: 'Download',
    github: 'GitHub',
    langLabel: '日本語',
    langHref: '/ja/',
  },
  hero: {
    headline1: 'A lightweight Markdown editor',
    headline2: 'that just works.',
    subheadline: 'Free. Fast. Cross-platform. Built with Tauri and Rust.',
    downloadCta: 'Download for',
    downloadFallback: 'Download',
    githubCta: 'View on GitHub',
    screenshotAlt: 'Bokuchi editor interface showing split-pane Markdown editing',
  },
  why: {
    sectionTitle: 'Why Bokuchi?',
    cards: [
      {
        icon: 'feather',
        title: 'Lightweight',
        description:
          'Built with Tauri and Rust, Bokuchi uses drastically less memory than Electron-based editors — under 50 MB at startup.',
      },
      {
        icon: 'lightning',
        title: 'Instant Startup',
        description:
          "Launches in under a second. When inspiration strikes, Bokuchi is ready before you finish reaching for your keyboard.",
      },
      {
        icon: 'globe',
        title: 'Works Everywhere',
        description:
          'Native apps for macOS, Windows, and Linux. UI available in 14 languages including English, Japanese, Chinese, Spanish, and more.',
      },
    ],
  },
  features: {
    sectionTitle: 'Everything you need to write',
    sectionSubtitle: 'A focused set of features designed to keep you in the flow.',
    items: [
      {
        title: 'Real-time Preview',
        description:
          'See your rendered Markdown instantly as you type. Split-pane view keeps writing and preview in perfect sync — including synchronized scrolling.',
        screenshotAlt: 'Split-pane Markdown editor with real-time preview',
        screenshotSrc: '/screenshots/hero.png',
      },
      {
        title: 'Multi-tab Editing',
        description:
          'Work on multiple files simultaneously. Drag to reorder tabs, and switch between documents without losing your place.',
        screenshotAlt: 'Bokuchi showing multiple open tabs',
        screenshotSrc: '/screenshots/multitab.png',
      },
      {
        title: 'Variable System',
        description:
          'Define reusable variables with <code>{{author}}</code> syntax. Set them per-file or globally in settings — perfect for templates and technical documentation.',
        screenshotAlt: 'Bokuchi variable system showing template expansion',
        screenshotSrc: '/screenshots/variables.png',
      },
      {
        title: 'Search & Replace',
        description:
          'Floating search panel with match highlighting, case-sensitivity toggle, and full regex support. Navigate matches instantly.',
        screenshotAlt: 'Bokuchi search and replace panel',
        screenshotSrc: '/screenshots/search.png',
      },
    ],
  },
  gallery: {
    sectionTitle: 'Choose your style',
    sectionSubtitle:
      'Five carefully crafted themes to match your mood and workflow.',
    themes: [
      { name: 'Default', key: 'default', screenshotSrc: '/screenshots/theme-default.png' },
      { name: 'Dark', key: 'dark', screenshotSrc: '/screenshots/theme-dark.png' },
      { name: 'Pastel', key: 'pastel', screenshotSrc: '/screenshots/theme-pastel.png' },
      { name: 'Vivid', key: 'vivid', screenshotSrc: '/screenshots/theme-vivid.png' },
      { name: 'Darcula', key: 'darcula', screenshotSrc: '/screenshots/theme-darcula.png' },
    ],
  },
  download: {
    sectionTitle: 'Download Bokuchi',
    sectionSubtitle: 'Free and open source. Always.',
    badge: 'Latest release',
    detectPrefix: 'Download for',
    otherPlatforms: 'Other platforms',
    releasesPage: 'All releases on GitHub',
    platforms: {
      macos_arm: 'macOS Apple Silicon',
      macos_intel: 'macOS Intel',
      windows: 'Windows',
      linux_appimage: 'Linux (AppImage)',
      linux_deb: 'Linux (.deb)',
    },
    fileFormats: {
      macos_arm: '.dmg',
      macos_intel: '.dmg',
      windows: '.msi',
      linux_appimage: '.AppImage',
      linux_deb: '.deb',
    },
  },
  footer: {
    tagline: 'A lightweight Markdown editor built with Tauri and Rust.',
    links: {
      github: 'GitHub',
      releases: 'Releases',
      issues: 'Issues',
      license: 'MIT License',
    },
    copyright: '© 2025 Bokuchi Contributors',
  },
};

export type T = typeof en;
