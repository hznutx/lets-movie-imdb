import { Hero, TopRankMovies } from "@/components";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex">
      <div className="w-full justify-center flex items-center flex-col">
        <Hero />
        <div className="container px-5 flex mx-auto max-w-7xl flex-col">
          <TopRankMovies />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
