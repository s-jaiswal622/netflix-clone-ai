import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const HeroBanner = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const movie = movies?.[0];

  if (!movie) return null;

  const { title, overview, id } = movie;

  return (
    <div className="relative h-[70vh] text-white flex items-end overflow-hidden bg-gradient-to-r from-black to-transparent">
      <VideoBackground movieId={id} />

      <div className="relative z-10 p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-300">{overview}</p>
        <div className="mt-4">
          <button className="bg-white text-black px-4 py-2 rounded mr-2 hover:bg-gray-300 transition cursor-pointer">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition cursor-pointer">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;