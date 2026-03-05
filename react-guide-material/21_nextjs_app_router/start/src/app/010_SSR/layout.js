// フォルダごとのレイアウトを指定

export default function SubLayout({ children }) {
  return (
    <div style={{ background: 'red'}}>
      {children}
    </div>
  )
}
