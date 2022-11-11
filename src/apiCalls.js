import axios from "axios";

const imdbAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
  } else {
    return new Promise(() => {
      throw new Error("token error");
    }).catch((err) => console.error(err));
  }
};

export const loginUser = ({ username, password }) => {
  return imdbAxios.post("/auth/login", { username, password });
};

export const updateUserProfile = ({ name, password, age }) => {
  const token = window.localStorage.getItem("imdb_token");
  return imdbAxios.put(
    "/user",
    { name: name, password: password, age: Number(age) },
    { headers: { Authorization: `Bearer ${token}` } }
  );
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
