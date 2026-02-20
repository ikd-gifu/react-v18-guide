/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// コンポーネントの出力結果を変更する際は、propsを用いて値を変更するルールがある
// const Child = (props) => { // propsは慣習的な名称。pなどでも良い JSの機能
const Child = ({ color: c = 'green' }) => {
  // 分割代入 これもJSの機能
  // デフォルト値を設定できる。別名を設定できる

  // console.log(props);

  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
