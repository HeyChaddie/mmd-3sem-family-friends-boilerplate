import "./globals.css";
import Logo from "./components/Logo";
import Statusbar from "./components/Statusbar";

import Searchbar from "./components/Searchbar";
import Dogslist from "./components/Dogslist";

import Navbar from "./components/Navbar";

export default function ListView() {
  return (
    <>
      <header className="bg-white text-black w-full">
        <Statusbar />
        <Logo />
      </header>

      <main className="bg-white w-full grow pb-30">
        <Searchbar />
        <Dogslist />
      </main>

      <nav className="fixed bottom-0 left-0 backdrop-blur-sm bg-gray-200/70 w-full pb-4">
        <Navbar />
      </nav>
    </>
  );
}
