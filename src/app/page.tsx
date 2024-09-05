import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  console.log(snippets);
  return (
    <div className="bg-gray-100 w-full container mt-10 py-10 px-7 mb-10">
      <h2 className="text-center text-2xl text-blue-600 font-semibold my-5">
        Show All Snippets
      </h2>
      <Link
        href="/snippets/new"
        className=" py-4 px-3 block w-full mb-5 text-center text-white outline-none bg-blue-500 font-mono text-xl hover:bg-blue-600"
      >
        Add New Snippet +
      </Link>
      <div className="flex flex-col ">
        <div className="flex justify-between bg-gray-200 text-blue-500 items-center px-5 py-3">
          <h3 className="text-center text-xl font-semibold ">Title</h3>
          <p className="font-bold">Action</p>
        </div>
        {snippets.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between max-sm:flex-col gap-3 px-5 py-3 bg-white mb-2"
          >
            <p className="text-blue-600  font-mono text-xl">{item.title}</p>
            <Link
              href={`/snippets/${item.id}`}
              className="bg-blue-500 hover:bg-blue-600 max-sm:w-full text-center text-white text-[15px] font-bold py-1 px-6"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
