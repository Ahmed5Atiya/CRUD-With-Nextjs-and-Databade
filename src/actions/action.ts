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
