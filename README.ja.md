# Bokuchi 公式サイト

[Bokuchi](https://github.com/Bokuchi-Editor/bokuchi) の紹介・販促用ランディングページです。GitHub Pages で公開します。

- **英語**: `/`
- **日本語**: `/ja/`

---

## フォルダ構成

提案書（`website-proposal.md`）のディレクトリ構成案に沿った構成です。

```
bokuchi-editor.github.io/
├── .github/
│   └── workflows/
│       └── deploy-website.yml   # main への push で website/dist を gh-pages にデプロイ
├── image/                       # 撮影済みスクリーンショットの元ファイル（#1.png ～ #10-2.png）
├── website/                     # Astro プロジェクト
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.astro      # 英語 LP
│   │   │   └── ja/
│   │   │       └── index.astro  # 日本語 LP
│   │   ├── components/
│   │   │   ├── Hero.astro
│   │   │   ├── WhyBokuchi.astro
│   │   │   ├── Features.astro
│   │   │   ├── ThemeGallery.astro
│   │   │   └── Download.astro
│   │   ├── layouts/
│   │   │   └── Layout.astro
│   │   ├── i18n/
│   │   │   └── ui.ts            # 英語・日本語の文言
│   │   └── styles/
│   │       └── global.css
│   ├── public/
│   │   ├── screenshots/         # サイト用スクショ（image/ からコピーしたもの）
│   │   ├── favicon.svg
│   │   ├── favicon.ico
│   │   ├── og-image.png         # OGP 用
│   │   └── robots.txt
│   ├── astro.config.mjs
│   ├── package.json
│   └── tsconfig.json
├── website-proposal.md          # サイト設計・提案書
└── README.md                    # 本ファイル
```

---

## ローカルでの起動・確認方法

### 前提

- Node.js 20 以上
- npm

### 手順

1. リポジトリのルートで、`website` に移動して依存関係をインストールする。

   ```bash
   cd website
   npm install
   ```

2. 開発サーバーを起動する。

   ```bash
   npm run dev
   ```

3. ブラウザで次の URL を開く。

   | 言語   | URL                       |
   | ------ | ------------------------- |
   | 英語   | http://localhost:4321/    |
   | 日本語 | http://localhost:4321/ja/ |

4. 確認のポイント（任意）
   - ヒーローのキャッチコピー・ダウンロードボタンが表示される
   - ナビの「Why Bokuchi?」「Features」「Themes」「Download」で各セクションに飛べる
   - フッターの言語切替で `/` と `/ja/` を切り替えられる
   - 機能紹介にスクリーンショット（プレビュー・マルチタブ・変数・検索・テーマ・設定）が表示される
   - テーマギャラリーに 5 テーマのスクショが表示される
   - ダウンロードセクションの主ボタンが、OS に応じて「Download for macOS / Windows / Linux」などに変わる（JavaScript 有効時）

---

## ビルドとプレビュー

本番と同じ静的ファイルをローカルで確認する場合:

```bash
cd website
npm run build
npm run preview
```

`http://localhost:4321/` で配信されます。デプロイされるのは `website/dist` の中身です。

---

## GitHub Pages の設定方法

このリポジトリでは、**main ブランチへ push すると GitHub Actions が `website/dist` をビルドし、`gh-pages` ブランチに push する**動きになっています。Pages はその `gh-pages` ブランチの内容を配信します。

### 1. リポジトリの Settings を開く

GitHub のリポジトリページ → **Settings** → 左メニュー **Pages**。

### 2. Build and deployment の設定

- **Source**: 「**Deploy from a branch**」を選ぶ。
- **Branch**: 「**gh-pages**」を選ぶ（初回デプロイ後に選択肢に出てきます）。
- **Folder**: 「**/ (root)**」を選ぶ。
- **Save** で保存。

### 3. デプロイの流れ

1. `main` ブランチの `website/` または `.github/workflows/deploy-website.yml` に変更を push する。
2. 「Actions」タブで「Deploy website」ワークフローが実行される。
3. 成功すると、`gh-pages` ブランチに `website/dist` の内容が push される。
4. 数分後、`https://bokuchi-editor.github.io/` でサイトが表示される（リポジトリ名が `bokuchi-editor.github.io` の場合）。

### 4. 公開 URL について

| リポジトリ名                                                | 公開 URL                                    |
| ----------------------------------------------------------- | ------------------------------------------- |
| `bokuchi-editor.github.io`（ユーザ/組織の GitHub Pages 用） | `https://bokuchi-editor.github.io/`         |
| 上記以外（例: `bokuchi`）                                   | `https://bokuchi-editor.github.io/bokuchi/` |

リポジトリ名が `bokuchi-editor.github.io` のため、**ルートで公開する場合は現在の設定のままで問題ありません**。
サブパス（例: `/bokuchi/`）で公開する場合は、`website/astro.config.mjs` に `base: '/bokuchi/'` を追加してください。

### 5. デプロイのトリガー

次のいずれかでデプロイが走ります。

- `main` ブランチへ push したとき、かつ
  変更に `website/**` または `.github/workflows/deploy-website.yml` が含まれるとき

初回は `website/` 以下を push すればワークフローが実行されます。

---

## 参考

- Bokuchi 本体: [Bokuchi-Editor/bokuchi](https://github.com/Bokuchi-Editor/bokuchi)

- **English**: [README.md](README.md)
