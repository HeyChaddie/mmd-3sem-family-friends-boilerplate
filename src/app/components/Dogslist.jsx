import Link from "next/link";

const Dogslist = () => {
  return (
    <section className="bg-pink-700 max-w-94 max-h-full flex flex-wrap">
      <div className="bg-blue-300 w-1/2">
        <Link href="/detailview">
          <img src="img_girl.jpg" alt="Girl in a jacket" />
        </Link>
        <h2>dog title</h2>
        <p>this is a dog</p>
      </div>
    </section>
  );
};

export default Dogslist;
