import "./globals.css";
import Logo from "./components/Logo";
import Statusbar from "./components/Statusbar";

import Searchbar from "./components/Searchbar";
import Dogslist from "./components/Dogslist";

import Navbar from "./components/Navbar";

export default function ListView() {
  return (
    <>
      <header className="bg-white text-black max-w-94">
        <Statusbar />
        <Logo />
      </header>

      <main className="bg-violet-400 p-4 max-w-94  max-h-full">
        <Searchbar />
        <Dogslist />
      </main>

      <nav className="bg-orange-300 max-w-94">
        <Navbar />
      </nav>
    </>
  );
}
