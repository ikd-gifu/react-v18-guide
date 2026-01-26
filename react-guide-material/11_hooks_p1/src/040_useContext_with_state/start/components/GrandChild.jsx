import { useContext } from "react";
import { MyContext } from "../Example";
const GrandChild = () => {
  // Exampleで定義したstateをuseContextでvalueとして取得
  const [value] = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
      {value}
    </div>
  );
};
export default GrandChild;
