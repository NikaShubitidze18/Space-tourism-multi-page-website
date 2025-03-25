import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew"; // Fixed Crew import (capital C)
import Navbar from "./components/navbar/Navbar";
import Technology from "./components/technology/technology";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} /> {/* Crew Route */}
        <Route path="/technology" element={<Technology />} /> {/* Technology Route */}
      </Routes>
    </Router>
  );
}

export default App;
