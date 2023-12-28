import { img } from "@/types";
import Image from "next/image";


const MoviePoster = ({ from }: img) => {
  return (
    <Image
      src={from}
      width={370}
      height={200}
      loading="lazy"
      className="w-full max-w-[370px] rounded-t-3xl object-top grid h-72 object-cover"
      alt="movie-poster"
    />
  );
};

const IconImg = ({ from,size,onClick,theme}: img) => {
  return (
    <Image
      src={from}
      width={size}
      height={size}
      onClick={onClick}
      className={theme||"cursor-pointer rounded-full"}
      alt="icon"
    />
  );
};

export { MoviePoster, IconImg };
