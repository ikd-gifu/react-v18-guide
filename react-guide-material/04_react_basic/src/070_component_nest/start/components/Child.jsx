import "./Child.css";
// 名前付きをインポートする
import { List } from "./List";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      {/* ul>li{item-$}*5 と書いてTabキーを押すと展開される */}
      <List />
    </div>
  );
};

// Childの名称でなくてもインポートできる
// 基本的にはexport {}ではなくこちらの方法が多い
// １ファイルに１関数が基本
export default Child;

// 別でexportしなくても良い、名前も不要
// export default = () => {
//   return (...
