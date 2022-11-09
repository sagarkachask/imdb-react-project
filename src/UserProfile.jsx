import { useNavigate } from "react-router-dom";
import { RiEdit2Line } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import ReactTooltip from "react-tooltip";
import { useContext } from "react";
import UserProfileContext from "./contexts";

export default function UserProfile() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useContext(UserProfileContext);

  const logoutUser = () => {
    window.localStorage.removeItem("imdb_token");
    window.localStorage.removeItem("imdb_user");
    setCurrentUser(null)
    navigate("/login");
  };

  return (
    <div id="profile" className="d-flex flex-column p-5">
      <div className="d-flex flex-row m-3 align-items-center">
        <label className="fw-bold me-2">Name: </label>
        <div className="me-2">{currentUser?.name}</div>
        <button className="btn btn-outline-dark btn-sm">
          <RiEdit2Line />
        </button>
      </div>
      <div className="d-flex flex-row m-3 align-items-center">
        <label className="fw-bold me-2">Age: </label>
        <div className="me-2">{currentUser?.age}</div>
        <button className="btn btn-outline-dark btn-sm">
          <RiEdit2Line />
        </button>
      </div>
      <div className="d-flex flex-row m-3 align-items-center">
        <label className="fw-bold me-2">Email: </label>
        <div className="me-2">{currentUser?.email}</div>
        <HiOutlineInformationCircle data-tip data-for="userEmail" />
        <ReactTooltip id="userEmail" place="top">
          Cannot change email id
        </ReactTooltip>
      </div>
      <div className="d-flex flex-row m-3 align-items-center">
        <label className="fw-bold me-2">Password: </label>
        <div>{currentUser?.password}</div>
      </div>
      <button
        className="btn btn-outline-dark m-3"
        style={{ width: "6%" }}
        onClick={logoutUser}
      >
        Log Out
      </button>
    </div>
  );
}
