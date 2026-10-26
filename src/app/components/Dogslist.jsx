import Link from "next/link";

import { GoStar } from "react-icons/go";
import { Suspense } from "react";

const Dogslist = ({ searchParams }) => {
  return (
    <section className="w-full grid grid-cols-2 gap-4 p-4">
      <Suspense
        fallback={
          <div className="h-100 flex justify-center items-center col-span-2">
            <h3 className="text-black font-bold text-xl tracking-tighter">Loading Breeds...</h3>
          </div>
        }
      >
        <FetchData searchParams={searchParams} />
      </Suspense>
    </section>
  );
};

export default Dogslist;

const FetchData = async ({ searchParams }) => {
  const { query } = await searchParams;
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const data = await response.json();

  console.log("API RESPONSE:", data);

  return data.map((dogs) => (
    <div key={dogs.id} className="bg-white rounded-3xl pb-4 shadow-xl">
      <Link href={`/detailview/${dogs.id}`}>
        <div
          className="h-35 bg-amber-600 rounded-3xl mb-2 flex flex-row-reverse p-2 bg-cover"
          style={{
            backgroundImage: `url("${dogs.image?.url}")`,
          }}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200/70 rounded-4xl">
            <GoStar size={22} className="text-white" />
          </div>
        </div>
      </Link>
      <h2 className="ml-2 text-l font-bold text-zinc-800">{dogs.name}</h2>
      <p className="ml-2 text-sm text-zinc-400">{dogs.origin}</p>
    </div>
  ));
};
