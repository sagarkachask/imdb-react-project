import { useState } from "react";

export default function SearchBar({ fetching, onChange }) {
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("genres");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const [skip, setSkip] = useState(0);

  const searchMoviesSubmit = (e) => {
    e.preventDefault();
    onChange({ limit, sort, sortOrder, searchText, skip });
  };

  return (
    <>
      <form
        id="searchBar"
        className="d-flex px-5 pb-5"
        onSubmit={searchMoviesSubmit}
      >
        <div className="d-flex flex-column me-3" style={{ width: "40%" }}>
          <label>Search Something</label>
          <input
            disabled={fetching}
            autoComplete="off"
            className="form-control"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column me-3" style={{ width: "20%" }}>
          <label>Select a Sort Parameter</label>
          <select
            disabled={fetching}
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="genres">genres</option>
            <option value="cast">cast</option>
            <option value="title">title</option>
            <option value="year">year</option>
            <option value="imdb.rating">imdb rating</option>
          </select>
        </div>
        <div className="d-flex flex-column me-3" style={{ width: "20%" }}>
          <label>Select a Sort Order</label>
          <select
            disabled={fetching}
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
            disabled={fetching}
            className="form-control"
            type="number"
            min="0"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column me-3" style={{ width: "5%" }}>
          <label>Skip</label>
          <input
            disabled={fetching}
            className="form-control"
            type="number"
            min="0"
            value={skip}
            onChange={(e) => setSkip(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark align-self-end"
          disabled={fetching}
        >
          Search
        </button>
      </form>
    </>
  );
}
