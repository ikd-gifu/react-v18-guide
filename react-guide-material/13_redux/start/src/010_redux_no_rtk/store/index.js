// createStoreは非推奨。 Redux Toolkitを使う
// Reduxではグローバルな状態管理を行うために唯一のstoreを作成
// 参考：https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-application-data-flow
// この図とコードを見比べると理解しやすい
import { createStore } from "redux";

const initialState = 0;
// 第一引数：state、第二引数：action
const reducer = (state = initialState, { type, step }) => {
        switch (type) {
          case "+":
            // 元のstateを基にactionの値を合わせて新しいstateを定義して返す
            return state + step;
          case "-":
            return state - step;
          default:
            // throw new Error('不明なactionです。')
            return state;
        }
      };

// reducerを状態を管理する関数としてstoreに登録
// reducerでのみstateを更新
export default createStore(
  reducer
);
