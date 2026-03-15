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
// form.jsのPOSTを受け取り、中継し値を取り出しJSONサーバに送信（BFF的な役割）
export async function POST(request) {
  const formData = await request.formData();
  const id = formData.get('id');
  const title = formData.get('title');
  // console.log(id, title);

  if(id === '' || title === '') {
    return Response.json({ msg: '入力フィールドが空です。' }, { status: 500 })
  }

  try {
    // throw 'error'
    // POSTはoptionの第二引数を指定 JSONでjsonサーバーにリクエスト
    // 正常に処理が完了すると、POSTしたJSONがそのまま返ってくる
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
      "Content-Type": "application/json"
      },
      // JavaScript のオブジェクトや値を JSON 文字列に変換
      body: JSON.stringify({ id, title })
    });
    // JSON を取って解釈し、 JavaScript のオブジェクトを生成
    const data = await res.json(); // サーバーから返ってくるJSON文字列を、JavaScriptオブジェクトへ変換
    return Response.json(data); // JavaScript値を JSON文字列にして、ResponseとしてAPIの戻り値に設定する
  } catch(e) {
    return Response.json({ msg: '登録に失敗しました。' }, { status: 500 })
  }
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
