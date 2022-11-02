import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import LogIn from "./LogIn";
import Movies from "./Movies";
import SignUp from "./SignUp";
// import SignUp from "./SignUp";

function App() {
  return (
    <>
      {/* <LogIn /> */}
      {/* <SignUp /> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" end element={<h2>Home Page!</h2>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<h2>Oops! Page not found. Maybe check the URL?</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
