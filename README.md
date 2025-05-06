# 棒読みちゃんMCPサーバー (Node.js版)

Model Context Protocol (MCP) を使用して、棒読みちゃん（ゆっくりボイス）による音声読み上げ機能をAIアシスタントに提供するサーバーです。Node.js/TypeScriptで実装されています。

<a href="https://glama.ai/mcp/servers/@uraoz/bouyomi-mcp-nodejs">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@uraoz/bouyomi-mcp-nodejs/badge" alt="Bouyomi-chan Server MCP server" />
</a>

## 概要

このサーバーは、Claude などのAIアシスタントから棒読みちゃんを利用できるようにするMCPサーバーです

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
- 棒読みちゃんのHTTP連携がポート50080で起動していること

## インストール方法

1. このリポジトリをクローンします：

```bash
git clone https://github.com/uraoz/bouyomichan-mcp-nodejs.git
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

```json
{
  "mcpServers": {
    "bouyomichan":{
      "command": "npx",
      "args": [
        "-y",
        "github:uraoz/bouyomichan-mcp-nodejs"
      ]
    }
  }
}
```

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
