"use client";
import { useEffect, useState } from "react";
import { MoviesIMDB } from "@/types";
import { MovieCard, SearchBar } from ".";
import {
  calculateNextFetchTime,
  fetchAndSaveData,
  getStoredData,
} from "@/utils";
import { HEADER_TOPMOVIE } from "@/constants";
import { SearchFilter } from "./SearchFilter";
import PageLayout from "./Pagination";
import Pagination from "./Pagination";

const TopRankMovies = () => {
  const [movies, setMovies] = useState<MoviesIMDB[]>([]);
  const [searchInput, setsearchInput] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);

  async function fetchMovies() {
    const storedData = getStoredData();

    if (storedData) {
      setMovies(storedData);
    } else {
      const data = await fetchAndSaveData();
      if (data) {
        setMovies(data);
      }
    }
  }

  const handlePopup = () => {
    setOpenDropDown((prev) => !prev);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const timeUntilNextDay = calculateNextFetchTime();

    const timer = setTimeout(() => {
      fetchMovies();
    }, timeUntilNextDay);

    return () => clearTimeout(timer);
  }, []);

  const searchMovies = movies.filter((movie) => {
    return movie.title.includes(searchInput);
  });

  const isDataEmpty =
    !Array.isArray(searchMovies) || searchMovies.length < 1 || !searchMovies;
const NumResultMovies = searchMovies.length;

  return (
    <div className="flex-col py-8 gap-y-12 flex items-center">
      <SearchBar
        keyword={searchInput}
        onClick={handlePopup}
        onChange={setsearchInput}
      />
      {!isDataEmpty ? (
        <div className="gap-y-12 flex items-center flex-col w-full">
          <p className="sm:text-5xl font-extrabold text-center text-white">
            {NumResultMovies !== 100 ? (
              <span>Found {NumResultMovies} movies result</span>
            ) : (
              <span>{HEADER_TOPMOVIE}</span>
            )}
          </p>
            <Pagination moviecard={searchMovies}/>
          </div>
      ) : (
        <span className="w-full text-center text-lg text-white">
          Sorry but nothing match 🙁 recheck movie name again
        </span>
      )}
    </div>
  );
};

export default TopRankMovies;
