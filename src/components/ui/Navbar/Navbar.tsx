import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex max-w-full p-3 justify-center bg-slate-100 drop-shadow-sm h-[60px] relative dark:bg-gray-900 dark:text-slate-100">
      <div className="flex max-w-7xl w-full">
        <section className="w-1/2">
          <li className="flex w-80 items-center opacity-80 hover:opacity-100 ease-out duration-300">
            <Link href="/">
              Home
            </Link>
          </li>
        </section>
      </div>
    </ul>
  );
};

export { Navbar };
