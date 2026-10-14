import Link from "next/link";

import { GoStar } from "react-icons/go";

const Dogslist = () => {
  return (
    <section className="m-full grid grid-cols-2 gap-4 p-4">
      <div className="bg-white rounded-3xl pb-4 shadow-xl">
        <Link href="/detailview">
          <div className="h-35 bg-amber-600 rounded-3xl mb-2 flex flex-row-reverse p-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200/70 rounded-4xl">
              <GoStar size={22} className="text-white" />
            </div>
          </div>
        </Link>
        <h2 className="ml-2 text-l font-bold text-zinc-800">Dog title</h2>
        <p className="ml-2 text-sm text-zinc-400">this is a dog</p>
      </div>
    </section>
  );
};

export default Dogslist;
