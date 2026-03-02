import List from './List';
import Form from './Form';
import { useState } from 'react';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  // 画面を更新したいので useStateを使う
  // 複数コンポーネントで使う状態を共通の親に持ち上げる設計（状態のリフトアップ）
  const [todos, setTodos] = useState(todosList);

  // 子は関数を呼ぶだけ、実際の状態更新は親が担当
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      {/* 関数の参照（住所のようなもの）を渡す */}
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </>
  )
};

export default Todo;
