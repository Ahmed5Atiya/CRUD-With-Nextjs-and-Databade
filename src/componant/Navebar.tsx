import Link from "next/link";

function Navebar() {
  return (
    <header className="w-full absolute z-10 bg-gray-100">
      <nav className="flex-between mx-auto sm:px-16 py-4 text-blue-600 px-6 bg-red-600">
        <Link href="/" className="">
          Home
        </Link>
        <ul className=" flex justify-between gap-4 ">
          <Link href="/snippets/new" className="px-6 py-3 bg-blue-300">
            Create
          </Link>
          <Link href="/view" className="px-6 py-3 bg-blue-300">
            View
          </Link>
          <Link href="/edit" className="px-6 py-3 bg-blue-300">
            Edit
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navebar;
