import React, { useState } from "react";

function ShapeCycler() {
  const shapes = ["circle", "square", "triangle"];
  const [currentShape, setShape] = useState("circle");

  const handleClick = () => {
    const currentIndex = shapes.indexOf(currentShape);
    const nextIndex = (currentIndex + 1) % shapes.length;
    setShape(shapes[nextIndex]);
  };

  // Determine style based on current shape
  const getShapeStyle = () => {
    switch (currentShape) {
      case "circle":
        return {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "red",
          margin: "20px auto",
        };
      case "square":
        return {
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          margin: "20px auto",
        };
      case "triangle":
        return {
          width: 0,
          height: 0,
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderBottom: "100px solid green",
          margin: "20px auto",
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={getShapeStyle()}></div>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Next Shape
      </button>
      <p>Current Shape: {currentShape}</p>
    </div>
  );
}

export default ShapeCycler;
