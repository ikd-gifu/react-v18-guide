import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  console.log(animals.filter(animal => animal == "Dog"));
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={
        (e) => setFilterVal(e.target.value)
      }/>
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal))
            return isMatch
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;

// .filter((animal) => (animal.indexOf(filterVal) !== -1))
// filter(...)
// 配列を条件で絞り込みます。true の要素だけ残る。
// (animal) => ...
// 各要素（"Dog", "Cat" など）を animal として判定。
// animal.indexOf(filterVal)
// filterVal が animal の何文字目にあるかを返す。
// 見つかる: 0 以上
// 見つからない: -1
// !== -1
// 「見つかった要素だけ true」にする条件。
// 配列を扱う際にはmapとともにfilterもよく利用される
