"use client";
import { useRouter } from "next/navigation";

export function UpdateSearchParams(params:any) {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);

  for (const key in params) {
    if (params[key]) {
      searchParams.set(key, params[key]);
    } else {
      searchParams.delete(key);
    }
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  router.push(newPathname);
}

export function filterGenreList(genre: any, query: string) {
  return query === ""
    ? genre
    : genre.filter((item:any) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );
}


export function handleSearch(e: React.FormEvent<HTMLFormElement>){
  e.preventDefault();

  UpdateSearchParams(e);
};