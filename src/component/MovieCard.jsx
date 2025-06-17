const MovieCard = ({ movie }) => {
  return (
    <div className="min-w-[160px] md:min-w-[250px] transition-transform hover:scale-120 p-4">
      <img
        className="w-full rounded"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
