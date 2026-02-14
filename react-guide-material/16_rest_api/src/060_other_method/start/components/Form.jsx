import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
import todoApi from "../api/todo";
const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      // id: Math.floor(Math.random() * 1e5), // json-server v0tov1対応 デフォルトで文字列のidが振られるため不要。
      content: enteredTodo,
      editing: false,
    };

    // newTodoを送信し、result.dataを受け取る。これがthenの引数に渡される
    // stateを更新するために、dispatchを呼び出す
    // todoApiの返り値はpromiseなので、thenで受け取るからawaitで受け取る
    todoApi.post(newTodo).then(newTodo => {
      dispatch({ type: "todo/add", todo: newTodo });
      // 更新処理の後に、入力欄を空にする
      setEnteredTodo("");
    });

    // setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
