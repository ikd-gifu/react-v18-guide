// 引数に型推論できないので、明示的に型注釈をつける必要がある
const Example = () => {
  function sum1(x: number, y: number): void { 
  // function sum1(x: number, y?: number) { // 任意の引数を表すには「?」をつける
  // function sum1(x: number, y: number = 1) { // 引数にデフォルト値を設定する方法もある
    // return x + y; // 'y' は 'undefined' の可能性 void 型ではない値を返しています。returnは呼び出し元に値を返すために使用されます。
    console.log(x); //ブラウザのコンソールに値を出力する。戻り値を返さない場合はvoid型を指定する
  }

  const result1 = sum1(1, 2);
  console.log(result1)

  // 関数の戻り値は暗黙的に型推論されるため、省略可能
  const sum2 = (x: number, y: number): number =>  x + y;
  const result2 = sum2(10, 20);
  console.log(result2)

  type Sum = (x: number, y: number) => number; // 関数の型エイリアスを定義する（関数を方として定義）
  // Sum(5, 6) // 関数でないので、呼び出せない
  const sum3: Sum = (x, y) => x + y;
  const result3 = sum3(30, 40);
  console.log(result3)
};

export default Example;
