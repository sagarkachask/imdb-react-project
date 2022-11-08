import MovieCard from "./MovieCard";

export default function SearchResultMovies({ movies }) {
  return (
    <div className="d-flex justify-content-between px-5 card-group">
      {movies?.map((movie) => (
        <div key={movie._id} className="m-3">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
