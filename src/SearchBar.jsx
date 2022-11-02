import { useState } from "react";
import { searchMovies } from "./apiCalls";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [limitValue, setLimitValue] = useState(10);
  const [skipValue, setSkipValue] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sort, setSort] = useState("genres");

  const searchMoviesSubmit = (e) => {
    e.preventDefault();
    const movies = searchMovies({
      limit: limitValue,
      sort: sort,
      sortOrder: sortOrder,
      searchText: searchText,
      skip: skipValue,
    });
    console.log(movies);
  };

  return (
    <form id="searchBar" className="d-flex px-5" onSubmit={searchMoviesSubmit}>
      <div className="d-flex flex-column me-3" style={{ width: "40%" }}>
        <label>Search Something</label>
        <input
          autoComplete="off"
          className="form-control"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="d-flex flex-column me-3" style={{ width: "20%" }}>
        <label>Select a Sort Parameter</label>
        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="genres">genres</option>
          <option value="cast">cast</option>
          <option value="title">title</option>
          <option value="year">year</option>
          <option value="rating">rating</option>
        </select>
      </div>
      <div className="d-flex flex-column me-3" style={{ width: "20%" }}>
        <label>Select a Sort Order</label>
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="d-flex flex-column me-3" style={{ width: "5%" }}>
        <label>Limit</label>
        <input
          className="form-control"
          type="number"
          min="0"
          value={limitValue}
          onChange={(e) => setLimitValue(e.target.value)}
        />
      </div>
      <div className="d-flex flex-column me-3" style={{ width: "5%" }}>
        <label>Skip</label>
        <input
          className="form-control"
          type="number"
          min="0"
          value={skipValue}
          onChange={(e) => setSkipValue(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-outline-dark align-self-end">
        Search
      </button>
    </form>
  );
}
