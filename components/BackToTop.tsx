"use client";
import { icon } from "@/constants/images";
import Link from "next/link";
import { useEffect, useState } from "react";
import {  IconImg } from "./ImageSet";

const BackToTop = () => {
  const [backOnTop, setBackOnTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setBackOnTop(true);
      }  else {
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
          <button className=" fixed slow z-20 bottom-7 right-7 self-center opacity-20 cursor-pointer hover:opacity-40">
            <IconImg from={icon.top} size={30} />
          </button>
        </Link>
      ) : null}
    </div>
  );
};
export default BackToTop;
