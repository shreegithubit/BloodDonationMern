import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Home from "./Component/home";
import Doner from "./Component/Doner";
import DonerList from "./Component/DonerList";
import Footer from "./Component/Footer";
import LoginComponent from "./Component/loginComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUpComponent from "./Component/signUPComponent";
function App() {
  const [logedInUser, setLogedInUser] = useState(false);
  const handleloggedIn = () => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState("", "", "/login");
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginComponent setLogedInUser={setLogedInUser} />}
        />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    );
  };
  return (
    <>
      <Router>
        {!logedInUser ? (
          handleloggedIn()
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Doner" element={<Doner />} />
              <Route path="/DonerList" element={<DonerList />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
