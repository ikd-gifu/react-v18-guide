import { useState }from 'react';
const Example = () => {
  console.log(<Example />);
  const [ countA, setCountA ] = useState(0);
  // 更新用関数setCountAに紐づくstateの値（countA）が更新される
  // コンポーネントのトップレベルか、カスタムフックの中でのみ呼び出すことができる
  // Reactコンポーネントの_ownnerプロパティのmemorizedStateに定義順に値が保存される
  // if文などで呼び出すと、呼び出し順が変わるため、Reactは正しい値を返せなくなる
  const [ countB, setCountB ] = useState(10);
  const [ countC, setCountC ] = useState(100);
  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      {/* イベントオブジェクトを使用しないのでeを引数に取らない */}
      <button onClick={() => {
        setCountA(countA + 1);
      }}>ボタンA</button>
      <p>ボタンBを{countB}回押しました！</p>
      <button onClick={() => {
        setCountB(countB + 1);
      }}>ボタンB</button>
      <p>ボタンCを{countC}回押しました！</p>
      <button onClick={() => {
        setCountC(countC + 1);
      }}>ボタンC</button>
    </>
  )
};

export default Example;
