import { useState } from "react";
// CSS modulesは非推奨になる
// https://github.com/webpack/css-loader/issues/1050

import SubButton from "./components/SubButton";
// import "./Example.css";
import styles from "./Example.module.css";

// console.log(styles);
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* css moduleがcssファイルからクラスを抽出して一意の名前をつけている */}
      {/* コンポーネントごとにstyleを適用できる */}
      <button className={`${styles.btn} ${isSelected ? styles.selected : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
