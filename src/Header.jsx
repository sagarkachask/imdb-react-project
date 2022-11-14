import Gravatar from "react-gravatar";
import { NavLink } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import UserProfileContext from "./contexts";
import { useContext } from "react";
// import { Menu } from "antd";

export default function Header() {
  const [currentUser, ] = useContext(UserProfileContext)
  // const items = [
  //   { label: 'item 1', key: 'item-1' },
  //   { label: 'item 2', key: 'item-2' },
  // ];

  return (
    <>
      {/* <Menu defaultSelectedKeys={["item-1"]} items={items} /> */}
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
          {currentUser ? (
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
