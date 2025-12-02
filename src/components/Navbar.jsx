import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#282c34",
      color: "white"
    }}>
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        MyLogo
      </div>

      {/* Links as buttons */}
      <div>
        <button 
          onClick={() => console.log("Home clicked")}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "16px",
            textDecoration: "underline"
          }}
        >
          Home
        </button>

        <button 
          onClick={() => console.log("About clicked")}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "16px",
            textDecoration: "underline"
          }}
        >
          About
        </button>

        <button 
          onClick={() => console.log("Contact clicked")}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            margin: "0 10px",
            fontSize: "16px",
            textDecoration: "underline"
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
