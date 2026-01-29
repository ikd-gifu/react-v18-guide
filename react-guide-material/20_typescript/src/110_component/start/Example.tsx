// 関数コンポーネントに型注釈をつける
// すでにReactで定義されている型を利用して、関数コンポーネントに型注釈をつける
// cmd + クリックで定義にジャンプできる
// const Example: React.FC = () => {
//     return <h1>Hello TypeScript</h1>;
// };

import Hello from "./Hello";

// React 18からVFCは非推奨になった
const Example: React.FC = () => {
    return <Hello />;
}

export default Example;
