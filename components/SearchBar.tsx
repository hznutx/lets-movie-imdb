"use client"
import { icon } from "@/constants/images";
import { handleSearch } from "@/utils/search";
import Image from "next/image";
import { useState } from "react";
import DropdownButton from "./SearchQuery";

const SearchBar = () => {
  const [filterClick, setFilterClick] = useState(false);
  const [movie, setMovie] = useState("");

  const handlePopup = () => {
    setFilterClick((prev) => !prev);
  };

  return (
    <form onSubmit={handleSearch} className="w-full mb-32">
      <div className="flex rounded-full bg-slate-800 px-2">
        <Image
          src={icon.filter}
          width={30}
          height={30}
          onClick={handlePopup}
          className="rounded-full m-2 cursor-pointer"
          alt="search"
        />

        <input
          type="text"
          name="movie"
          value={movie}
          className="w-full flex bg-transparent pl-2 text-slate-500 font-light outline-0"
          placeholder="Search name movie or select options"
        />
        <button type="submit" className="relative p-2 rounded-full">
          <Image
            src={icon.search}
            width={30}
            className="rounded-full"
            height={30}
            alt="find"
          />
        </button>
      </div>
      {filterClick && <DropdownButton />}
    </form>
  );
};

export default SearchBar;
