"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
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
  // this is for when i delete the snippet that will be rebuild the home page to show the data
  revalidatePath("/");
  redirect(`/`);
}

export async function CreatePost(
  formState: { massege: string },
  formData: FormData
) {
  try {
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
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // throw new Error("the data not save in database");
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        massege: err.message,
      };
    } else {
      return {
        massege: "there is some thing inCorrect",
      };
    }
    // this for if i want to throw the error message for the error componant
    // throw new Error("the data not save in database");
  }
  // this is for when i Create the snippet that will be rebuild the home page to show the data
  revalidatePath("/");
  redirect("/");
}
