import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <Link href="/read/2">css</Link>
          </li>
        </ol>
        <article>
          <h2>Welcome</h2>
          Hello, WEB
        </article>
        <ul>
          <li>
            <Link href="/create">create</Link>
          </li>
          <li>
            <Link href="/update">update</Link>
          </li>
          <li>
            <Link href="/delete">delete</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
