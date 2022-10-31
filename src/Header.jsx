import Gravatar from "react-gravatar";
import { NavLink } from "react-router-dom";
import { FaImdb } from "react-icons/fa";

export default function Header() {
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
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/actors">
                Actors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/actresses">
                Actresses
              </NavLink>
            </li> */}
          </ul>
          <div
            style={{ overflow: "hidden" }}
            className="bg-info rounded-circle me-3"
          >
            <NavLink className="nav-link" to="/login">
              <Gravatar
                style={{ width: "2rem", height: "2rem" }}
                title="Sagar Kacha"
                email="sagar.kacha@mlveda.com"
              />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
