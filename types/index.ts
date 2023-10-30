export interface MoviesIMDB {
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

export interface CardProps {
  data?: MoviesIMDB[];
}
