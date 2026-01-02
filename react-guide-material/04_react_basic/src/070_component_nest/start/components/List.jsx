const List = () => {
  return (
    <ul>
      <li>Item-1</li>
      <li>Item-2</li>
      <li>Item-3</li>
      <li>Item-4</li>
      <li>Item-5</li>
    </ul>
  )
}

// 複数の関数をエクスポートする場合はこちら
export { List }

// 以下のように定義と同時にエクスポートしても良い
// export const List = () => {
//   return (...
// }