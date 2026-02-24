
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const animalList = [];
  for(const animal of animals) { // 文
    animalList.push(<li>{animal}</li>)
    // JSXはReact要素に変換される。オブジェクトとして扱えるので、配列に含めることができる
  }

  const helloAnimals = animals.map((animal) => // 式 新しい配列を返す Reactが展開して表示
    <li >Hello, {animal}</li>
    // <li key={`hello-{animal}`}>Hello, {animal}</li> // Missing "key" prop for element in iteratorの対処法
  );
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animalList}
        {helloAnimals}
        {animals.map((animal) => <li >Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
