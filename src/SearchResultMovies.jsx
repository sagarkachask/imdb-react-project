import { useState } from "react";
import MovieCard from "./MovieCard";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function SearchResultMovies({ movies }) {
  const [showMovies, setShowMovies] = useState(movies.slice(0, 4));
  const [pageNumber, setPageNumber] = useState(1);

  const previousMovies = () => {
    setShowMovies(movies.slice((pageNumber - 2) * 4, (pageNumber - 1) * 4));
    setPageNumber(pageNumber - 1);
  };

  const nextMovies = () => {
    setShowMovies(movies.slice(pageNumber * 4, (pageNumber + 1) * 4));
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <div className="d-flex justify-content-evenly px-5 card-group">
        {showMovies.map?.((movie) => (
          <div key={movie._id} className="m-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-primary m-2"
          disabled={pageNumber === 1}
          onClick={previousMovies}
        >
          <FcPrevious />
        </button>
        <button
          className="btn btn-outline-primary m-2"
          disabled={pageNumber === Math.ceil(movies.length / 4)}
          onClick={nextMovies}
        >
          <FcNext />
        </button>
      </div>
    </>
  );
}
