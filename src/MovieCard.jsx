import { useState } from "react";
import MovieModal from "./MovieModal";

export default function MovieCard({ movie }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="movieCard"
        className="card shadow rounded"
        style={{ width: "20rem" }}
      >
        <div id="moviePoster" className="d-flex justify-content-center">
          <img
            src={movie.poster}
            alt={movie.title}
            className="card-img-top"
            style={{ width: "unset", height: "300px", lineHeight: "300px" }}
          />
        </div>
        <div id="movieName" className="card-header text-truncate fw-bold">
          <button className="btn btn-link" onClick={() => setIsOpen(true)}>
            {movie.title}
          </button>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-truncate">
            Plot: {movie?.plot || "NA"}
          </li>
          <li className="list-group-item">Runtime: {movie?.runtime || "NA"}</li>
          <li className="list-group-item">Year: {movie?.year || "NA"}</li>
          <li className="list-group-item">
            Rating: {movie?.imdb?.rating || "NA"}
          </li>
          <li className="list-group-item">
            Tomato Meter: {movie?.tomatoes?.viewer?.meter || "NA"}
          </li>
        </ul>
      </div>
      <MovieModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        movie={movie}
      />
    </>
  );
}
