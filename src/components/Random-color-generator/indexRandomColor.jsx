import { useState } from "react";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState(null);

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandom() {
    if (typeOfColor === null) return;

    if (typeOfColor === "hex") {
      let hexColor = "#";
      for (let i = 0; i <= 5; i++) {
        hexColor += hex[randomColor(hex.length)];
      }
      setColor(hexColor);
    } else {
      const r = randomColor(256);
      const g = randomColor(256);
      const b = randomColor(256);

      setColor(`RGB(${r},${g},${b})`);
    }
  }

  function displayColor() {
    if (typeOfColor === "rgb") return "RGB Color";
    if (typeOfColor === "hex") return "Hex color";

    return "";
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandom}>Generate Random Color</button>

      <div>
        <p>{displayColor()}</p>
        <p>{color}</p>
      </div>
    </div>
  );
}
