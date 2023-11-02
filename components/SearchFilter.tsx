"use client";
import DropdownButton from "./SearchDropDown";
import { DropDownList, FilterSearchInput, MoviesIMDB } from "@/types";
import { SearchBar } from ".";
import { useState } from "react";

export const SearchFilter = ( {movietype,rank,rating}:DropDownList ) => {
  

  return (
    <div className="w-full flex-col">
      <div className="mt-2 grid sm:grid-cols-3 gap-6">
        <DropdownButton data={movietype} />
        <DropdownButton data={rank}/>
        <DropdownButton data={rating}/>
      </div>
    </div>
  );
};
