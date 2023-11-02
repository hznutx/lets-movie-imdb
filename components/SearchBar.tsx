"use client";
import { icon } from "@/constants/images";
import { FilterSearchInput } from "@/types";
import { IconImg } from "./ImageSet";
import { useState } from "react";

const SearchBar = ({ onClick, keyword, onChange }: FilterSearchInput) => {
   const [openDropDown, setOpenDropDown] = useState(false);

   const handlePopup = () => {
     setOpenDropDown((prev) => !prev);
   };
  
  
  return (
    <form itemType="submit" className="w-full mb-5">
      <div className="flex rounded-full bg-[#0d1829] px-2">
        <IconImg from={icon.filter} size={30} onClick={handlePopup} />
        <input
          type="text"
          value={keyword}
          onChange={(e: any) => {
            onChange(e.target.value);
          }}
          className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
          placeholder="Search name movie or select options"
        />
        <button
          type="submit"
          className="relative p-2 bg-[#0d1829] rounded-full"
        >
          <IconImg from={icon.search} size={30} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
