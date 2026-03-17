// 050_actionsのaction関数
// server側で動く関数として定義
"use server"
import { ENDPOINT } from "@/constants";

export async function createItem(state, formData) { // useFormState
// formDataにはFormDataのオブジェクトが渡ってくる
// export async function createItem(formData) { // Server Action
  // "use server" // 関数内に設定しても良い
  console.log(state); // { msg: null } 画面に表示される値（state）
  const id = formData.get('id');
  const title = formData.get('title');
  // console.log(id, title); // 1 1111

  if(id === '' || title === '') {
    // Responseはサーバーからクライアントにデータを返却するときに使う
    // Server Actionsを使う場合には不要
    // return Response.json({ msg: '入力フィールドが空です。' }, { status: 500 })
    return { msg: '入力フィールドが空です。' };
  }

  try {
    // throw 'error'
    // POSTはoptionの第二引数を指定 JSONでjsonサーバーにリクエスト
    // 正常に処理が完了すると、POSTしたJSONがそのまま返ってくる
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
      "Content-Type": "application/json"
      },
      // JavaScript のオブジェクトや値を JSON 文字列に変換
      // { id: "1", title: "React入門" }（JSオブジェクト）とセットして
      // {"id":"1","title":"React入門"}（JSON文字列）に変換
      body: JSON.stringify({ id, title })
    });
    // JSON を取って解釈し、 JavaScript のオブジェクトを生成
    const data = await res.json(); // サーバーから返ってくるJSON文字列を、JavaScriptオブジェクトへ変換
    // return Response.json(data); 
    // JavaScript値を JSON文字列にして、ResponseとしてAPIの戻り値に設定する
    // return data; // この設定でResponseオブジェクトとして返る
    return { msg: `${data.id}:${data.title}の登録が完了しました。` }
  } catch(e) {
    // return Response.json({ msg: '登録に失敗しました。' }, { status: 500 })
    // status codeは設定できない
    return { msg: '登録に失敗しました。' };
  }
}
