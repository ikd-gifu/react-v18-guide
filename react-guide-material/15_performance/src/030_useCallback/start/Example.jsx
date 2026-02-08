import React, { useCallback, useState } from "react";
import Child from "./Child";
import { use } from "react";
// useCallback: 関数の参照をメモ化する。子コンポーネントに渡す関数や、
// useEffectの依存に入れる関数の再生成を抑えたいときに使う。

// 使い分けの目安

// 副作用を「実行する」→ useEffect
// 関数の再生成を「抑える」→ useCallback
// 「副作用があるからuseCallback」は誤り。副作用はuseEffectに置く。
// 「とりあえずuseCallback」は不要。参照の安定化が必要なときだけ。

const Example = () => {
  console.log("Parent render");
  
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const clickHandler = useCallback(() => { // 関数をpropsとして子コンポーネントに渡す際に、不要な再レンダリングを防ぐ（親（countA）のみレンダリング）
  // 関数の参照を保持（useCallbackは関数をメモ化（キャッシュ）するフック）
    setCountB((pre) => pre + 1);
  }, []); // 依存配列[]が空なので、初回レンダリング時の関数参照を保持

  // const clickHandler = () => { // ボタンAをクリックした際もonClickのclickHandlerと別物になっている（onClickの参照が変わる）
  //   setCountB((pre) => pre + 1);
  // }
  // const clickHandler2 = () => {
  //   setCountB((pre) => pre + 1);
  // }
  // console.log(Object.is(clickHandler, clickHandler2)); // 同一か確認 => false
  return (
    <div className="parent">
      <div>
        <h3>親コンポーネント領域</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1); // ボタンAをクリックした際に親コンポーネントが再レンダリングされる。useCallbackを使わない場合、onClickのclickHandlerも新しい関数参照になるため、子コンポーネントも再レンダリングされる
            }}
          >
            ボタンA
          </button>
          <span>親のstateを更新</span>
        </div>
      </div>
      <div>
          <p>ボタンAクリック回数：{countA}</p>
      </div>
      <Child countB={countB} onClick={clickHandler}/>
    </div>
  );
};

export default Example;