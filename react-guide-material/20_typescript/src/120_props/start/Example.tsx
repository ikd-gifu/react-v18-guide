// POINT Reactコンポーネントのpropsの型定義
import Hello, { Btn } from './Hello';

const Example: React.FC = () => {
  return (
    <>
      <Btn fn={(text)=> console.log(`Hello ${text}`)} />
      <Hello text="TypeScript">Children</ Hello>
    </>
  );
};

export default Example;
