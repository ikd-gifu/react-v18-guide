// POINT useStateの型定義について学ぼう
import { useState } from "react";

// 使い回すオブジェクトが複雑な場合はtypeエイリアスを使うと便利
type User = {
  name: string;
  age: number;
}

type Todo = {
  id: number;
  text: string;
}

const Example = () => {
  // Reactが型を推論してくれる
  // (alias) useState<string>(initialState: string | (() => string)): [string, React.Dispatch<React.SetStateAction<string>>] 
  const [ text, useText ] = useState("Hello");
  // useState<number>
  useState(0);
  
  // useState に型を定義する方法 User[]: User 型のオブジェクトの配列
  // <> の中にジェネリック型を指定する
  const [ users, setUsers ] = useState<User[]>([{name: "Tom", age: 22}]);

  const [ todos, setTodos ] = useState<Todo[]>([{ id: 1, text: "Homework" }]);

  // 明示的に型を指定してもOK
  const [ animals, useAnimals ] = useState<string[]>(["dog", "cat"]);
};

export default Example;
