import { paths } from "../paths"

// http://localhost:4020/020_SG/1
export default function Page({ params }) {
  const date = new Date;
  return <h3>このページは{params.id}です。{date.toJSON()}</h3>;
}

 // 名前付きエクスポートなので同じ名前でimport
 // dynamic route [] に当てはまる値が何になるかを定義
export async function generateStaticParams() {
// 定数を返すのでasyncは不要。将来的にfetch()を利用するためasyncをつけておく
  return paths;
  // return [
  //   { id: '1' } // params.id
  // ];
}
// npm run dev で起動する際には不要だが、本番サーバーでは必要
