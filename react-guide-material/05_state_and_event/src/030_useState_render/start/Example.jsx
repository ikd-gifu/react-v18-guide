import { useState } from "react";

// const Example = () => {
//  空で初期化しているので、Example()が最初に実行されたときはvalは再度空になる
//   let displayVal;
//   // inputに入力するとonChangeが実行されるが、stateが更新されないため、Example()は再実行されない
//   // そのため、displayValは更新されない
//   console.log('再レンダリングされました');
//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => { // コールバック関数を実行
//           console.log(e.target.value);
//           displayVal = e.target.value;
//  値を更新してもExample()が再実行されないため、displayValは更新されない
//         }}
//       />
//       = {displayVal}
//       {/* displayValは関数の外なので、入力しても変化しない Example()を再実行する必要がある */}
//     </>
//   );
// };
// まとめ
// ・Reactにコンポーネントの再実行（再レンダリング）を依頼し、
// 新しいReact要素（returnで返すJSX要素）を作成してもらう必要がある
// ・変更した値をどこかに保存しておく必要がある（stateに保存）
// これらを可能にする仕組みを提供するのがuseStateという関数

const Example = () => {
  // val:現在の値 setVal:更新関数 初期値
  let [ val, setVal ] = useState(); // ①接続（Hook into）
  // ②React内部と接続。状態が管理されるようになる
  console.log('再レンダリングされました');
  // setValを呼び出すとExample()が再実行されるため、これも再度表示される
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value); // ③現在の値と更新関数を返す
          // e (イベントオブジェクト): onChange イベントハンドラに自動的に渡される合成イベント
          // (SyntheticEvent)オブジェクト
          // e.target: イベントが発生した要素(この場合は <input> 要素)
          // e.target.value: <input> 要素の value プロパティで、
          // 入力フィールドに入力された現在の値を取得
        }}
      />
      = {val}
    </>
  );
};
// まとめ
// ①接続（Hook into）
// ②React内部と接続。状態が管理されるようになる
// ③現在の値と更新関数を返す
// 更新関数で新しい値をReactに渡す。
// また、Reactにコンポーネントの再実行（再レンダリング）を依頼する
// React内部に保持されたコンポーネントに紐づく値をstate（状態）と呼ぶ
// レンダリングを跨いで保持したい値はstateに保存する必要がある

export default Example;
