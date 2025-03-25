import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home"; // Ensure capitalization matches the file
import Navbar from "./components/navbar/Navbar"; // Correct relative path

function App() {
  return (
    <Router>
      <Navbar /> {/* Now it's correctly imported */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Make sure it's Home with the correct case */}
      </Routes>
    </Router>
  );
}

export default App;
