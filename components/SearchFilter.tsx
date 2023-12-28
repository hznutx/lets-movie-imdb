"use client";
import DropdownButton from "./SearchDropDown";
import { DropDownList, FilterSearchInput, MoviesIMDB } from "@/types";
import { SearchBar } from ".";
import { useState } from "react";
import { attend, genre, sorting } from "@/constants";

export const SearchFilter = ( {movietype,rank,rating}:DropDownList ) => {
  

  return (
    <div className="w-full flex-col">
      <div className="mt-2 grid sm:grid-cols-3 gap-6">
        <DropdownButton data={sorting} />
        <DropdownButton data={genre} />
        <DropdownButton data={attend} />
      </div>
    </div>
  );
};
