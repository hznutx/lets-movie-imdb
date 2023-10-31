"use client";
import { icon } from "@/constants/images";
import Image from "next/image";
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
          <button className=" fixed slow z-20 bottom-7 right-7 self-center opacity-20 cursor-pointer hover:opacity-40">
            <Image
              src={icon.top}
              width={30}
              className="rounded-full m-2"
              height={30}
              alt="find"
            />
          </button>
        </Link>
      ) : null}
    </div>
  );
};
export default BackToTop;
