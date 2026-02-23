# Bokuchi 公式サイト提案書

## 1. 目的

Bokuchi の認知度を高め、ダウンロード数を増やすための公式 Web サイトを GitHub Pages で構築する。

### 現状の課題

- アプリの情報源が GitHub README のみで、非開発者には敷居が高い
- スクリーンショットが 1 枚しかなく、アプリの魅力が伝わりにくい
- ダウンロードリンクが GitHub Releases に直接誘導されるため、一般ユーザーが迷いやすい
- 検索エンジンからの流入経路が存在しない

### ゴール

- 「Markdown editor lightweight」「軽量 Markdown エディタ」等で検索した人がたどり着ける状態
- ページを開いて 10 秒以内にアプリの価値が伝わり、ダウンロードボタンを押せる状態
- 英語・日本語の 2 言語で最低限対応（アプリの多言語対応を活かす）

---

## 2. ターゲットユーザー分析

| セグメント | 特徴 | 求めているもの |
|-----------|------|--------------|
| ライター / ブロガー | 技術に詳しくない、見た目重視 | シンプルに書ける、すぐ使える |
| 学生 / 研究者 | レポートやノート、論文作成 | 無料、軽量、オフライン動作 |
| エンジニア | 技術ドキュメント、README 作成 | 変数機能、カスタマイズ性 |
| Typora 代替を探している人 | Typora の有料化で乗り換え先を探している | 無料、似たUX、クロスプラットフォーム |

### 競合との差別化ポイント

| 比較項目 | Bokuchi | Typora | Obsidian | Mark Text |
|---------|---------|--------|----------|-----------|
| 価格 | 無料 | $14.99 | 無料（同期は有料） | 無料 |
| 起動速度 | 高速（Tauri） | 普通（Electron） | 普通（Electron） | 遅め（Electron） |
| メモリ使用量 | 少ない | 普通 | 多い | 多い |
| 変数システム | あり | なし | プラグイン | なし |
| オフライン | 完全対応 | 完全対応 | 完全対応 | 完全対応 |
| 多言語UI | 14言語 | 限定的 | 英語中心 | 限定的 |
| 開発状況 | 活発 | 低頻度 | 活発 | 停滞気味 |

**訴求すべき最大の強み: 「無料・軽量・高速・クロスプラットフォーム」**

---

## 3. ページ構成

シングルページ構成を推奨する。理由:
- 管理コストが低い（1 ページの更新で済む）
- GitHub Pages との相性が良い
- ランディングページとして最も効果的（離脱を防ぐ）

### セクション構成

```
┌─────────────────────────────────────────┐
│  ヘッダー（ロゴ + ナビ + GitHub リンク）      │
├─────────────────────────────────────────┤
│  ① ヒーロー                               │
│  キャッチコピー + ダウンロードボタン + スクショ   │
├─────────────────────────────────────────┤
│  ② なぜ Bokuchi？                         │
│  3つの強み（軽量・高速・無料）をアイコン付きで    │
├─────────────────────────────────────────┤
│  ③ 機能紹介                               │
│  スクリーンショット付きで主要機能を紹介          │
├─────────────────────────────────────────┤
│  ④ テーマギャラリー                         │
│  5テーマのスクリーンショット一覧               │
├─────────────────────────────────────────┤
│  ⑤ ダウンロード                            │
│  OS 自動判定 + 全プラットフォームのリンク        │
├─────────────────────────────────────────┤
│  フッター（GitHub / License / 言語切替）      │
└─────────────────────────────────────────┘
```

---

## 4. 各セクションの詳細

### ① ヒーローセクション

ページを開いて最初に目に入る領域。ここで離脱するかダウンロードするかが決まる。

**要素:**
- キャッチコピー（英語 / 日本語）
  - EN: `A lightweight Markdown editor that just works.`
  - JA: `書くことに集中できる、軽量マークダウンエディタ。`
- サブコピー: `Free. Fast. Cross-platform. Built with Tauri and Rust.`
- ダウンロードボタン（OS 自動判定で適切なラベル表示）
  - 例: macOS の場合「Download for macOS」が最も大きく表示
- メインスクリーンショット（ダークテーマでの編集画面）

**重要:** ファーストビューにダウンロードボタンを必ず置く。スクロールしないとダウンロードできないページは離脱率が跳ね上がる。

### ② なぜ Bokuchi？（3 つの強み）

カード形式で 3 つのポイントを並べる。

| アイコン | タイトル | 説明 |
|---------|---------|------|
| 羽根 / 軽量 | Lightweight | Tauri + Rust で Electron ベースの競合より圧倒的に軽い。メモリ使用量 1/3 以下 |
| 稲妻 / 高速 | Instant startup | 1 秒以内に起動。書きたい時にすぐ書ける |
| 地球 / クロスプラットフォーム | Works everywhere | macOS, Windows, Linux 対応。14 言語の UI |

### ③ 機能紹介

スクリーンショットとテキストを交互に配置（左右交互レイアウト）。

1. **リアルタイムプレビュー** — 左にエディタ、右にプレビューのスクショ
2. **マルチタブ** — 複数タブが開いている状態のスクショ
3. **変数システム** — `{{author}}` が展開される before/after のスクショ
4. **検索と置換** — 検索パネルが開いている状態のスクショ
5. **テーマ切替** — テーマ選択画面のスクショ

**各機能は 1〜2 文で説明する。長い説明は要らない。** 画像が語る。

### ④ テーマギャラリー

5 テーマ（Default, Dark, Pastel, Vivid, Darcula）のスクリーンショットをカルーセルまたはグリッドで表示。テーマの豊富さはビジュアル的な訴求力が高い。

### ⑤ ダウンロードセクション

| OS | フォーマット | 備考 |
|----|-----------|------|
| macOS (Apple Silicon) | `.dmg` | 推奨 |
| macOS (Intel) | `.dmg` | |
| Windows | `.msi` / `.exe` | |
| Linux | `.AppImage` / `.deb` | |

- JavaScript で User-Agent を判定し、該当 OS のボタンを最も目立つ位置に配置
- 「Other platforms」リンクで全プラットフォーム表示
- GitHub Releases の最新バージョンを API で自動取得し、リンクを動的生成

---

## 5. 必要なアセットの準備

現状スクリーンショットが 1 枚しかないため、サイト構築前に以下の撮影が必要。

### 撮影リスト

| # | 内容 | テーマ | 解像度 |
|---|------|--------|--------|
| 1 | ヒーロー用メインスクショ（エディタ + プレビューの分割表示） | Dark | 2x Retina |
| 2 | マルチタブが開いた状態 | Dark | 2x Retina |
| 3 | 変数システムの使用例 | Default | 2x Retina |
| 4 | 検索と置換パネル | Dark | 2x Retina |
| 5 | テーマ: Default | Default | 2x Retina |
| 6 | テーマ: Dark | Dark | 2x Retina |
| 7 | テーマ: Pastel | Pastel | 2x Retina |
| 8 | テーマ: Vivid | Vivid | 2x Retina |
| 9 | テーマ: Darcula | Darcula | 2x Retina |
| 10 | 設定画面 | Dark | 2x Retina |

**スクリーンショットの質がサイトの印象を決める。** サンプルの Markdown は見栄えの良いものを用意し、統一感のある状態で撮影する。

---

## 6. 技術構成

### 推奨: 静的サイトジェネレーター

| 選択肢 | メリット | デメリット |
|--------|---------|----------|
| **素の HTML/CSS/JS** | 依存ゼロ、最速 | 多言語対応が手作業 |
| **Astro** | 高速、静的出力、i18n 対応が容易 | ビルド工程が追加 |
| **VitePress** | Markdown ベース、Vue エコシステム | ドキュメントサイト向きで LP には過剰 |

**推奨: Astro**

理由:
- 静的 HTML を出力するため GitHub Pages と相性が良い
- i18n（英語 / 日本語）の仕組みが組み込みで使える
- React コンポーネントも使えるため、既存の知識が活かせる
- シングルページの LP に適している

### ディレクトリ構成案

```
website/               ← リポジトリ内に配置（または別リポジトリ）
├── src/
│   ├── pages/
│   │   ├── index.astro        ← 英語 LP
│   │   └── ja/
│   │       └── index.astro    ← 日本語 LP
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── ThemeGallery.astro
│   │   └── Download.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── screenshots/           ← スクリーンショット
│   ├── favicon.ico
│   └── og-image.png           ← SNS シェア用 OGP 画像
├── astro.config.mjs
└── package.json
```

### デプロイ

```yaml
# .github/workflows/deploy-website.yml
on:
  push:
    branches: [main]
    paths: ['website/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: cd website && npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./website/dist
```

URL: `https://bokuchi-editor.github.io/bokuchi/`
（カスタムドメインを取得すれば `https://bokuchi.dev` 等も可能）

---

## 7. SEO 対策

### 基本施策

- `<title>`: `Bokuchi - Free Lightweight Markdown Editor for macOS, Windows & Linux`
- `<meta description>`: `A free, fast, and lightweight Markdown editor built with Tauri and Rust. Real-time preview, multi-tab editing, variable system, and 14 languages supported.`
- OGP 画像の設定（Twitter Card, Facebook）
- `sitemap.xml` の生成
- `robots.txt` の配置

### 狙うキーワード

| キーワード | 検索意図 | 競合の強さ |
|-----------|---------|----------|
| `free markdown editor` | 無料エディタを探している | 高（既存記事多数） |
| `lightweight markdown editor` | 軽量さを重視 | 中（Bokuchi の強み） |
| `typora alternative free` | Typora 代替を探している | 中（需要あり） |
| `tauri markdown editor` | 技術スタックに興味 | 低（ニッチ） |
| `markdown editor offline` | オフライン動作を求めている | 中 |
| `軽量 マークダウンエディタ` | 日本語ユーザー | 低 |
| `Typora 代替 無料` | 日本語で代替を探している | 低（チャンス大） |

### コンテンツ SEO（将来的に追加）

ブログセクションを追加し、以下のような記事を公開することで検索流入を増やせる:
- 「Typora から Bokuchi に乗り換える方法」
- 「Markdown エディタ比較 2026 年版」
- 「Bokuchi の変数機能で技術ドキュメントを効率化する」

ただしこれは Phase 2 以降で良い。まずは LP を完成させることが最優先。

---

## 8. ユーザー獲得施策

### サイト公開と同時にやること

1. **GitHub リポジトリの設定**
   - About の URL に公式サイトを設定
   - Topics に `markdown-editor`, `tauri`, `rust`, `cross-platform` を追加
   - Social preview 画像を OGP と同じものに設定

2. **告知**
   - Reddit: r/markdown, r/rust, r/tauri
   - Hacker News: Show HN として投稿
   - X (Twitter): 開発者アカウントから告知
   - Zenn / Qiita: 日本語圏向けに技術記事を投稿

3. **リスティング登録**
   - AlternativeTo（Typora の代替として登録）
   - Product Hunt（ローンチ投稿）

### 継続的にやること

- GitHub Releases のたびにサイトのバージョン番号を更新（API 自動取得なら不要）
- スクリーンショットを新機能追加のたびに更新
- ダウンロード数のトラッキング（GitHub API の release asset download count）

---

## 9. 実装ロードマップ

| Phase | 内容 | 目安 |
|-------|------|------|
| **Phase 1** | スクリーンショット撮影 + アセット準備 | 1-2 日 |
| **Phase 2** | Astro プロジェクト作成 + LP 実装（英語） | 2-3 日 |
| **Phase 3** | 日本語版追加 + OGP / SEO 設定 | 1 日 |
| **Phase 4** | GitHub Pages デプロイ + CI 設定 | 半日 |
| **Phase 5** | 告知・リスティング登録 | 1 日 |

---

## 10. まとめ

| 項目 | 方針 |
|------|------|
| 構成 | シングルページ LP |
| 技術 | Astro（静的出力） |
| 言語 | 英語 + 日本語 |
| ホスティング | GitHub Pages |
| 最重要要素 | ファーストビューのキャッチコピー + ダウンロードボタン + スクリーンショット |
| 差別化メッセージ | 無料・軽量・高速・クロスプラットフォーム |
| 狙うポジション | 「Typora の無料・軽量代替」 |
