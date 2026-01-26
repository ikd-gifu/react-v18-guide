// import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  // const [ value, setValue ] = useState(0); // Exampleで定義
  // Exampleで定義したstateの更新関数のみをuseContextで取得（1番目を分割代入で取得）
  const [,setState] = useContext(MyContext);

  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
