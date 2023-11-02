"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { MovieCard } from ".";
import { IconImg } from "./ImageSet";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const enum Tab {
  grid = "grid",
  card = "card",
  list = "list",
  activeColor = "text-white bg-indigo-500",
  noClickColor = "text-gray-400 bg-blue-900",
  gridlayout = "/grid.svg",
  cardlayout = "/gridcard.svg",
  listlayout = "/gridlist.svg",
}

const PageLayout = ({ moviecard }: { moviecard: any }) => {
  const [activeTab, setActiveTab] = useState("grid");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex-col flex">
      <div className="inline-flex gap-4 ">
        <button
          className={`flex mb-10 p-4 rounded-2xl text-center cursor-pointer ${
            activeTab === "grid" ? Tab.activeColor : Tab.noClickColor
          }`}
          onClick={() => handleTabClick("grid")}
        >
          <IconImg from={Tab.gridlayout} size={24} />
        </button>{" "}
        <button
          className={`flex mb-10 p-4 rounded-2xl text-center cursor-pointer ${
            activeTab === "card" ? Tab.activeColor : Tab.noClickColor
          }`}
          onClick={() => handleTabClick("card")}
        >
          <IconImg from={Tab.cardlayout} size={24} />
        </button>{" "}
        <button
          className={`flex mb-10 p-4 rounded-2xl text-center cursor-pointer ${
            activeTab === "list" ? Tab.activeColor : Tab.noClickColor
          }`}
          onClick={() => handleTabClick("list")}
        >
          <IconImg from={Tab.listlayout} size={24} />
        </button>
      </div>
      <div className="w-full flex rounded-3xl">
        {activeTab === Tab.grid ? (
          <div role="tab" aria-labelledby="profile-tab" className="max-w-6xl">
            <div className="grid grid-cols-3 w-full gap-12 items-center">
              {moviecard.map((movie: any, i: any) => (
                <MovieCard movie={movie} key={i} />
              ))}
            </div>
          </div>
        ) : activeTab === Tab.card ? (
          <div className="group overflow-hidden flex items-center  h-[800px] max-w-6xl">
            <Swiper
              slidesPerView={1}
              pagination={{clickable:true,
                type: "custom",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="max-w-7xl flex items-center"
            >
              {moviecard.map((movie: any, i: any) => (
                <SwiperSlide
                  key={i}
                  className="max-w-xl px-20 flex justify-center items-center"
                >
                  <MovieCard movie={movie} />
                </SwiperSlide>
              ))}
            </Swiper>
           
          </div>
        ) : activeTab === Tab.list ? (
          <div role="tab" aria-labelledby="profile-tab" className="w-full">
            <div className="flex-col flex gap-12 overflow-x-hidden px-96 max-h-[650px] w-full items-center">
              {moviecard.map((movie: any, i: any) => (
                <MovieCard movie={movie} key={i} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default PageLayout;
