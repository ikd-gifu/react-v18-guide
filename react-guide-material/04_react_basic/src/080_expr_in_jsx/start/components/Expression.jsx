import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  // JSXを読み込む際は{} 式は埋め込むことができるが、文はできない
  // メソッドも実行できる
  // {'Hello Function'} 文字列もJSのコードなので、{}に記述可能
  const arry = ['item1', 'item2', 'item'] // 自動で配列が展開される
  const hello = (arg) => `${arg} Function`; // 関数の実行も可能
  const jsx = <h3>Hello JSX</h3>; // オブジェクトに格納 JSのオブジェクトとして扱える
  const bool = true; // boolean型は画面に表示されない決まり

  console.log(jsx)
  // JSのコードでは、{}を利用してJSの式を評価して、結果を画面に表示する
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{/* 画面上に表示されません */}</h3>
      {<h3>Hello JSX</h3>} {/* <h3>もJSXとみなされる JSオブジェクトに変換される */}
      <h3>{jsx}</h3>
      {bool}
    </div>
  )
};

export default Expression;
