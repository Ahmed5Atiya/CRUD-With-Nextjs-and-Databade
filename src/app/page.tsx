import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  console.log(snippets);
  const renderSnippet = snippets.map((item) => {
    return (
      <div key={item.id}>
        <Link href={`/snippets/${item.id}`}>{item.title}</Link>
      </div>
    );
  });
  return <div>{renderSnippet}</div>;
}
