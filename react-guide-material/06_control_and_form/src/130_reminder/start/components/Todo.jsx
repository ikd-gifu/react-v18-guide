import { useState } from 'react';
import List from './List';
import Form from './Form';

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
  const [todos, setTodos] = useState(todosList);
  // Todo は state を持つ親なので、削除本体 deleteTodo を持つためここでdeleteTodoを定義
  const deleteTodo = (id) => { // Listから削除対象のidが渡される
    // filterを使った配列操作
    const newTodos = todos.filter((todo) =>{
      return todo.id !== id; // 対象のidを含めないようにする
    })
    setTodos(newTodos)
  };

  const createTodo = (todo) => {
    // オブジェクト型のstateを更新する際はスプレッド演算子を利用する
    setTodos([...todos, todo])
  }

  return (
    <div>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </div>
  )
};

export default Todo;
