import { PiHouse } from "react-icons/pi";
import { GoStar } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-around items-center h-20 text-stone-400">
      <li>
        <a href="/">
          <PiHouse size={30} />
        </a>
      </li>
      <li>
        <a href="/">
          <GoStar size={30} />
        </a>
      </li>
      <li>
        <a href="/">
          <IoChatbubbleOutline size={30} />
        </a>
      </li>
      <li>
        <a href="/">
          <BsPerson size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
