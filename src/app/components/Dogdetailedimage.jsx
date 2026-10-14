import Link from "next/link";

import { GoStar } from "react-icons/go";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Dogdetailedimage = () => {
  return (
    <div className="bg-amber-500 w-full h-100 rounded-3xl flex flex-col justify-between p-6">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100/90 rounded-4xl">
            <MdOutlineArrowBackIos size={22} className="text-black" />
          </div>
        </Link>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200/70 rounded-4xl">
          <GoStar size={22} className="text-white" />
        </div>
      </div>
      <div className="backdrop-blur-sm bg-gray-300/60 w-1/2 flex flex-row p-2 rounded-2xl font-medium">
        <div className="bg-blue-400 w-10 h-10 mr-2 rounded-xl"></div>
        <p>dog name</p>
      </div>
    </div>
  );
};

export default Dogdetailedimage;
