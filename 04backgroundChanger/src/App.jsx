import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <div className="button-container">
        {/* Red */}
        <button onClick={() => setColor("red")} className="button red">
          Red
        </button>
        {/* Green */}
        <button onClick={() => setColor("green")} className="button green">
          Green
        </button>
        {/* Blue */}
        <button onClick={() => setColor("blue")} className="button blue">
          Blue
        </button>
        {/* Yellow */}
        <button onClick={() => setColor("yellow")} className="button yellow">
          Yellow
        </button>
        {/* White */}
        <button onClick={() => setColor("white")} className="button white">
          White
        </button>
        {/* Black */}
        <button onClick={() => setColor("black")} className="button black">
          Black
        </button>
        {/* Pink */}
        <button onClick={() => setColor("pink")} className="button pink">
          Pink
        </button>
        {/* Violet */}
        <button onClick={() => setColor("violet")} className="button violet">
          Violet
        </button>
        {/* Brown */}
        <button onClick={() => setColor("brown")} className="button brown">
          Brown
        </button>
        {/* Grey */}
        <button onClick={() => setColor("grey")} className="button grey">
          Grey
        </button>
      </div>
    </div>
  );
}

export default App;
