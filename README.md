[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/uraoz-bouyomichan-mcp-nodejs-badge.png)](https://mseep.ai/app/uraoz-bouyomichan-mcp-nodejs)

# 棒読みちゃんMCPサーバー (Node.js版)

<a href="https://glama.ai/mcp/servers/@uraoz/bouyomi-mcp-nodejs">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@uraoz/bouyomi-mcp-nodejs/badge" alt="Bouyomi-chan Server MCP server" />
</a>


## 前提条件

- Node.js 16以上
- npm 7以上
- 棒読みちゃんがインストールされていること
- 棒読みちゃんのHTTP連携がポート50080で起動していること

## 使用方法

### ローカルでのサーバーの起動

```bash
git clone https://github.com/uraoz/bouyomichan-mcp-nodejs.git
cd bouyomichan-mcp-nodejs
npm install
npm run build
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
