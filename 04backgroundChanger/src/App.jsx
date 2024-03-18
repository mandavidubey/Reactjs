import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {[
            "red",
            "green",
            "blue",
            "white",
            "yellow",
            "black",
            "purple",
            "grey",
            "pink",
            "orange",
          ].map((btnColor) => (
            <button
              key={btnColor}
              onClick={() => handleColorChange(btnColor)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: btnColor ,
              color: btnColor === "white" || btnColor === "yellow" ? "#000000" : "#ffffff"
            }}
            >
              {btnColor.charAt(0).toUpperCase() + btnColor.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
