// http://localhost:4020/010_SSRに表示される
// Next 13.4 App Router特有の設定。基本的にサーバーで実行
// useStateなどを使う際に必要な設定
// "use client";
// import './lib'; // clientでもserverでも実行される。Next.jsが判定できないため
// ブラウザ側で実行する関数
// import { useState, useEffect } from "react";
// ブラウザで実行する処理を切り出し、読み込む
import ClientComponent from "./components/ClientComponent";
import { ENDPOINT } from "@/constants";
import ArticleList from "@/components/articleList";

export default async function SSR() {
  // React hooksはクライアント側で実行
  // const [state, setState] = useState(undefined);
  // useEffect(() => {
  //   setState('client loaded');
  // }, [])

  // /src/constants.js
  // ENDPOINTに対してGETリクエスト
  // fetchは非同期関数 awaitで待機する
  // next独自の関数（ブラウザ標準と異なる）
  // サーバーコンポーネントではawaitを使って副作用を実行できる
  const articles = await fetch(ENDPOINT, {
    next: { revalidate: 10 } // 10秒毎にキャッシュをクリアする
  }).then(res => res.json());
  // cache: 'no-store' キャッシュを利用しない デフォルトはキャッシュして余分なリクエストをしない設定
  // cache: 'force-cache' キャッシュを効かせる（デフォルト）強制再読み込みすると更新する


  return (
    <>
      <div>SSR Page</div>
      <ClientComponent />
      <ArticleList list={articles} basePath="010_SSR" />
    </>
  )
}

// "use server"
// 明示的に書かなくてもデフォルトでサーバーで実行される
// 一部ケースで書く必要がある
