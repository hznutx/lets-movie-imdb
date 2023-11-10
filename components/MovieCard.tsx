import { MoviesIMDB } from "@/types";
import Link from "next/link";
import { icon } from "../constants/images";
import { IconImg, MoviePoster } from "./ImageSet";

const MovieCard = ({ movie }: { movie: MoviesIMDB }) => {
  return (
    <div className="card grid rounded-3xl min-w-[375px] sm:w-[390px] shadow-sm bg-slate-100  flex-col">
      <MoviePoster from={movie.images[2][1]} />
      <div className="p-6 grid group">
        <Link
          href={`${movie.link}`}
          className="group-hover:text-cyan-700 font-bold sm:text-2xl sm:h-16 line-clamp-2"
        >
          {movie.title}
        </Link>
        <span className="text-slate-400 text-xs sm:text-base font-semibold">
          ({movie.year})
        </span>
        <div className="h-28">
          <span className="line-clamp-4 py-2 text-xs sm:text-base leading-relaxed">
            {movie.description}
          </span>
        </div>
        <div className=" grid-cols-2 flex group justify-between">
          <div className="font-black flex flex-col">
            <span className="text-yellow-500 text-xl">IMDB SCORE</span>
            <span className="text-3xl flex gap-x-1 group-hover:text-yellow-600">
              {movie.rating}
              <IconImg from={icon.rating} alt="{movie.rating}" size={24} />
            </span>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-7" />
            <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
              #{movie.rank}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
