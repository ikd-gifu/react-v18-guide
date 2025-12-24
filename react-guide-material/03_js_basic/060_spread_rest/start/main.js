const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// スプレッド演算子
// … 要素1つ1つを展開する
// 展開後のオブジェクトは別のオブジェクト
// const result = Math.max(...nums);
// console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
let newArr1 = arr1;
newArr.push(4);
console.log(newArr);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = "Bob";

console.log(newObj, obj);

// 残余引数で配列を定義
// 引数の数が変化しても対応できる
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

// 特定の引数のみ指定する場合
const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
