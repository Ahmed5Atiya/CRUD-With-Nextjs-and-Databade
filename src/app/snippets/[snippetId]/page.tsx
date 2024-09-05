import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface TypeOfSnippet {
  params: {
    snippetId: string;
  };
}

async function ShowSnippetDetails(props: TypeOfSnippet) {
  const snippetDetalis = await db.snippet.findFirst({
    where: { id: +props.params.snippetId },
  });
  console.log(snippetDetalis);
  if (!snippetDetalis) {
    return notFound();
  }
  return (
    <div className="bg-gray-100 w-full container mt-10 py-10 px-7 mb-10">
      <h2 className="text-center text-2xl text-blue-600 font-semibold mb-5">
        Show Special Snippet
      </h2>
      <div className="flex items-center flex-row max-sm:flex-col gap-2 justify-between flex-grow  mb-5">
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-600  max-sm:w-full flex-grow  text-center text-[17px] font-bold py-3 px-6  text-white"
        >
          Delete
        </Link>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-center max-sm:w-full flex-grow  text-[17px] font-bold py-3 px-6  text-white"
        >
          Edit
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="bg-green-300 text-2xl py-3 px-6 text-gray-700">
          {snippetDetalis.title}
        </h2>
        <code className="w-full py-7 px-8 bg-black text-white">
          {snippetDetalis.code}
        </code>
      </div>
    </div>
  );
}

export default ShowSnippetDetails;
