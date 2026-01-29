// POINT イベントの型定義を学ぼう
// マニアックな内容なので、参考程度
const Example = () => {
  // 関数を定義する場合は、eventオブジェクトの型を明示的に指定する必要がある
  // const clickHandler = (event) => console.log("MouseEvent", event);
  const clickHandler = (event: any) => console.log("MouseEvent", event); // 最初はanyを使っておく。慣れたらコードから型を推測できるようになる
  // const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("MouseEvent", event);
  return (
    <>
      <h1>Eventの型定義</h1>
      <h3>onClickにおけるeventオブジェクトの型: React.MouseEvent{"<T>"}</h3>

      {/* onClickに直接関数を渡す場合、型情報は自動で推論される */}
      <button onClick={clickHandler}>buttonタグ</button>
      {/* (parameter) event: React.MouseEvent<HTMLDivElement, MouseEvent> */}
      {/* onClickにおけるeventオブジェクトの型: React.MouseEvent<T></T> */}
      {/* function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) { // TSは、最終的にJSに変換されるので型は消える
      this._reactName = reactName;
      this._targetInst = targetInst;
      this.type = reactEventType;
      this.nativeEvent = nativeEvent;
      this.target = nativeEventTarget;
      this.currentTarget = null; */}
      <div onClick={(event) => console.log("MouseEvent", event)}>divタグ</div>
      {/* 上記の理由でコンソールにはMouseEventではなくSyntheticBaseEventと表示される。 */}
      <br />

    {/* interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean; // UIEventから継承
        button: number; // イベント毎に追加されるプロパティを整理するため、このような実装になっている
        buttons: number; // 継承したUIEventのプロパティを持つことは保証されている
        clientX: number;
        clientY: number; // interface情報は最終的に実行されるコードには存在しない
        ctrlKey: boolean; */}
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          console.log("MouseEvent", event)
        }
      >
        ボタン
      </button>

      <h3>onChangeにおけるeventオブジェクトの型: React.ChangeEvent{"<T>"}</h3>

      <input
        type="text"
        // (parameter) event: React.ChangeEvent<HTMLInputElement>
        onChange={(event) => console.log("ChangeEvent", event)}
      />
      <br />

      <select onChange={(event) => console.log("ChangeEvent", event)}>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="banana">banana</option>
      </select>
      <br />

      <h3>onSubmitにおけるeventオブジェクトの型: React.FormEvent{"<T>"}</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("FormEvent", event);
        }}
      >
        <button type="submit">送信</button>
      </form>
      <br />
    </>
  );
};

export default Example;
