"use client";
import { CreatePost } from "@/actions/action";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

function CreateNewSnippet() {
  const [formState, action] = useFormState(CreatePost, { message: "" });
  return (
    <div className="bg-gray-100 w-full container mt-10 py-10 px-7 mb-10">
      <div className="container flex flex-col gap-4 w-full ">
        <h1 className="font-bold  m-3 text-3xl text-blue-600 font-mono text-center">
          Create New Snippet
        </h1>
        <form action={action} className="flex flex-col gap-4 w-full">
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
          {formState.massege && (
            <div className="py-2 px-3 bg-red-200 text-[15px] ">
              {formState.massege}
            </div>
          )}
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
