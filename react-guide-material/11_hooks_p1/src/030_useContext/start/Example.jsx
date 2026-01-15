import Child from "./components/Child";
import { createContext } from "react";

export const MyContext = createContext('hello'); //渡したい値を引数に指定

const Example = () => {
  // propsとしてvalueをChildコンポーネント経由でGrandChildコンポーネントに渡す
  // バケツリレー
  return <Child />;
};

export default Example;


// const Example = () => {
//   const value = 'hello'
//   // propsとしてvalueをChildコンポーネント経由でGrandChildコンポーネントに渡す
//   // バケツリレー
//   return <Child value={value}/>;
// };