// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
  const data = await fetch(ENDPOINT).then(res => res.json())

  // データを確認
  // const res = await fetch(ENDPOINT)  
  // console.log({res})

  // const data = await res.json()
  // console.log({data})
  // const response = Response.json(data)
  // console.log({response})

  // Responseオブジェクトのjsonメソッド
  // dataオブジェクトがjsonに変換されてブラウザに返却される
  return Response.json(data)
}

// requestはweb標準のオブジェクト
export async function POST(request) {

}

// データ
// res: fetch が返す Response オブジェクト
// data: res.json() で変換されたJSオブジェクト
// （配列）JSON文字列に変換してbodyに格納
// Response.json(data): Response オブジェクト（bodyはJSON文字列、ブラウザへ返却可能）

// res
// Response {
//     status: 200,
//     statusText: 'OK',
//     headers: Headers {
//       'x-powered-by': 'tinyhttp',
//       'access-control-allow-origin': '*',
//       'access-control-allow-methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
//       'access-control-allow-headers': 'content-type',
//       'content-type': 'application/json',
//       date: 'Sat, 14 Mar 2026 01:35:09 GMT',
//       connection: 'keep-alive',
//       'keep-alive': 'timeout=5',
//       'content-length': '2185'
//     },
//     body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//     bodyUsed: false,
//     ok: true,
//     redirected: false,
//     type: 'basic',
//     url: 'http://localhost:4030/articles'
// }

// data
// [
//     {
//       id: '1',
//       title: 'et magnis dis',
//       text: 'eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non',
//       date: 'Aug 11, 2022'
//     },

// Response
// Response {
//     status: 200,
//     statusText: '',
//     headers: Headers { 'content-type': 'application/json' },
//     body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true }, // ここにdataの内容が入っている(JSON文字列)。ストリームなので展開表示されない
//     bodyUsed: false,
//     ok: true,
//     redirected: false,
//     type: 'default',
//     url: ''
//   }
