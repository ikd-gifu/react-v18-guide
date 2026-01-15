// コンテキストを受け取る設定
import { useContext } from "react";
import { MyContext } from "../Example";

const GrandChild = () => {
  const value = useContext(MyContext); //コンテキストを受け取る。引数に設定したコンテキストを指定
  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;

// const GrandChild = ({ value }) => {
//   return (
//       <div style={{ border: "1px solid black" }}>
//         <h3>孫コンポーネント</h3>
//         {value}
//       </div>
//   );
// };
