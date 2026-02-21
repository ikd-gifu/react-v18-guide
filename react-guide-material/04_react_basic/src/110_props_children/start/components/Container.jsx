import "./Container.css";

/* POINT props.children として子要素を受け取る
ここでは分割代入を使用して、 props.children を取り出しています。
*/
const Container = ({ title, children, first, second }) => {
  console.log(children);
  return (
    <div className="container">
      <h3>{title}</h3>
      {second}
      {first}
    </div>
  );
};

export default Container;
