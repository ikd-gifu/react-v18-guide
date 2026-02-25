
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {animalList}
        {/* 配列のような繰り返し処理を行う小要素にはkeyプロパティを必ずつける */}
        {animals.map((animal) => <li key={animal}>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;

// keyをつける際の注意点
// ・keyには必ず一意の値を設定する
// ・keyに設定した値は変更しない
// ・配列のインデックスはなるべく使わない
// →配列の先頭に追加すると、インデックスもズレて挙動がおかしくなる
// 先頭に要素を新たに追加する場合、keyがないと他の子要素も全て更新（commit）する挙動になる
// Reactはkeyを元に比較して差分を更新するため
