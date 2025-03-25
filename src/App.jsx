import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/crew"; // Crew import
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} /> {/* Crew Route */}
      </Routes>
    </Router>
  );
}

export default App;
