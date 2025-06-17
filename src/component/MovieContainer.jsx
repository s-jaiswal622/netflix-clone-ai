import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieContainer = () => {
  const movies = useSelector((state) => state.movies);
  console.log("movies", movies);

  return (
    <div className="bg-black text-white">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
    </div>
  );
};

export default MovieContainer;
