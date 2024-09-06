"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function UpdataSnippet(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  console.log(id, code);
  redirect(`/snippets/${id}`);
}
export async function DeleteSnippet(id: number) {
  console.log(id);
  await db.snippet.delete({
    where: { id },
  });
  console.log(id);
  redirect(`/`);
}

export async function CreatePost(
  formState: { massege: string },
  formData: FormData
) {
  // //check if user enter a value and valid
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return {
      massege: "The Title Must be Currect and Longer ",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      massege: "The Code Must be Currect and Longer ",
    };
  }

  // // create a new record
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  redirect("/");
}
