import Gravatar from "react-gravatar";
import { NavLink } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { getCurrentUser } from "./apiCalls";
import { BiLoaderCircle } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  let { data: currentUser, isLoading } = useQuery(["currentUser"], () => {
    const currentUserData = getCurrentUser();
    return currentUserData.then((res) => res.data);
  });
  // const isLoading = false
  // let currentUser = window.localStorage.getItem("imdb_user");
  // if (currentUser) currentUser = JSON.parse(currentUser);
  // if (!currentUser) {
  //   getCurrentUser().then((res) => {
  //     currentUser = res.data;
  //     window.localStorage.setItem("imdb_user", JSON.stringify(currentUser));
  //   });
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <NavLink className="navbar-brand fs-2 ms-3" to="/" end>
          <FaImdb />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
          {isLoading ? (
            <BiLoaderCircle style={{ color: "white" }} />
          ) : currentUser ? (
            <div
              style={{ overflow: "hidden" }}
              className="bg-info rounded-circle me-3"
            >
              <NavLink className="nav-link" to="/profile">
                <Gravatar
                  style={{ width: "2rem", height: "2rem" }}
                  title={currentUser?.name}
                  email={currentUser?.email}
                />
              </NavLink>
            </div>
          ) : (
            <div style={{ overflow: "hidden" }} className="me-3">
              <button type="button" className="btn btn-outline-light">
                <NavLink
                  to="/login"
                  style={{ color: "unset", textDecoration: "unset" }}
                >
                  Log In
                </NavLink>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
