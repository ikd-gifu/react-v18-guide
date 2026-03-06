// http://localhost:4020/010_SSRに表示される
// Next 13.4 App Router特有の設定。基本的にサーバーで実行
// useStateなどを使う際に必要な設定
"use client";
// ブラウザ側で実行する関数
import { useState, useEffect } from "react";

export default function SSR() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState('client loaded');
  }, [])

  return (
    <>
      <div>SSR Page</div>
      <div>{state}</div>
    </>
  )
}
