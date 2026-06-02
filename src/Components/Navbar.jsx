import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#000",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        borderBottom: "1px solid #222",
      }}
    >
      <h1
        style={{
          color: "#f4b400",
          fontSize: "38px",
          fontWeight: "700",
          margin: 0,
        }}
      >
        TripNest
      </h1>

      <div>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#categories" style={linkStyle}>Categories</a>
        <a href="#contact" style={linkStyle}>Contact</a>

        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "30px",
  fontSize: "20px",
  fontWeight: "600",
};

const buttonStyle = {
  background: "#f4b400",
  border: "none",
  padding: "12px 28px",
  borderRadius: "30px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "18px",
};

export default Navbar;