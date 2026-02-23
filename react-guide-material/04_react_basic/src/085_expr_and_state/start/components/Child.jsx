/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの） JSX内{}で使うことができる
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
式は文になることがあるが、文が式になることはない
*/

import "./Child.css";

const Child = () => {
  const fn = () => 'Hello'; // 関数 実行結果は式になる {}であればundefinedという値を返す
  const a = 1; // 式 const~1;までは文
  // const e = const a = 1; // 変数に代入できない
  const b = fn(); // 実行結果は値（Hello）になるので、これは式
  const c = 1 === 1; // trueを返す式
  console.log(c); // true
  const f = true ? 'hello' : 'bye'; // 式 true/falseに応じて値を返す
  if(true) { 'Hello'} // 文
  // const d = if(true) { 'Hello'}; // 文を変数に代入できない。エラー

  // 式はJSX内で使用できるが、文は使用できない

  {for(let i =0; i < 5; i++) {}} // 条件判定のif文、for文などはreturnの前に書く
  return (
    <div className="component">
      <h3>式と文</h3>
      {a}
      {b}
      {c} {/* trueを返すが、画面には表示されない */}
      { 1 === 1 }
      {/* { if(true) { 'Hello'} } 文なのでエラー */}
      {true ? 'hello' : 'bye'}
      {/* {for(let i =0; i < 5; i++) {}} 文なのでエラー */}
    </div>
  );
};

export default Child;

// 式文：式にも文にもなり得る
1 // 式（数値）
1; //文 1というメモリスペースを取得する。何もしないが、処理を行う
