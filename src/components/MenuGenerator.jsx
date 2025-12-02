import React from "react";

function MenuGenerator() {
  const dishes = [
    { id: 1, name: "Pizza", price: 10 },
    { id: 2, name: "Burger", price: 7 },
    { id: 3, name: "Pasta", price: 12 },
  ];

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      {dishes.map((dish) => (
        <div
          key={dish.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{dish.name}</h3>
          <p>Price: ${dish.price}</p>
          <button
            onClick={() => alert(`You ordered ${dish.name}`)}
            style={{ padding: "5px 10px", cursor: "pointer" }}
          >
            Order
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuGenerator;

