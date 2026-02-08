type HelloProps = {
  text: string;
  // text?: string; // オプショナルプロパティ
  children: React.ReactNode; // Reactの要素や文字列など何でも受け取れる React18以降はchildrenも明示的に型定義する必要がある
}

// type FC<P = {}> = FunctionComponent<P>; 初期値は空オブジェクト
//     interface FunctionComponent<P = {}> { 入出力のみを定義 Pを受け取りpropsの型とする
        // (
        //     props: P,
const Hello: React.FC<HelloProps> = (props) => {
  // children は コンポーネントのタグで囲まれた中身 を表す特殊な props
  return <h1>Hello, {props.text}! {props.children}</h1>;
}

// 「fn という名前で、(text: string) => void 型の関数をpropsとして受け取る」ことを型定義している
// fnはボタンクリック時に何かの処理を実行するだけで、その結果を受け取る必要がないため、voidが適切
type FnProps = {
  fn: (text: string) => void;
}

export const Btn: React.FC<FnProps> = (props) => {
  // props.fn - propsとして親コンポーネントから関数を受け取る
  // props.fn('TypeScript') - 受け取った関数を'TypeScript'という引数で実行する
  // onClick={でボタンクリック時に実行する関数を指定している
  return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
}

export default Hello;
