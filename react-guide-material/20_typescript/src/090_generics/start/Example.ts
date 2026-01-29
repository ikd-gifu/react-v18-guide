// POINT ジェネリクスとは、型引数(type parameters)を受け取る関数を作る機能のことを指す

const Example = () => {
  // TSだと、型が異なる場合別々の関数を用意する必要がある
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value); // times回分のvalueを持つ配列を生成
  }
    const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value); // times回分のvalueを持つ配列を生成
  }

  // 型を引数として受け取る関数を作成＝＞ ジェネリクス
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value); // times回分のvalueを持つ配列を生成
  }

  // const atrArray = repeatStr("hello", 3); // ["hello", "hello", "hello"] 空の配列を生成してfillで埋める
  // const numArray = repeatNum(10, 3); // [10, 10, 10] 空の配列を生成してfillで埋める
  const numArray = repeat<number>(10, 3); // Tにnumber型を指定 Tの部分がnumberに置き換わる。関数実行時に型が決まる
  const strArray = repeat<string>("hello", 3);
  const strArray2 = repeat("hello", 3); //const repeat: <string>(value: string, times: number) => string[] 省略しても型推論でstringと判断されるので、省略する事が多い
  const boolArray = repeat<boolean>(true, 3);
  const byeArray = repeat<"bye">("bye", 3);
  // console.log(atrArray);
  // console.log(numArray);
  console.log(numArray);
  console.log(strArray);
  console.log(strArray2);
  console.log(boolArray);
  console.log(byeArray);
};

export default Example;
