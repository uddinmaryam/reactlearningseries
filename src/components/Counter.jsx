//state is a way to store and manage data in a component
//useState is a React hook that allows functional components to have state
//When state changes, the component re-renders to reflect the new state
//In this Counter component, we use state to keep track of the count value


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial count = 0

  // Functions to update state
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increase} style={{ marginRight: "10px" }}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
