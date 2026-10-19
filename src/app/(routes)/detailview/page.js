import "@/app/globals.css";
import Logo from "@/app/components/Logo";
import Statusbar from "@/app/components/Statusbar";

import Dogdetailedimage from "@/app/components/Dogdetailedimage";
import Dogdetailedtitle from "@/app/components/Dogdetailedtitle";
import Dogdetailedtext from "@/app/components/Dogdetailedtext";

import Navbar from "@/app/components/Navbar";

const DetailView = () => {
  return (
    <>
      <header className="bg-white text-black w-full">
        <Statusbar />
        <Logo />
      </header>

      <main className="bg-white w-full p-4 flex flex-col grow pb-30">
        <Dogdetailedimage />
        <Dogdetailedtitle />
        <Dogdetailedtext />
      </main>

      <nav className="fixed bottom-0 left-0 backdrop-blur-sm bg-gray-200/70 w-full pb-4">
        <Navbar />
      </nav>
    </>
  );
};

export default DetailView;
