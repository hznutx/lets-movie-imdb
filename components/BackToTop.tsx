"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [backOnTop, setBackOnTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setBackOnTop(true);
      } else if (window.onscrollend) {
        setBackOnTop(false);
      } else {
        setBackOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {backOnTop ? (
        <Link href="#top">
          <button className="text-white text-xs fixed slow z-20 bottom-7 right-7 self-center rounded-full w-10 h-10 bg-slate-700 opacity-50 cursor-pointer">
           ^
          </button>
        </Link>
      ) : null}
    </div>
  );
};
export default BackToTop;
