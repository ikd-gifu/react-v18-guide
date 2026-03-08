// client側で実行する処理は別コンポーネントに切り出す
// 処理を重くしないため（page.jsと同じ階層にディレクトリ作成）
// App Routerの場合、page.js layout.js 以外に名称の制約は無い
"use client";

import { useState, useEffect } from "react";

export default function ClientComponent() {
  // React hooksはクライアント側で実行
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState('client loaded');
  }, [])
  // エラー Error: async/await is not yet supported in Client Components
  // async/awaitはサーバーコンポーネントでのみ使用できる
  // const article = await fetch(`${ENDPOINT}/${params.id}`, {
  //   next: { revalidate: 10 }
  // }).then(res => res.json());

  return (
    <>
      <div>{state}</div>
    </>
  )
}
