import { Hero, TopRankMovies } from "@/components";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex">
      <div className="w-full justify-center flex-col">
        <Hero />
        <div className="mb-14 container mx-auto px-8 max-w-7xl flex-col">
          <TopRankMovies />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
