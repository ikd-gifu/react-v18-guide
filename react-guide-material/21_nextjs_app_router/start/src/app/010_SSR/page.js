// http://localhost:4020/010_SSRに表示される
// Next 13.4 App Router特有の設定。基本的にサーバーで実行
// useStateなどを使う際に必要な設定
// "use client";
// import './lib'; // clientでもserverでも実行される。Next.jsが判定できないため
// ブラウザ側で実行する関数
// import { useState, useEffect } from "react";
// ブラウザで実行する処理を切り出し、読み込む
import ClientComponent from "./components/ClientComponent";

export default function SSR() {
  // React hooksはクライアント側で実行
  // const [state, setState] = useState(undefined);
  // useEffect(() => {
  //   setState('client loaded');
  // }, [])

  return (
    <>
      <div>SSR Page</div>
      <ClientComponent />
    </>
  )
}

// "use server"
// 明示的に書かなくてもデフォルトでサーバーで実行される
// 一部ケースで書く必要がある
