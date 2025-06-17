import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-3xl font-semibold mb-2 px-4">{title}</h2>
      <div className="flex overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
