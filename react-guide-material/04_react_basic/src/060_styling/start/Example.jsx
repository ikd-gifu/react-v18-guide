/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
// 相対パスでファイルを読み込む場合、./ をつける
// グローバルに適用されるスタイル
import "./Example.css";

const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
    </div>
  );
};

export default Example;
