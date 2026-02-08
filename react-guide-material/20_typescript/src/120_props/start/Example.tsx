// POINT Reactコンポーネントのpropsの型定義
import Hello, { Btn } from './Hello';

const Example: React.FC = () => {
  return (
    <>
    {/* props を渡す場合はfn={関数} の形式で */}
      <Btn fn={(text)=> console.log(`Hello ${text}`)} />
      {/* "Children" という文字列を children として Hello コンポーネントに渡す */}
      <Hello text="TypeScript">Children</ Hello>
    </>
  );
};

export default Example;
