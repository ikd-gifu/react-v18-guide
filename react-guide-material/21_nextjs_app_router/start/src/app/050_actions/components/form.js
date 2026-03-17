'use client';

import { createItem } from "@/actions/createItem";
import { useState } from "react";
import { useFormState } from "react-dom";

// server actions（Next.jsの機能）
// クライアントからREST APIを通じてサーバー側のデータを更新（040_api_routes）するのを
// 関数経由で更新する

export default function ArticleForm() {
  const [newId, setNewId] = useState();
  const [newTitle, setNewTitle] = useState();

  // 新しいReactのフック 実験的段階
  // Server Actionと組み合わせるとclient server間のやり取りを記述できる
  // 第一引数にはServer Action　第二引数にはformStateの初期値
  // createItemActionの結果がstateに更新される
  const [state, createItemAction] = useFormState(createItem, { msg: null })
  // ②createItemが実行され、戻り値が新しいstateになる
  return (
    // ①formが飛ぶとactionが実行される
    <form action={createItemAction}>
    {/* method='POST'の設定不要 エラーになる */}
    {/* actionはURLを定義する場所だが、Next.jsでは関数を定義できる */}
    {/* <form action={createItem}> Server Actions データ更新用のAPI データ取得には使わない */}
      <div>
        <label>
          {" "}
          Id:
          <input type="number" name="id" value={newId} onChange={(e) => setNewId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input name="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: 'red' }}>{state.msg}</div>
    </form>
  );
}
