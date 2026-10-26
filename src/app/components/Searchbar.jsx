import { FaMagnifyingGlass } from "react-icons/fa6";
import Form from "next/form";

const Searchbar = () => {
  return (
    <section>
      <Form className="w-full flex flex-row justify-between p-4">
        <button type="submit" className="bg-red-300 text-white p-4 rounded-4xl">
          <FaMagnifyingGlass size={20} />
        </button>
        <input
          type="search"
          name="query"
          placeholder="search breed"
          className="bg-white border border-stone-300 w-full ml-4 rounded-4xl text-zinc-400 pl-6 pr-6"
        ></input>
      </Form>
    </section>
  );
};

export default Searchbar;
