import { MoviesIMDB } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { icon } from "../constants/images";

const MovieCard = ({ movie }: { movie: MoviesIMDB }) => {
  return (
    <div className="card grid rounded-3xl max-w-xs sm:max-w-[390px] shadow-sm bg-slate-100  flex-col">
        <Image
          src={movie.images[2][1]}
          width={390}
          height={200}
          className="rounded-t-3xl objects-top grid h-80 object-cover"
          alt={movie.title}
        />
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
              <Image
                src={icon.rating}
                alt="{movie.rating}"
                width={24}
                height={24}
              />
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
