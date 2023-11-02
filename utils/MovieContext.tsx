// "use client"
// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useMemo,
//   useCallback,
//   PropsWithChildren,
// } from "react";
// import { calculateNextFetchTime, fetchAndSaveData, getStoredData } from ".";
// import { IMoviesContext, MoviesIMDB } from "@/types";


// export type IMovieData = {
//   movies: any;
//   setMovies: any;
//   searchInput: any;
//   setSearchInput: any;
//   searchMovies: any;
// };


// const MovieContext = createContext<IMovieData>({});

// export const MovieProvider = ({ children }: PropsWithChildren) => {
//   const [movies, setMovies] = useState<MoviesIMDB[]>([]);
//   const [searchInput, setSearchInput] = useState("");


//   const searchMovies = movies.filter((movie) => {
//     return movie.title.includes(searchInput);
//   });

//   const values = useMemo(() => {
//     return {
//       movies,
//       setMovies,
//       searchInput,
//       setSearchInput,
//       searchMovies,
//     };
//   }, [
//     movies,
//     setMovies,
//     searchInput,
//     setSearchInput,
//     searchMovies,
//   ]);

//   return (
//     <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
//   );
// };


// const useMovieContext = () => {
//   const context = useContext(MovieContext);
//   return {
//     movies:context.movies,
//     setMovies:context.setMovies,
//     searchInput:context.searchInput,
//     setSearchInput:context.setSearchInput,
//     searchMovies:context.searchMovies,
//   };
// };

// export default useMovieContext

const MovieContext = () => {
  return (
    <div>MovieContext</div>
  )
}
export default MovieContext