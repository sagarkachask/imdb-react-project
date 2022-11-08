import { FaImdb } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "./apiCalls";

export default function LogIn() {
  const navigate = useNavigate();

  const logInSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("loginName").value;
    const password = document.getElementById("loginPassword").value;
    loginUser({ username, password }).then((res) => {
      window.localStorage.setItem("imdb_token", res.data.token);
      window.localStorage.setItem("imdb_user", JSON.stringify(res.data.user));
      navigate("/movies");
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
          <input type="email" id="loginName" className="form-control" />
        </div>

        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <input type="password" id="loginPassword" className="form-control" />
        </div>

        {/* <div className="row mb-4 w-75 mx-auto">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="loginCheck">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div> */}

        <button
          type="submit"
          className="btn btn-outline-dark mb-4 d-flex flex-column mx-auto"
        >
          Log in
        </button>

        <div className="text-center">
          <p>
            Not a member? <NavLink to="/signup">Sign Up</NavLink>
            {/* <a href="#!">Register</a> */}
          </p>
        </div>
      </form>
    </div>
  );
}
