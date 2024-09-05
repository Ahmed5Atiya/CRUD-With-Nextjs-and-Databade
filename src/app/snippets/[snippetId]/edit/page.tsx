import EditSnippet from "@/componant/EditSnippet";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
interface TypeOfSnippet {
  params: {
    snippetId: string;
  };
}

async function EditSnippetCode(props: TypeOfSnippet) {
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
      <EditSnippet snippet={snippetDetalis} />
    </div>
  );
}

export default EditSnippetCode;
