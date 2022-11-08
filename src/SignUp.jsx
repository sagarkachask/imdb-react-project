import { FaImdb } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { createUser } from "./apiCalls";

export default function SignUp() {
  const navigate = useNavigate();

  const signUpSubmit = (e) => {
    e.preventDefault();
    let userName = document.getElementById("userName").value;
    let userAge = Number(document.getElementById("userAge").value);
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    if (userName && userAge && userEmail && userPassword) {
      createUser({
        age: userAge,
        name: userName,
        email: userEmail,
        password: userPassword,
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div
      className="card mx-auto shadow p-3 mb-5 bg-body rounded"
      style={{ width: "30%" }}
    >
      <form id="signup" onSubmit={signUpSubmit}>
        <div className="mb-4 d-flex w-75 mx-auto justify-content-center fs-1">
          <FaImdb />
        </div>
        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="userName">
            Name
          </label>
          <input id="userName" className="form-control" />
        </div>
        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="userAge">
            Age
          </label>
          <input id="userAge" className="form-control" />
        </div>
        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="userEmail">
            Email
          </label>
          <input type="email" id="userEmail" className="form-control" />
        </div>

        <div className="form-outline mb-4 d-flex flex-column w-75 mx-auto">
          <label className="form-label" htmlFor="userPassword">
            Password
          </label>
          <input type="password" id="userPassword" className="form-control" />
        </div>

        <button
          type="submit"
          className="btn btn-outline-dark mb-4 d-flex flex-column mx-auto"
        >
          Sign Up
        </button>

        <div className="text-center">
          <p>
            Already a member? <NavLink to="/login">Log In</NavLink>
            {/* <a href="#!">Log In</a> */}
          </p>
        </div>
      </form>
    </div>
  );
}
