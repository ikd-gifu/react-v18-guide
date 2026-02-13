// axiosでリクエストを送信
import { useEffect } from "react";
import axios from "axios"; // 内部でJSONを内部でJSオブジェクトに変換してくれる
// https://axios-http.com/ja/

const Example = () => {
  // コンポーネント内は純関数にする 副作用はuseEffect内で行う
  // useEffect(() => {
    // axios.get('http://localhost:3003/user').then((res) => { // promiseを返すresはgetで取得した値
  useEffect(() => { // useEffect内で副作用を扱う コールバック自体は同期的に実行される
    const getUser = async () => { // 関数を定義しただけで実行されない async awaitで非同期処理を同期的に扱う
      const res = await axios.get('http://localhost:3003/user')
      console.log(res.data) // 状態更新をしないので、再レンダリングは発生しない
    };
    getUser(); // 非同期処理は内側の関数に切り出してから明示的に呼び出す
  }); // []はなくても無限ループにはならない。親の再レンダリングや自分の再レンダリングが起きた場合に再度実行される
};

export default Example;

