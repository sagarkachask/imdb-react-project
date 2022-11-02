import axios from "axios";

const imdbAxios = axios.create({
  baseURL: "http://34.208.44.89:3006",
});

export const createUser = ({ age, name, email, password }) => {
  imdbAxios
    .post("/auth/signup", { age, name, email, password })
    .then((res) => res.data);
};

export const getCurrentUser = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZ2FyLmthY2hhQG1sdmVkYS5jb20iLCJpYXQiOjE2NjczODYyNTZ9.mXNLTDcvosmompiKvaAl2lEfuVM_M0dWK6j5pL_K97M";
  imdbAxios
    .get("/user/currentuser", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

export const loginUser = ({ username, password }) => {
  imdbAxios.post("/auth/login", { username, password }).then((res) => res.data);
};

export const searchMovies = ({
  limit,
  sort = "genres",
  sortOrder = "asc",
  searchText = "",
  skip,
}) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhZ2FyLmthY2hhQG1sdmVkYS5jb20iLCJpYXQiOjE2NjczODYyNTZ9.mXNLTDcvosmompiKvaAl2lEfuVM_M0dWK6j5pL_K97M";
  const params = { sort: sort, sortOrder: sortOrder };
  if (limit) params["limit"] = limit;
  if (searchText) params["searchText"] = searchText;
  if (skip) params["skip"] = skip;
  imdbAxios
    .get("/movies", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

export default imdbAxios;
