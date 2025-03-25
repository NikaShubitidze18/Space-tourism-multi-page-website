import "./technology.css"; 
import { useState } from "react";

const technologyData = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond.",
    image: "src/components/technology/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    id: 2,
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching or receiving spacecraft. Our spaceport is based in a remote location for safety and efficiency.",
    image: "src/components/technology/technology/image-space-capsule-portrait.jpg",
  },
  {
    id: 3,
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere safely.",
    image: "src/components/technology/technology/image-spaceport-portrait.jpg",
  },
];

export default function Technology() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className="technology-container">
        <div className="technology-content">
          {/* ღილაკები (მარცხნივ) */}
          <div className="technology-buttons">
            {technologyData.map((item, index) => (
              <button
                key={item.id}
                className={`technology-button ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {item.id}
              </button>
            ))}
          </div>
  
          {/* ტექსტი (title, description) მარჯვნივ */}
          <div className="technology-text">
            <h3 className="technology-subtitle">SPACE LAUNCH 101</h3>
            <h2 className="technology-title">{technologyData[activeIndex].title}</h2>
            <p className="technology-description">{technologyData[activeIndex].description}</p>
          </div>
        </div>
  
        {/* სურათი */}
        <div className="technology-image-container">
          <img
            src={technologyData[activeIndex].image}
            alt={technologyData[activeIndex].title}
            className="technology-image"
          />
        </div>
      </div>
    );
  }
  