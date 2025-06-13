import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
    console.log("VideoBackground component rendered with movieId:", movieId);
  const [trailerKey, setTrailerKey] = useState(null);
 

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
         API_OPTIONS
        );

        const data = await response.json();

        const trailer = data.results.find(
          (vid) =>
            vid.type === "Trailer" &&
            vid.site === "YouTube"
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };

    fetchTrailer();
  }, [movieId]);

  //get trailerKey from the global state
  // make hook for fetching trailer

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-0 overflow-hidden">
      <iframe
        className="w-screen h-screen object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&controls=0&playlist=${trailerKey}`}
        title="YouTube trailer"
        allow="autoplay; encrypted-media"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
};

export default VideoBackground;
