# 棒読みちゃんMCPサーバー (Node.js版)

Model Context Protocol (MCP) を使用して、棒読みちゃん（ゆっくりボイス）による音声読み上げ機能をAIアシスタントに提供するサーバーです。Node.js/TypeScriptで実装されています。

## 概要

このサーバーは、Claude などのAIアシスタントから「棒読みちゃん」の読み上げ機能を利用できるようにするMCPサーバーです。AIモデルが理解しやすいインターフェースを提供し、テキストを音声に変換する機能を実現します。

## 機能

- テキスト読み上げ
- 音声タイプ選択（女性・男性など）
- 音量調整
- 読み上げ速度調整
- 音程調整

## 前提条件

- Node.js 16以上
- npm 7以上
- 棒読みちゃんがインストールされていること
- 棒読みちゃんがポート50080で起動していること

## インストール方法

1. このリポジトリをクローンします：

```bash
git clone https://github.com/あなたのユーザー名/bouyomichan-mcp-nodejs.git
cd bouyomichan-mcp-nodejs
```

2. 依存関係をインストールします：

```bash
npm install
```

3. コンパイルします：

```bash
npm run build
```

## 使用方法

### サーバーの起動

```bash
npm start
```

### Claude for Desktopとの連携

Claude for Desktopと連携するには、設定ファイルを編集する必要があります：

1. Claude for Desktop設定ファイルを開きます：
   - MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. 以下の内容を追加します（パスは実際のファイルパスに置き換えてください）：

```json
{
  "mcpServers": {
    "bouyomi": {
      "command": "node",
      "args": [
        "/絶対パス/bouyomichan-mcp-nodejs/build/index.js"
      ]
    }
  }
}
```

3. Claude for Desktopを再起動します。

## 使用例

Claude for Desktopで以下のように指示すると、テキストが音声で読み上げられます：

- 「こんにちは、世界」と読み上げて
- 男性の声で「これはテストです」と読み上げて
- 速度を速くして「急いでいます」と読み上げて

## パラメータ説明

| パラメータ | 説明 | デフォルト値 | 有効範囲 |
|----------|------|------------|---------|
| text     | 読み上げるテキスト | 必須 | 任意のテキスト |
| voice    | 音声の種類 | 0 (女性1) | 0: 女性1、1: 男性1、2: 女性2、... |
| volume   | 音量 | -1 (デフォルト) | -1: デフォルト、0-100: 音量レベル |
| speed    | 速度 | -1 (デフォルト) | -1: デフォルト、50-200: 速度レベル |
| tone     | 音程 | -1 (デフォルト) | -1: デフォルト、50-200: 音程レベル |

## ライセンス

MIT

## 貢献方法

1. このリポジトリをフォークします
2. 機能追加やバグ修正用のブランチを作成します：`git checkout -b feature/amazing-feature`
3. 変更をコミットします：`git commit -m 'Add some amazing feature'`
4. リモートブランチにプッシュします：`git push origin feature/amazing-feature`
5. プルリクエストを作成します

## 謝辞

- [棒読みちゃん](https://chi.usamimi.info/Program/Application/BouyomiChan/)の開発者様
- [Model Context Protocol](https://modelcontextprotocol.io/)の開発チーム

---

このMCPサーバーを使って、AIアシスタントに音声読み上げ機能を追加してみてください！質問やフィードバックがあれば、Issuesで報告してください。