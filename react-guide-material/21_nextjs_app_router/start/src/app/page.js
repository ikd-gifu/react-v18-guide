import Link from "next/link";
import { navList } from "../data/nav";

// リクエストが来た時に表示されるコンポーネントを記述する
// ファイル名はpageとする
// https://nextjs.org/docs/app/getting-started/project-structure#routing-files
export default function Home() {
  return (
    <ul className="navList">
      {navList.map((item) => {
        return (
          <li key={item}>
            <Link href={`/${item}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
