import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  console.log(article);
  return {
    title: article.title,
    description: article.text,
  }
};

export async function generateStaticParams() {
  // 返り値が Response オブジェクト json()でパース  
  const data = await fetch(ENDPOINT).then(res => res.json());
  // console.log(data)
  // return data.map(record => record.id) 
  // 返り値：["1", "2", ...] // または [1, 2, ...]
  return data.map(record => ({ id: record.id })); 
  // [{ id: "1" }, { id: "2" }, ...]の形をNext.jsが期待している
  // return data; // 今回のdata形式ではこれでも動作する
}

// params は「URL（+ 静的生成時は generateStaticParams の一覧）」
// から Next.js が作る
export default async function Detail({ params }) {
  console.log(params) // { id: '1' }
  console.log(params.id) // 1
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}

// devでは、son-serverとnextのサーバーが起動
// ./mock/db.jsonを配信するpackage.jsonの設定
// "dev": "run-p dev:*",
//     "dev:json-server": "npx json-server -w ./mock/db.json -p 4030",
//     "dev:next": "next dev -p 4020",
