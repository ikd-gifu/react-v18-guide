import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
import todoApi from "../api/todo";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    // todoのプロパティを全てコピーして、editingだけを反転させた新しいオブジェクトを作成する
    const newTodo = { ...todo, editing: !todo.editing };
    todoApi.patch(newTodo).then(newTodo => {
      dispatch({ type: 'todo/update', todo: newTodo });
    });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      // 編集後にenterを押したときに、editingをfalseにするため、editingを反転させる
      editing: !todo.editing,
      content: editingContent,
    };
    // thenの引数はなくても問題ない。newTodoと同じものがdispatchの引数に渡される。
    todoApi.patch(newTodo).then(newTodo => {
      dispatch({ type: 'todo/update', todo: newTodo }); // 設定したnewTodoと同じもの
    });
    
  };

  const complete = (todo) => {
    // deleteの戻り値は空のオブジェクトなので、thenの引数も空のオブジェクトになる。
    // 引数を空のオブジェクトにしてもいいが、引数を省略しても問題ない。
    // todoApiの返り値はpromiseなので、thenで受け取るからawaitで受け取る
    todoApi.delete(todo).then(() => {
      dispatch({ type: "todo/delete", todo }); // completeで渡されるtodoと同じものがdeleteのthenの引数に渡される
    });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
