import { FaRegBell } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="w-full p-4 flex flex-row justify-between">
      <h1 className="font-bold text-xl tracking-tighter">FamilyFriends</h1>
      <FaRegBell size={24} />
    </div>
  );
};

export default Logo;
