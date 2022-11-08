import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./apiCalls";
import { RiEdit2Line } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import ReactTooltip from "react-tooltip";

export default function UserProfile() {
  const navigate = useNavigate();

  let currentUser = window.localStorage.getItem("imdb_user");
  if (currentUser) currentUser = JSON.parse(currentUser);
  if (!currentUser) {
    getCurrentUser().then((res) => {
      currentUser = res.data;
      window.localStorage.setItem("imdb_user", JSON.stringify(currentUser));
    });
  }

  const logoutUser = () => {
    window.localStorage.removeItem("imdb_token");
    window.localStorage.removeItem("imdb_user");
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
