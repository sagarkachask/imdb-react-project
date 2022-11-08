export default function MovieCard({ movie }) {
  return (
    <div id="movieCard" className="card" style={{ width: "20rem" }}>
      <div id="moviePoster">
        <img src={movie.poster} alt={movie.title} className="card-img-top" />
      </div>
      <div id="movieName" className="card-header">
        {movie.title}
      </div>
      <ul className="list-group list-group-flush">
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
  );
}
