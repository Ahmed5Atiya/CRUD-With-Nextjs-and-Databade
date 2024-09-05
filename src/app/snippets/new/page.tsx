import { db } from "@/db";
import { redirect } from "next/navigation";

function CreateNewSnippet() {
  async function CreatePost(formData: FormData) {
    // this need to be a server action
    "use server";
    //check if user enter a value and valid
    const title = formData.get("title") as string;
    const code = formData.get("title") as string;

    // create a new record
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect("/");
  }
  return (
    <div className="bg-slate-100 container py-16 px-6 flex items-center justify-center w-full">
      <div className="container flex flex-col gap-4 w-full ">
        <h1 className="font-bold m-3 text-3xl text-blue-600 font-mono text-center">
          Create New Snippet
        </h1>
        <form action={CreatePost} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-500 font-semibold text-[25px]"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="py-4 px-6  outline-none border-2 border-blue-600"
              type="text"
              name="title"
              id="title"
              placeholder="Enter your title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-500 font-semibold text-[25px]"
              htmlFor="code"
            >
              Code
            </label>
            <textarea
              name="code"
              id="code"
              placeholder="Enter your title"
              className="py-4 px-6 h-[200px] outline-none border-2 border-blue-600"
            />
          </div>
          <button
            type="submit"
            className="py-5 px-4 text-white outline-none bg-blue-500 font-semibold text-xl hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewSnippet;
