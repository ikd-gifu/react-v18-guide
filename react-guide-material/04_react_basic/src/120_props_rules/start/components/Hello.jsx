const Hello = (props) => {
  // const name = 'Tom'; // Helloでは使えるが、Byeには渡せない
  // props.name = 'Bob'; // POINT propsは読み取り専用
  console.log(props.name);
  // オブジェクトの設定を可視化 (オブジェクト, 設定状態を見たいプロパティ)
  // const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  // console.log(desc);
  // configurable: false // この設定は変更不可
  // writable: false // 書き換え不可
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;