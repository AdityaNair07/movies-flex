"use client";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [data, setData] = useState(null);

  const handleData = (childData) => {
    childData ? setData(childData) : setData(null);
  };

  return (
    <>
      <div className="w-full px-4 py-6">
        <Navbar />
        <SearchBar onData={handleData} />
        <div className="relative grid grid-cols-1 px-6 py-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {data ? (
            data.map((e) => {
              return (
                <MovieCard
                  key={e.imdbID}
                  imageUrl={e.Poster}
                  title={e.Title}
                  type={e.Type}
                  year={e.Year}
                />
              );
            })
          ) : (
            <div className="absolute top-0 left-0 w-full px-4 py-3 text-lg text-white">
              No data on the database for the specified search input...
            </div>
          )}
        </div>
      </div>
    </>
  );
}
