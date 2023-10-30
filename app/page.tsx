import { Hero, TopRankMovies } from "@/components";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex ">
      <div className="flex justify-center flex-col">
        <Hero />
        <div className="container mx-auto px-8 max-w-6xl flex-col">
          <TopRankMovies />
          {/* <Review /> */}
        </div>
      </div>
    </div>
  );
}
