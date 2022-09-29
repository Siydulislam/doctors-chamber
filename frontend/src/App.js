import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./pages/shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
