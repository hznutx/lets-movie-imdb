"use client"
import { useEffect, useState } from 'react';
import { MoviesIMDB } from '@/types';
import { MovieCard } from '.';
import { calculateNextFetchTime, fetchAndSaveData, getStoredData } from '@/utils';

const TopRankMovies = () => {
  const [movies, setMovies] = useState<MoviesIMDB[]>([]);

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

  return (
    <div className="flex-col py-8 gap-y-10 flex items-center">
      <span className="sm:text-5xl font-extrabold text-center text-white">
        Top 100 Movies All times Recommended
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {movies.map((movie, i) => (
          <div key={i}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRankMovies;
