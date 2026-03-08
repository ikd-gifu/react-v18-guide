// [id] このフォルダ直下のファイルは動的にパスが変わる（ダイナミックルーティング）
// []の中はidでなくても良い
import { ENDPOINT } from "@/constants";
import Article from "@/components/article";

// http://localhost:4020/010_SSR/1 ←1, 2, 3と変わる
// [] の値は、アクセスされたURLのパスから取得
export default async function SSR({ params }) {
console.log(params) // サーバーで実行 ターミナルに出力される { id: '1' }
// async/awaitはサーバーコンポーネントでのみ使用できる
  const article = await fetch(`${ENDPOINT}/${params.id}`, {
    next: { revalidate: 10 }
  }).then(res => res.json());

  return (
    <>
      <div>SSR Page</div>
      <Article data={article} />
    </>
  )
}
