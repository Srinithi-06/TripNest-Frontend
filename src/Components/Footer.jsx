import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "white",
        padding: "40px",
        textAlign: "center",
        borderTop: "1px solid #222",
      }}
    >
      <h2
        style={{
          color: "#f4b400",
        }}
      >
        TripNest
      </h2>

      <p>
        Explore the world with comfort,
        safety and unforgettable experiences.
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#999",
        }}
      >
        © 2026 TripNest | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;