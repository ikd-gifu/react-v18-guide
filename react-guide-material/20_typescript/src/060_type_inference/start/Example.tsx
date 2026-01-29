// POINT TypeScriptでは型推論(type inference)によって型をある程度推定してくれる機能がある
// 基本的には、明らかに型が分かるような場合の型定義は型推論に任せるようにする

const Example = () => {
  let str = 'Hello'; // let str: stringのように型推論される str = 123; // エラー
  let obj = { name: 'Taro', age: 10 }; // let obj: { name: string; age: number; }のように型推論される obj.age = '20'; // エラー
  // objは外部から使用するもの、他の人が使うものは明示的に型定義をした方が良い。クラスのオプションなど。
  // 内部で使うだけの簡易なobjは型推論に任せて良い

  const bye = 'Bye'; // const bye: "Bye"のリテラル型として型推論される bye = 'See you'; // エラー
  const num = 123; // const num: 123のリテラル型として型推論される num = 456; // エラー
};

export default Example;
