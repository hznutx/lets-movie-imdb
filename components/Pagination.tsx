"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HiViewBoards, HiViewGrid, HiViewList } from "react-icons/hi";
import { MovieCard } from ".";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useReducer } from "react";

const enum Tab {
  grid = "grid",
  card = "card",
  list = "list",
  activeColor = "p-4 rounded-xl text-white bg-indigo-500",
  noClickColor = "p-4 rounded-xl text-gray-400 bg-blue-900",
}

const actionTypes = {
  Grid: "Grid",
  List: "List",
  Card: "Card",
};

export const reducer = (tab: any, action: any) => {
  switch (action.type) {
    case actionTypes.Grid:
      return { role: Tab.grid, active: true };
    case actionTypes.List:
      return { role: Tab.list, active: true };
    case actionTypes.Card:
      return { role: Tab.card, active: true };
    default:
      return tab;
  }
};

const initialtab = { role: Tab.grid, active: false };

const PageLayout = ({ moviecard }: { moviecard: any }) => {
  const [tab, dispatch] = useReducer(reducer, initialtab);

  return (
    <div className="container">
      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: actionTypes.Grid })}
          className={tab.role === Tab.grid ? Tab.activeColor : Tab.noClickColor}
        >
          <HiViewGrid />
        </button>
        <button
          onClick={() => dispatch({ type: actionTypes.List })}
          className={tab.role === Tab.list ? Tab.activeColor : Tab.noClickColor}
        >
          <HiViewList />
        </button>
        <button
          onClick={() => dispatch({ type: actionTypes.Card })}
          className={tab.role === Tab.card ? Tab.activeColor : Tab.noClickColor}
        >
          <HiViewBoards />
        </button>
      </div>
      <div className="max-w-7xl">
        {tab.role === Tab.grid && (
          <div
            role={Tab.grid}
            aria-labelledby="profile-tab"
            className="py-10 w-full grid gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          >
            {moviecard.map((movie: any, i: any) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        )}

        {tab.role === Tab.list && (
          <div role={Tab.list} aria-labelledby="profile-tab" className="w-full">
            <div className="flex-col flex gap-12 overflow-x-hidden px-96 max-h-[650px] w-full items-center">
              {moviecard.map((movie: any, i: any) => (
                <MovieCard movie={movie} key={i} />
              ))}
            </div>
          </div>
        )}

        {tab.role === Tab.card && (
          <div
            role={Tab.grid}
            className="group overflow-hidden flex items-center  h-[800px] max-w-6xl"
          >
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true, type: "custom" }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="min-w-[375px] max-w-7xl flex items-center"
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
        )}
      </div>
    </div>
  );
};
export default PageLayout;
