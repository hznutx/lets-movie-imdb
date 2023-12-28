import { MouseEventHandler } from "react";

export interface MoviesIMDB {
  searchKeyword?: any;
  key?: string | number | bigint | null | undefined;
  rank?: string;
  title: string;
  description?: string;
  images: { 2: { 1: string } };
  genre?: [];
  thumbnail?: string;
  rating?: string;
  id?: string;
  year?: string;
  imdbid?: string;
  link?: string;
}

export interface FilterSearchInput {
  onClick?: MouseEventHandler<HTMLImageElement>;
  onChange?: any;
  keyword?: string | number | readonly string[] | undefined;
  dataFilter: MoviesIMDB[];
}

export type DropDownList = {
  movietype?:any;
  rating?:any ;
  rank?: any;
};

export interface img {
  from: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  w?: number;
  h?: number;
  theme?: string;
  size?: number;
  alt?: string;
  link?: string;
}

export interface IMoviesContext {
  movies?: React.Dispatch<React.SetStateAction<MoviesIMDB[]>>;
  setMovies?: React.Dispatch<React.SetStateAction<MoviesIMDB[]>>;
  searchInput?: string;
  setSearchInput?: React.Dispatch<React.SetStateAction<string>>;
  searchMovies?: any;
}
