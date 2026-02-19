import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  
  const shuffle = () => {
    // numsを展開し、新しい配列を定義している。
    const newNums = [ ...nums ];
    // numsの持つ参照をnewNumsに代入する意味になる
    // 配列自体がコピーされるわけではない
    // const newNums = nums;
    // 配列から最後の要素を取り除き、その要素を返す
    const value = newNums.pop(); // newNums: [1, 2, 3, 4] value: 5
    // 指定された要素を配列の先頭に追加し、新しい配列の長さを返す
    newNums.unshift(value); // newNums:[5, 1, 2, 3, 4]
    // newNums はローカル変数なので、setNums(newNums) を呼ぶまで 
    // React の再レンダーが起きない
    // 再レンダーで更新後のstateを用いて画面が更新される
    setNums(newNums);
    console.log(newNums);
  }
  return (
    // {}の中に配列を入れると展開される
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
