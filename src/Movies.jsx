import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { searchMovies } from "./apiCalls";
import SearchBar from "./SearchBar";
import SearchResultMovies from "./SearchResultMovies";

export default function Movies() {
  const [filters, setFilters] = useState({});

  const { data: movies, isFetching } = useQuery(
    ["movies", filters],
    searchMovies,
    {
      useErrorBoundary: true,
      suspense: true,
      staleTime: Infinity,
      keepPreviousData: true,
    }
  );
  return (
    <>
      <SearchBar
        fetching={isFetching}
        onChange={(filters) => {
          setFilters(filters);
        }}
      />
      {isFetching ? <BiLoaderCircle /> : <SearchResultMovies movies={movies} />}
    </>
  );
}
