import { useNavigate } from "react-router-dom";
import { RiEdit2Line } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import ReactTooltip from "react-tooltip";
import { useContext, useState } from "react";
import UserProfileContext from "./contexts";
import { TiTick } from "react-icons/ti";
import { updateUserProfile } from "./apiCalls";

export default function UserProfile() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useContext(UserProfileContext);
  const [userName, setUserName] = useState(currentUser?.name);
  const [userAge, setUserAge] = useState(currentUser?.age);
  const [editUserName, setEditUserName] = useState(false);
  const [editUserAge, setEditUserAge] = useState(false);

  const logoutUser = () => {
    window.localStorage.removeItem("imdb_token");
    window.localStorage.removeItem("imdb_user");
    setCurrentUser(null);
    navigate("/login");
  };

  const updateUserData = () => {
    const password = "himalaya";
    updateUserProfile({ name: userName, password, age: userAge }).then(
      (res) => {
        window.localStorage.setItem("imdb_user", JSON.stringify(res.data));
        setCurrentUser(res.data);
        setEditUserName(false);
        setEditUserAge(false);
      }
    );
  };

  return (
    <div id="profile" className="d-flex flex-column p-5">
      <div className="d-flex flex-row m-3 align-items-center">
        <label className="fw-bold me-2">Name: </label>
        {editUserName ? (
          <>
            <input
              className="form-control-sm me-2 w-25"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={updateUserData}
            >
              <TiTick />
            </button>
          </>
        ) : (
          <>
            <div className="me-2">{currentUser?.name}</div>
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => setEditUserName(true)}
            >
              <RiEdit2Line />
            </button>
          </>
        )}
      </div>
      <div className="d-flex flex-row m-3 align-items-center">
        <label className="fw-bold me-2">Age: </label>
        {editUserAge ? (
          <>
            <input
              className="form-control-sm me-2"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
              style={{ width: "4%" }}
              type="number"
              min="1"
            />
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={updateUserData}
            >
              <TiTick />
            </button>
          </>
        ) : (
          <>
            <div className="me-2">{currentUser?.age}</div>
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => setEditUserAge(true)}
            >
              <RiEdit2Line />
            </button>
          </>
        )}
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
