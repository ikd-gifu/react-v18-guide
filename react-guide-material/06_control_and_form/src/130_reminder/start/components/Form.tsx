import { useState } from 'react';

const Form = ({createTodo}) => {
  // 初期値は空文字で空欄
  // 局所状態なのでFormで管理
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    // フォーム送信のデフォルト動作（ページ再読み込み）を止める
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo
    }

    createTodo(newTodo);

    setEnteredTodo("");
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          // 入力されたら、それを取得し状態を更新
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
        {enteredTodo}
      </form>
    </div>
  )
};

export default Form;
