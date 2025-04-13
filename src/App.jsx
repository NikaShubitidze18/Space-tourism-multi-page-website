// App.jsx – აღარ გვჭირდება <Router>
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Navbar from "./components/navbar/Navbar";
import Technology from "./components/technology/technology";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
