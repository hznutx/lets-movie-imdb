import { MoviesIMDB } from "@/types";
import Link from "next/link";
import { icon } from "../constants/images";
import { IconImg, MoviePoster } from "./ImageSet";

const MovieCard = ({ movie }: { movie: MoviesIMDB }) => {
  return (
    <div className="card grid rounded-3xl w-[360px] shadow-sm bg-slate-100  flex-col">
      <MoviePoster from={movie.images[2][1]} />
      <div className="p-6 grid group">
        <Link
          href={`${movie.link}`}
          className="group-hover:text-cyan-700 font-bold text-xl line-clamp-1"
        >
          {movie.title}
        </Link>
        <span className="text-slate-400 text-xs pt-2 font-semibold">
          ({movie.year})
        </span>
        <div className="h-20">
          <span className="line-clamp-3 py-2 text-xs leading-6">
            {movie.description}
          </span>
        </div>

        <div className=" grid-cols-2 flex group justify-between">
          <div className="font-black flex flex-col">
            <span className="text-yellow-500 text-sm">IMDB SCORE</span>
            <span className="text-xl flex gap-x-1 group-hover:text-yellow-600">
              {movie.rating}
              <IconImg from={icon.rating} alt="{movie.rating}" size={24} />
            </span>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-fit" />
            <span className="text-xl  font-bold  gap-x-2 text-slate-300">
              #{movie.rank}
            </span>
          <div className="flex gap-1">
            {movie?.genre?.map((type, i) => (
              <span
                className="rounded-lg px-2 py-1 text-xs bg-slate-300"
                key={i}
              >
                {type}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
