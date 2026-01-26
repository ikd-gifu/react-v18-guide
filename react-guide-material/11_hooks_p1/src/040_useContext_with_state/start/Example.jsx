import { createContext, useState } from "react"; //useStateは削除
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext(); // Providerでvalueが見つからない時()の初期値を設定できる

const Example = () => {
  // GrandChildとOtherChildで共有するstateを定義
  // ChildとOtherChildが両方読み込まれるコンポーネントで定義
  const [ state, setState ] = useState(0);
  return (
    // valueはuseContextで取得できるようにする
    <MyContext.Provider value={[ state, setState ]}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
