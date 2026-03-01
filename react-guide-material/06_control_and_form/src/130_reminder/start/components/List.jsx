import PropTypes from "prop-types";

const List = ({todos, deleteTodo}) => {
  // List は表示側なので、受け取った削除関数を「この行の id で呼ぶ」だけにする
  // 子から親コンポーネントを操作する意図を明確にする中間関数（省略しても動作は同じ）
  const complete = (id) => { // todo.idを受け取りdeleteTodoに渡す
    deleteTodo(id)
  }

  return (
    <div>
      {/* mapによる配列操作 */}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {/* onClick には「関数そのもの」を渡す */}
            {/* onClick={complete(todo.id)} と書くと、レンダー時に即実行される */}
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </li>
        )
      })}
    </div>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default List;
