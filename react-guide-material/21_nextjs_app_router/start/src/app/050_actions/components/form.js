'use client';

import { createItem } from "@/actions/createItem";
import { useState } from "react";

// server actions（Next.jsの機能）
// クライアントからREST APIを通じてサーバー側のデータを更新（040_api_routes）するのを
// 関数経由で更新する

export default function ArticleForm() {
  const [newId, setNewId] = useState();
  const [newTitle, setNewTitle] = useState();

  return (
    // method='POST'の設定不要 エラーになる
    // actionはURLを定義する場所だが、Next.jsでは関数を定義できる
    <form action={createItem}>
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
      <div style={{ color: 'red' }}></div>
    </form>
  );
}
