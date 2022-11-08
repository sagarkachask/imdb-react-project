import axios from "axios";

const imdbAxios = axios.create({
  baseURL: "http://34.208.44.89:3006",
});

export const createUser = ({ age, name, email, password }) => {
  return imdbAxios.post("/auth/signup", { age, name, email, password });
};

export const getCurrentUser = () => {
  let token = window.localStorage.getItem("imdb_token");
  if (token) {
    return imdbAxios.get("/user/currentuser", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};

export const loginUser = ({ username, password }) => {
  return imdbAxios.post("/auth/login", { username, password });
};

export const searchMovies = ({
  limit,
  sort = "genres",
  sortOrder = "asc",
  searchText = "",
  skip,
}) => {
  const token = window.localStorage.getItem("imdb_token");
  const params = { sort: sort, sortOrder: sortOrder };
  if (limit > 0) params["limit"] = limit;
  if (searchText) params["searchText"] = searchText;
  if (skip > 0) params["skip"] = skip;
  return imdbAxios.get("/movies", {
    params,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default imdbAxios;
