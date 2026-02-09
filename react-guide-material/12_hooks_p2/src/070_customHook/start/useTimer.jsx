// カスタムフック
// useStateなどは、コンポーネントのトップレベルでしか使えない
// useStateなどを内部で使用した関数（フック）をカスタムフックと呼ぶ
// これを関数に切り出すことで、ロジックの再利用が可能になる
import { useEffect, useLayoutEffect, useState } from "react";
// useEffect: 画面描画（ペイント）後に非同期で実行
// useLayoutEffect: DOMの変更が反映された直後、ペイント前に同期実行

const useTimer = () => { // カスタムフックは「use」から始める
  const [time, setTime] = useState(0); // カスタムフック内ではトップレベルでなくてもuseStateなどが使える
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // console.log('init');
    let intervalId = null;

    if(isRunning) {
      // console.log('timer start');

      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [isRunning])
  
  useEffect(() => {
    // // console.log('updated');
    
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
      // debugger
      // // console.log('updated end');
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  const toggle = () => {
    setIsRunning(prev => !prev);
  }

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  }

  // 使いたい変数や関数を返す
  return {
    time,
    isRunning,
    toggle,
    reset
  }
};

export default useTimer;
