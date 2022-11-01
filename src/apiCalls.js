import axios from "axios";

const imdbAxios = axios.create({
  baseURL: "http://35.89.22.152:3006",
});

export const createUser = ({ age, name, email, password }) => {
  imdbAxios
    .post("/auth/signup", { age, name, email, password })
    .then((res) => res.data);
};

export const getCurrentUser = () => {
  imdbAxios.get("/user/currentuser").then((res) => res.data);
};

export const loginUser = ({ username, password }) => {
  imdbAxios.post("/auth/login", { username, password }).then((res) => res.data);
};

export default imdbAxios;
