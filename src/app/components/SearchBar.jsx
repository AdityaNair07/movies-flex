"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = ({ onData }) => {
  const [movie, setMovie] = useState("Resident Evil");

  const getMovie = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=6127562e&t=${movie}&s=${movie}&plot='full'`
    );
    console.log(response.data.Search);
    const movieData = response.data.Search;
    onData(movieData);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="w-full p-4">
      <form
        className="relative flex items-center justify-center w-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Enter movie name..."
          className="w-full p-2 text-black bg-white rounded-md outline-none focus:outline-none"
          onChange={(e) => setMovie(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 block p-2 text-lg text-black ri-search-line"
          onClick={getMovie}
        ></button>
      </form>
    </div>
  );
};

export default SearchBar;
