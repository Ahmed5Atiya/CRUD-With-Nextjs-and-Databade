"use client";

import * as action from "@/actions/action";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

interface SnippetProps {
  snippet: Snippet;
}

function EditSnippet({ snippet }: SnippetProps) {
  const [code, setCode] = useState(snippet.code);
  const handelChangeCode = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = action.UpdataSnippet.bind(null, snippet.id, code);
  return (
    <div className="flex items-center flex-col gap-3">
      <h2 className="w-full py-4 px-5 bg-black text-white font-mono text-xl">
        Code
      </h2>
      <Editor
        height="60vh"
        onChange={handelChangeCode}
        language="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
      <form action={editSnippetAction} className=" w-full ">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-center w-full  text-[17px] font-bold py-3 px-6  text-white"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditSnippet;
