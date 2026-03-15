import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [msg, setMsg] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(form, formData);

    // ブラウザから Next.js の API へ POST （routes.jsのPOSTメソッド）
    fetch('/api/article', { method: form.method, body: formData }).then((res) => {
      if(!res.ok) {
        return res.json().then(data => {
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
