import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState("");
  // const clearValue = setVal(""); // その場で実行 無限ループ
  const clearValue = () => setVal(""); // 関数を定義 

  return (
    <div>
      {/* htmlForをinput, textareaのidと同じにすると関連付けできる */}
      <label htmlFor='789'>ラベル</label>
      <div>
        {/* valueの値にinputの内容を紐付ける */}
        {/* htmlではfor JSXではhtmlFor */}
        <input
          id="789"
          placeholder='こんにちは'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        {/* htmlでは<></>の中に値を書くが、JSXは< />の中に書く */}
        <textarea
          id="1011"
          placeholder='こんにちは'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearValue} >クリア</button>
    </div>
  );
};

export default Example;
