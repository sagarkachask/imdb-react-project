// import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { getCurrentUser } from "./apiCalls";
import "./App.css";
import Header from "./Header";
import LogIn from "./LogIn";
import Movies from "./Movies";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";

function App() {
  let currentUser = window.localStorage.getItem("imdb_user");
  if (currentUser) currentUser = JSON.parse(currentUser);
  // if (!currentUser) {
  //   getCurrentUser().then((res) => {
  //     currentUser = res.data;
  //     window.localStorage.setItem("imdb_user", JSON.stringify(currentUser));
  //   });
  // }

  return (
    <>
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
    </>
  );
}

export default App;
