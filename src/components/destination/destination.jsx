import React, { useState } from "react";
import "./Destination.css";

const destinations = {
  moon: {
    name: "Moon",
    imageFront: "src/components/destination/destination/image-moon.png",
    imageBack: "src/components/destination/destination/image-moon.webp",
    description: "Experience the tranquility of our closest celestial neighbor.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  mars: {
    name: "Mars",
    imageFront: "src/components/destination/destination/image-mars.png",
    imageBack: "src/components/destination/destination/image-mars.webp",
    description: "Explore the red planet and its towering volcanoes.",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  europa: {
    name: "Europa",
    imageFront: "src/components/destination/destination/image-europa.png",
    imageBack: "src/components/destination/destination/image-europa.webp",
    description: "The smallest of Jupiter’s four Galilean moons, Europa is a world of ice and ocean.",
    distance: "628 MIL. KM",
    travelTime: "6 YEARS",
  },
  titan: {
    name: "Titan",
    imageFront: "src/components/destination/destination/image-titan.png",
    imageBack: "src/components/destination/destination/image-titan.webp",
    description: "Saturn’s largest moon offers lakes of liquid methane and a thick atmosphere.",
    distance: "1.2 BIL. KM",
    travelTime: "7 YEARS",
  },
};

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("moon");
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="destination-container">
      {/* Image Flip Container */}
      <div 
        className={`image-container ${flipped ? "flipped" : ""}`} 
        onClick={() => setFlipped(!flipped)}
      >
        <img className="front" src={destinations[selectedPlanet].imageFront} alt={destinations[selectedPlanet].name} />
        <img className="back" src={destinations[selectedPlanet].imageBack} alt={destinations[selectedPlanet].name} />
      </div>

      <div className="content">
        <h2>Pick Your Destination</h2>
        <div className="tabs">
          {Object.keys(destinations).map((planet) => (
            <button
              key={planet}
              className={selectedPlanet === planet ? "active" : ""}
              onClick={() => {
                setSelectedPlanet(planet);
                setFlipped(false);
              }}
            >
              {destinations[planet].name}
            </button>
          ))}
        </div>

        <h1>{destinations[selectedPlanet].name}</h1>
        <p>{destinations[selectedPlanet].description}</p>
        
        <div className="details">
          <span><strong>AVG. DISTANCE:</strong> {destinations[selectedPlanet].distance}</span>
          <span><strong>EST. TRAVEL TIME:</strong> {destinations[selectedPlanet].travelTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Destination;
