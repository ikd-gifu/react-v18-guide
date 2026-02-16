// イベントリスナー：UIでイベントが発生した際に実行したい関数を登録する仕組み
const Example = () => {
  const ClickHandler = () => {
    // onClick={}の中に関数を定義してもいいが、可読性の観点から関数は外に定義することが多い
    alert('ボタンがクリックされました。'); // returnしていないのでundefinedが返される
  }
  const AnotherClickHandler = () => {
    console.log('別のボタンがクリックされました。');
  }

  return (
    <>
      {/* アロー関数の中で関数を実行（括弧必要） コールバック関数 */}
      {/* <button onClick={() => ClickHandler()}>クリックしてね</button> */}
      {/* onClickに登録される関数をイベントハンドラと呼ぶ */}
      <button onClick={ClickHandler}>クリックしてね</button>
      {/* <button onClick={ClickHandler()}>クリックしてね</button> */}
      {/* JSXを作成する際に実行してしまうため、イベントハンドラの末尾に()は付けない */}
      {/* ClickHandlerの戻り値はundefinedなので、onClickにundefinedが登録されることになる */}
      {/* そのため、クリックしても何も起こらない */}
      <button onClick={AnotherClickHandler}>クリックしてね</button>
    </>
  );
};

export default Example;

// アロー関数
// アロー関数の=>の右側は関数の処理内容なので、そこに書くコードは通常のJavaScriptの実行文として扱われます
// onClick={() => ClickHandler()}
//        ↑
//        ここから先は「関数の中身」なので
//        関数を実行したければ()が必要

// 通常の関数
// function handleClick() {
//   ClickHandler()  // ← 関数本体の中では関数を実行するために()が必要
// }

// アロー関数（同じ意味）
// () => {
//   ClickHandler()  // ← 関数本体の中では関数を実行するために()が必要
// }

// アロー関数（波括弧省略形）
// () => ClickHandler()  // ← これも同じ（単一の式の場合は{}を省略できる）
