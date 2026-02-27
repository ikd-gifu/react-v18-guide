import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  /* POINT 条件分岐 if文、&&、??（Null合体演算子）、３項演算子
  A && B (Aがfalsyの時Aを返し、Aがtruthyの時Bを返す)
  A ?? B (Aがnull or undefinedの時、Bを使う)
  */
  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalString = animal ?? "";
            const isMatch = animalString.indexOf(filterVal) !== -1;
            console.log(animalString.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            // true のとき→ true && "⭐️" なので結果は "⭐️"
            // false のとき→ false && "⭐️" なので結果は false
            // （Reactは false を表示しない）
            return <li key={animal}>
              {animal ?? "null,undefinedでした"}{animal === "Dog" && "⭐️"}
              </li>
            // return <li key={animal}>{ // 三項演算子
            //   animal + (
            //   animal === "Dog"
            //     ? "⭐️"
            //     : "")
            //   }</li>
            // return <li key={animal}>{
            //   animal === "Dog"
            //     ? animal + "⭐️"
            //     : animal
            //   }</li>
            // if (animal === "Dog") { // 重複コードが多い。三項演算子が適切
            //   return <li key={animal}>{animal}⭐️</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }
          })}
      </ul>
    </>
  );
};

export default Example;

// mapの記法
// .map((animal) => ({})) // オブジェクトリテラルの{}
// .map((animal) => {}) // アロー関数の記法
