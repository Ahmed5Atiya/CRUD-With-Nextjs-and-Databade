import { db } from "@/db";
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
  if (!snippetDetalis) {
    return notFound();
  }
  return <div>{snippetDetalis.title}</div>;
}

export default ShowSnippetDetails;
