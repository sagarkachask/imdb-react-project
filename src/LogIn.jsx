import { useContext, useState } from "react";
import { FaImdb } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "./apiCalls";
import UserProfileContext from "./contexts";

export default function LogIn() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  let [, setCurrentUser] = useContext(UserProfileContext);

  const logInSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("loginName").value;
    const password = document.getElementById("loginPassword").value;
    loginUser({ username, password })
      .then((res) => {
        window.localStorage.setItem("imdb_token", res.data.token);
        window.localStorage.setItem("imdb_user", JSON.stringify(res.data.user));
        setCurrentUser(res.data.user);
        navigate("/movies");
      })
      .catch((err) => {
        setLoginError(true);
        console.error(err);
      });
  };

  return (
    <div
      className="card mx-auto shadow p-3 mb-5 bg-body rounded"
      style={{ width: "30%" }}
    >
      <form onSubmit={logInSubmit}>
        <div className="mb-4 d-flex w-75 mx-auto justify-content-center fs-1">
          <FaImdb />
        </div>
        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="loginName">
            Email
          </label>
          <input
            type="email"
            id="loginName"
            className="form-control"
            onFocus={() => setLoginError(false)}
          />
        </div>

        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            onFocus={() => setLoginError(false)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark mb-4 d-flex flex-column mx-auto"
        >
          Log in
        </button>
        {loginError && (
          <p
            className="loginError d-flex flex-column align-items-center"
            style={{ fontSize: "0.75rem", color: "red" }}
          >
            Oops! Something went wrong. Maybe try again?
          </p>
        )}
        <div className="text-center">
          <p>
            Not a member? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
