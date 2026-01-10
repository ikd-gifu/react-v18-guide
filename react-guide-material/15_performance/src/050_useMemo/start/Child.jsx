import { use } from "react";
import { useMemo } from "react";

// useMemo: 値をメモ化する（キャッシュに保存して再利用する）
// React.memo: コンポーネントをメモ化する
const Child = ({ countB, onClick }) => {
  console.log("%cChild render", "color: red;");

  return useMemo(() => { // 第1引数: メモ化する値を返す関数, 第2引数: 依存配列
    console.log("%cuseMemo", "color: green;");
    return(
      <div className="child">
        <h2>子コンポーネント領域</h2>
        <button onClick={onClick}>ボタンB</button>
        <p>ボタンBクリック回数：{countB}</p>
      </div>
    );
  }, [onClick]); // 設定した依存配列（onClick、countB）が変化した場合にのみ再評価する。それ以外はメモ化された値を返す。Childコンポーネント自体は毎回レンダリングされるが、useMemo内の部分は依存配列が変化しない限り再評価されない。
};

// memoでラップされたコンポーネントにdisplayNameが設定されていない場合、ESLintのreact/display-nameエラーが発生するため、設定する
Child.displayName = 'Child';

export default Child;
