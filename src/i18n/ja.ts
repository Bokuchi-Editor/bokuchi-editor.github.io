import type { T } from './en';

export const ja: T = {
  lang: 'ja' as 'en' | 'ja',
  meta: {
    title: 'Bokuchi — 軽量マークダウンエディタ（無料）',
    description:
      'TauriとRustで構築された、無料・高速・軽量なMarkdownエディタ。リアルタイムプレビュー、マルチタブ編集、変数システム、14言語対応。',
    ogTitle: 'Bokuchi — 無料の軽量マークダウンエディタ',
  },
  nav: {
    why: 'なぜBokuchi？',
    features: '機能',
    themes: 'テーマ',
    download: 'ダウンロード',
    github: 'GitHub',
    langLabel: 'English',
    langHref: '/',
  },
  hero: {
    headline1: '書くことに集中できる、',
    headline2: '軽量マークダウンエディタ。',
    subheadline: '無料。高速。クロスプラットフォーム。TauriとRustで構築。',
    downloadCta: 'ダウンロード for',
    downloadFallback: 'ダウンロード',
    githubCta: 'GitHubで見る',
    screenshotAlt: 'Bokuchiエディタの分割表示インターフェース',
  },
  why: {
    sectionTitle: 'なぜBokuchi？',
    cards: [
      {
        icon: 'feather',
        title: '軽量',
        description:
          'TauriとRustで構築されたBokuchiは、Electronベースのエディタと比べてメモリ使用量が大幅に少なく、起動時50MB未満で動作します。',
      },
      {
        icon: 'lightning',
        title: '瞬時に起動',
        description:
          '1秒以内に起動。書きたいときにすぐ書ける。インスピレーションが湧いた瞬間に、Bokuchiはすでに待機しています。',
      },
      {
        icon: 'globe',
        title: 'どこでも動く',
        description:
          'macOS・Windows・Linux対応のネイティブアプリ。UIは14言語（日本語、英語、中国語、スペイン語など）に対応。',
      },
    ],
  },
  features: {
    sectionTitle: '書くために必要なすべてを',
    sectionSubtitle: 'フローを途切れさせない、厳選された機能セット。',
    items: [
      {
        title: 'リアルタイムプレビュー',
        description:
          '入力しながら即座にMarkdownのレンダリング結果を確認。分割ペインで編集とプレビューを同期表示し、スクロールも連動します。',
        screenshotAlt: 'リアルタイムプレビュー付きの分割表示エディタ',
        screenshotSrc: '/screenshots/hero.png',
      },
      {
        title: 'マルチタブ編集',
        description:
          '複数のファイルを同時に開いて編集。タブをドラッグして並べ替え、ドキュメント間をスムーズに切り替えられます。',
        screenshotAlt: '複数タブが開いているBokuchi',
        screenshotSrc: '/screenshots/multitab.png',
      },
      {
        title: '変数システム',
        description:
          '<code>{{author}}</code> 構文で再利用可能な変数を定義。ファイルごとまたはグローバルに設定でき、テンプレートや技術文書に最適。',
        screenshotAlt: '変数システムのテンプレート展開表示',
        screenshotSrc: '/screenshots/variables.png',
      },
      {
        title: '検索と置換',
        description:
          'マッチのハイライト表示、大文字小文字の区別、完全な正規表現に対応したフローティング検索パネル。マッチ箇所を瞬時にナビゲート。',
        screenshotAlt: 'Bokuchiの検索・置換パネル',
        screenshotSrc: '/screenshots/search.png',
      },
    ],
  },
  gallery: {
    sectionTitle: 'スタイルを選ぼう',
    sectionSubtitle:
      '気分とワークフローに合わせて選べる5つのテーマ。',
    themes: [
      { name: 'Default', key: 'default', screenshotSrc: '/screenshots/theme-default.png' },
      { name: 'Dark', key: 'dark', screenshotSrc: '/screenshots/theme-dark.png' },
      { name: 'Pastel', key: 'pastel', screenshotSrc: '/screenshots/theme-pastel.png' },
      { name: 'Vivid', key: 'vivid', screenshotSrc: '/screenshots/theme-vivid.png' },
      { name: 'Darcula', key: 'darcula', screenshotSrc: '/screenshots/theme-darcula.png' },
    ],
  },
  download: {
    sectionTitle: 'Bokuchiをダウンロード',
    sectionSubtitle: '無料・オープンソース。ずっと。',
    badge: '最新リリース',
    detectPrefix: 'ダウンロード for',
    otherPlatforms: '他のプラットフォーム',
    releasesPage: 'GitHubで全リリースを見る',
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
    tagline: 'TauriとRustで構築された軽量マークダウンエディタ。',
    links: {
      github: 'GitHub',
      releases: 'リリース',
      issues: 'Issues',
      license: 'MITライセンス',
    },
    copyright: '© 2025 Bokuchi Contributors',
  },
};
