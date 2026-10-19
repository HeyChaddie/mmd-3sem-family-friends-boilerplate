import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbar = () => {
  return (
    <section className="w-full flex flex-row justify-between p-4">
      <button className="bg-red-300 text-white p-4 rounded-4xl">
        <FaMagnifyingGlass size={20} />
      </button>
      <input
        type="search"
        placeholder="search breeds"
        className="bg-white border border-stone-300 w-full ml-4 rounded-4xl text-zinc-400 pl-6 pr-6"
      ></input>
    </section>
  );
};

export default Searchbar;
