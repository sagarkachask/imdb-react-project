import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import LogIn from "./LogIn";
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
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
