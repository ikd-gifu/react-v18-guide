// POINT propsの流れは一方通行
// 値を渡す場合は親コンポーネントからpropsを利用して渡す
// Reactでは、子から渡す方法はない（
// POINT propsは読み取り専用

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  const name = 'Tom'; // POINT propsの流れは一方通行
  // props.name = 'Tom'; // 定義前で使えない。代入しているのでNG
  return (
    <>
      <Hello name={name}/>
      <Bye name={name} />
    </>
  );
};

export default Example;
