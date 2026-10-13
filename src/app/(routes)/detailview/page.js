import "@/app/globals.css";
import Logo from "@/app/components/Logo";
import Statusbar from "@/app/components/Statusbar";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";

const DetailView = () => {
  return (
    <>
      <header className="bg-white text-black max-w-94">
        <Statusbar />
        <Logo />
      </header>

      <h1>DetailView</h1>
      <Link href="/">Back to ListView</Link>

      <nav className="bg-orange-300 max-w-94">
        <Navbar />
      </nav>
    </>
  );
};

export default DetailView;
