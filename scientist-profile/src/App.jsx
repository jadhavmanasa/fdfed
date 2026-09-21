import { useState } from "react";
import Scientist from "./Scientist";
import "./App.css";

function App() {
  const [selectedScientist, setSelectedScientist] = useState(null);

  const scientists = [
    {
      name: "Albert Einstein",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      description:
        "Albert Einstein was a German-born physicist famous for the theory of relativity and his equation E = mc²."
    },
    {
      name: "Marie Curie",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
      description:
        "Marie Curie was a physicist and chemist known for her research on radioactivity. She won Nobel Prizes in Physics and Chemistry."
    },
    {
      name: "Isaac Newton",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Sir_Isaac_Newton_by_Sir_Godfrey_Kneller%2C_Bt.jpg",
      description:
        "Isaac Newton was an English mathematician and physicist who developed the laws of motion and universal gravitation."
    }
  ];

  return (
    <div className="app">
      <h1>Scientist Profiles</h1>

      <div className="buttons">
        {scientists.map((scientist) => (
          <button
            key={scientist.name}
            onClick={() => setSelectedScientist(scientist)}
          >
            {scientist.name}
          </button>
        ))}
      </div>

      {selectedScientist && (
        <Scientist
          name={selectedScientist.name}
          image={selectedScientist.image}
          description={selectedScientist.description}
        />
      )}
    </div>
  );
}

export default App;