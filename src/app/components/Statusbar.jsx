import { IoCellularSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa";

const Statusbar = () => {
  return (
    <div className="max-w-full p-4 flex flex-row justify-between">
      <p className="font-bold">9:41</p>
      <div className="flex flex-row justify-between w-1/5">
        <IoCellularSharp size={20} />
        <FaWifi size={20} />
        <FaBatteryThreeQuarters size={20} />
      </div>
    </div>
  );
};

export default Statusbar;
