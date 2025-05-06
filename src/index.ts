import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import axios from "axios";

// 棒読みちゃんにリクエストを送信する関数
async function speakBouyomi(
  text: string = 'ゆっくりしていってね',
  voice: number = 0,
  volume: number = -1,
  speed: number = -1,
  tone: number = -1
): Promise<number> {
  try {
    const response = await axios.get('http://localhost:50080/Talk', {
      params: {
        text,
        voice,
        volume,
        speed,
        tone
      }
    });
    return response.status;
  } catch (error) {
    console.error('棒読みちゃんへのリクエストに失敗しました:', error);
    return 500;
  }
}

// MCPサーバーの作成
const server = new McpServer({
  name: "bouyomi-server",
  version: "1.0.0",
  capabilities: {
    tools: {}
  }
});

// 読み上げツールの登録
server.tool(
  "read_text",
  "テキストを棒読みちゃんで読み上げます",
  {
    text: z.string().describe("読み上げるテキスト"),
    voice: z.number().default(0).describe("音声の種類（0: 女性1、1: 男性1、2: 女性2、...）"),
    volume: z.number().default(-1).describe("音量（-1: デフォルト、0-100: 音量レベル）"),
    speed: z.number().default(-1).describe("速度（-1: デフォルト、50-200: 速度レベル）"),
    tone: z.number().default(-1).describe("音程（-1: デフォルト、50-200: 音程レベル）")
  },
  async ({ text, voice = 0, volume = -1, speed = -1, tone = -1 }) => {
    const statusCode = await speakBouyomi(text, voice, volume, speed, tone);
    
    if (statusCode === 200) {
      return {
        content: [
          {
            type: "text",
            text: `「${text}」を音声で読み上げました。(音声: ${voice}, 音量: ${volume}, 速度: ${speed}, 音程: ${tone})`
          }
        ]
      };
    } else {
      return {
        content: [
          {
            type: "text",
            text: `読み上げに失敗しました。ステータスコード: ${statusCode}`
          }
        ],
        isError: true
      };
    }
  }
);

// メイン関数
async function main() {
  
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  process.exit(1);
});