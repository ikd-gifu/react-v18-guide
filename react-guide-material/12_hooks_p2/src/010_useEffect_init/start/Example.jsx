import { useEffect, useState } from "react";
// useEffect: DOM更新後に動く。API通信、購読、タイマー、手動DOM操作など
// 「副作用」をここに置く。依存配列で実行タイミングを決める。

// 使い分けの目安

// 副作用を「実行する」→ useEffect
// 関数の再生成を「抑える」→ useCallback
// 「副作用があるからuseCallback」は誤り。副作用はuseEffectに置く。
// 「とりあえずuseCallback」は不要。参照の安定化が必要なときだけ。

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("useEffect is called");
    window.setInterval(() => {
      setTime(prev => prev + 1);
  }, 1000);
  }, []); // 空配列を渡すことで、初回レンダー時に一度だけ実行される
  // stateが更新された時、処理を実行したい場合は、依存配列にstateを入れる
  // コールバック関数内に行いたい処理を書く

  // useEffect(() => {
  //   console.log("useEffect is called");
  //   window.setInterval(() => {
  //     setTime(prev => prev + 1);
  // }, 1000);
  // }); // setIntervalをuseEffectの外に書いたのと同じ。 毎回レンダーされるたびに実行されてしまう

  // useEffect(() => {
  // console.log("updated");
  // }, [time]);  // timeが更新されるたびに実行される

  // window.setInterval(() => { // このままだと無限にsetIntervalが作られてしまう
  //   setTime(prev => prev + 1);
  // }, 1000);

  useEffect(() => {
    document.title = 'counter:' + time; // timeが更新されるたびにブラウザのタイトルタブを更新
    window.localStorage.setItem('time-key', time); // timeが更新されるたびにローカルストレージを更新
    // setTime(prev => prev + 1); // timeが更新されるたびにtimeを+1する（無限ループになるので注意）
    // 依存配列をコールバック関数内で更新しないように注意
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
