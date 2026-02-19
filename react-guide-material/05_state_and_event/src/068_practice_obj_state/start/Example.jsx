import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  // const changeItem = (e) => {
  // order が指す同じオブジェクト本体を破壊的変更している
  // order の中身（同一参照先）を直接更新している状態
  //   order.item = e.target.value

  // 新しいオブジェクトを作っているが、order.item = ... でオブジェクトを
  // 直接壊しているので、「直接変更していない」とは言えない
  //   setOrder({ ...order, item: e.target.value })
  // };
  // const countUp = () => {
  //   count = order.count
  //   setOrder({ ...order, count: count + 1 })
  // };
  // const countDown = () => {
  //   count = order.count
  //   setOrder({ ...order, count: count - 1 })
  // };

  const changeItem = (e) => {
    // setOrder({ ...order, item: e.target.value });
    // 元の値を使う場合はアロー関数を使う方がいい
    // 新しい値がコールバック関数の戻り値になる
    // オブジェクトを返す場合、それを示すために()をつける
    // オブジェクトの{}かアロー関数の{}か区別するため
    setOrder(order => ({...order, item: e.target.value }));
    // エラー：Failed to reload /src/068_practice_obj_state/start/Example.jsx. 
    // This could be due to syntax errors or importing non-existent modules. (see errors above)
  };
  const countUp = () => {
    // setOrder({ ...order, count: order.count + 1 })
    setOrder(order => ({ ...order, count: order.count + 1 }));
  };
  const countDown = () => {
    // setOrder({ ...order, count: order.count - 1 })
    setOrder(order => ({ ...order, count: order.count - 1 }));
  };
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。
      </p>
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
