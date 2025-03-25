import { useState } from "react";
import "./crew.css";
const crewMembers = [
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first self-funded woman to fly to the ISS and the first Iranian in space.",
    image: "src/components/crew/crew/image-anousheh-ansari.png",
  },
  {
    name: "Douglas Hurley",
    role: "Mission Specialist",
    description:
      "Douglas Hurley is a retired NASA astronaut and a former Marine Corps test pilot. He was part of the first crewed SpaceX mission to the ISS.",
    image: "src/components/crew/crew/image-douglas-hurley.png",
  },
  {
    name: "Mark Shuttleworth",
    role: "Space Tourist",
    description:
      "Mark Shuttleworth is a South African entrepreneur and the second self-funded space tourist. He flew to the ISS aboard a Russian Soyuz spacecraft.",
    image: "src/components/crew/crew/image-mark-shuttleworth.png",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    description:
      "Victor Glover is a NASA astronaut and a U.S. Navy pilot. He was part of NASA’s SpaceX Crew-1 mission, spending months aboard the ISS.",
    image: "src/components/crew/crew/image-victor-glover.png",
  },
];

export default function Crew() {
  const [index, setIndex] = useState(0);

  return (
    <div className="crew-container">
      <div className="crew-content">
        <h2 className="crew-title">MEET YOUR CREW</h2>
        <h1 className="crew-name">{crewMembers[index].name}</h1>
        <h3 className="crew-role">{crewMembers[index].role}</h3>
        <p className="crew-description">{crewMembers[index].description}</p>
        <div className="crew-buttons">
          {crewMembers.map((_, i) => (
            <button
              key={i}
              className={`crew-button ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
</div>
<div>
        <img
          src={crewMembers[index].image}
          alt={crewMembers[index].name}
          className="crew-image"
        />
</div>
        
      </div>
   
  );
}
