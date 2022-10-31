import { FaImdb } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="card mx-auto shadow p-3 mb-5 bg-body rounded"
      style={{ width: "30%" }}
    >
      <form>
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
