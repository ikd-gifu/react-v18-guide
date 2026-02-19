import { useState } from "react";
// POINT プリミティブ型：1, "str", bool, 10n, Symbol(), null, undefined
// POINT オブジェクト型：{}, []などのプリミティブ型以外
// POINT オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する！
const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    // person.name = '';
    // console.log({ ...person } === person); // false
    // console.log(person === person); // true
    // ...personで展開して新しいオブジェクトを作成しているため、personとは異なるオブジェクトになる
    person.name = e.target.value;
    // 「state を直接変更しない（不変更新）」
    // setPerson({ ...person, name: ... }) で新しいオブジェクトを作って更新
    console.log({ ...person})
    console.log({ ...person, name: e.target.value, age: 20 })
    setPerson({ ...person, name: e.target.value })
    // 変更しないプロパティも含めて新しいオブジェクトを作成する必要がある
    // person.name = e.target.value;
    // setPerson({ name: e.target.value, age: person.age }) // 新しいオブジェクトを作成している
    // この書き方だと入力できず変更できない
    // person.name = e.target.value; // personは元のpersonで、person.nameを変更している
    // personは元のperson
    // プロパティが変更されても、オブジェクト自体は同じメモリアドレスを指しているため、同一のオブジェクトと判断される
    // Reactは状態更新の検知に参照の比較(===)を使用しているため、同じオブジェクトと判断されてしまい、状態が更新されたと認識されない
    // setPerson(person)
  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value })
  }
  const reset = () => {
    setPerson({ name: "", age: "" })
  }
  return (<>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    <input type="text" value={person.name} onChange={changeName} />
    <input type="number" value={person.age} onChange={changeAge} />
    <div>
      <button onClick={reset}>リセット</button>
    </div>
  </>);
};

export default Example;
