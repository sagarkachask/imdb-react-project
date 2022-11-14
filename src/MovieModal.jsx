import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";

ReactModal.setAppElement(document.getElementById("root"));

export default function MovieModal({ modalIsOpen, setIsOpen, movie }) {
  const date = movie?.released ? new Date(movie.released) : null;
  const released = date
    ? date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    : "NA";

  return (
    <>
      <ReactModal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="d-flex justify-content-between mx-3 mb-3">
          <h3>{movie.title}</h3>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => setIsOpen(false)}
            style={{ height: "fit-content" }}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="d-flex mx-3">
          <img
            src={movie.poster}
            alt={movie.title}
            className="card-img-top me-3"
            style={{ width: "unset", height: "500px", lineHeight: "500px" }}
          />
          <div className="d-flex flex-column">
            <div className="fs-6 my-1">
              <p>{movie.plot}</p>
            </div>
            <div className="my-1">Released Date: {released}</div>
            <div className="my-1">
              Runtime: {movie?.runtime + " mins" || "NA"}
            </div>
            <div className="my-1">
              IMDb Rating: {movie?.imdb?.rating || "NA"}
            </div>
            <div className="my-1">
              Tomato User: {movie?.tomatoes?.viewer?.meter || "NA"}
            </div>
            <div className="my-1 d-flex flex-row">
              <p className="me-2">Cast:</p>
              <div className="d-flex flex-column">
                {movie?.cast.map?.((cast) => (
                  <li key={movie.cast.indexOf(cast)}>{cast}</li>
                ))}
              </div>
            </div>
            <div className="my-1 d-flex flex-row">
              <p className="me-2">Writers:</p>
              <div className="d-flex flex-column">
                {movie?.writers.map?.((writer) => (
                  <li key={movie.writers.indexOf(writer)}>{writer}</li>
                ))}
              </div>
            </div>
            <div className="my-1 d-flex flex-row">
              <p className="me-2">Genres:</p>
              <div className="d-flex flex-column">
                {movie?.genres.map?.((genre) => (
                  <li key={movie.genres.indexOf(genre)}>{genre}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
