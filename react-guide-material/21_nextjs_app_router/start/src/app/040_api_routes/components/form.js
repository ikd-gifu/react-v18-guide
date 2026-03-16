import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [msg, setMsg] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    // 送信イベントが発生した form 要素を取得
    // ここではonSubmitが設定されているreturnで返されるform全体
    const form = e.target;
    // form の入力値を FormData オブジェクトに入れる
    // (Web API ブラウザのグローバルオブジェクト)
    const formData = new FormData(form);
    // console.log(form, formData);

    // ブラウザから Next.js の API へ POST （routes.jsのPOSTメソッド）
    fetch('/api/article', { method: form.method, body: formData }).then((res) => {
      // res は Response オブジェクト
      // ok は Response インターフェイスの読み取り専用プロパティで、
      // このレスポンスが（ステータスが 200-299 で）成功したかどうかを表す
      if(!res.ok) {
        // JSON を取って解釈し、 JavaScript のオブジェクトを生成（Promise）
        // then()はPromise インスタンスのメソッド
        return res.json().then(data => {
          // return で次の then へ値を渡す
          return data.msg
        })
      }
      // responseのJS情報を取得、dataになって返ってくる
      return res.json().then(data => {
        return `${data.id}:${data.title}の登録が完了しました。`
      })
      // if節の返り値がmsgに入る
    }).then((msg) => {
      setMsg(msg)
    });

  }
  return (
    <form method="POST" onSubmit={onSubmit}>
      <div>
        <label>
          {" "}
          Id:
          {/* nameプロパティがinput fieldの名前 これがbodyとして送信される */}
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
      <div style={{ color: 'red' }}>{msg}</div>
    </form>
  );
}
