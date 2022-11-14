import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UserProfileContext from "./contexts";
import Header from "./Header";
import LogIn from "./LogIn";
import Movies from "./Movies";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";
import 'antd/dist/antd.css';

function App() {
  let [currentUser, setCurrentUser] = useState(null);
  if (!currentUser && window.localStorage.getItem("imdb_user")) {
    setCurrentUser(JSON.parse(window.localStorage.getItem("imdb_user")));
  }

  return (
    <>
      <UserProfileContext.Provider value={[currentUser, setCurrentUser]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" end element={<h2>Home Page!</h2>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route
              path="/movies"
              element={currentUser ? <Movies /> : <Navigate to="/login" />}
            />
            <Route
              path="*"
              element={<h2>Oops! Page not found. Maybe check the URL?</h2>}
            />
          </Routes>
        </BrowserRouter>
      </UserProfileContext.Provider>
    </>
  );
}

export default App;
