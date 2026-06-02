import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../Assets/Images/dashboard-bg.jpeg";

function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 8%",
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "70px",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "30px",
          }}
        >
          Explore The World
          <br />
          With
          <span style={{ color: "#f4b400" }}>
            {" "}
            TripNest
          </span>
        </h1>

        <p
          style={{
            color: "#d1d1d1",
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Discover beautiful destinations, luxury tours,
          customized travel experiences and unforgettable
          adventures around the globe.
        </p>

        <Link to="/login">
          <button
            style={{
              background: "#f4b400",
              color: "#000",
              border: "none",
              padding: "18px 40px",
              borderRadius: "40px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            EXPLORE TOURS
          </button>
        </Link>
      </div>

      <div
        style={{
          width: "50%",
          textAlign: "center",
        }}
      >
        <img
          src={heroImage}
          alt="Travel"
          style={{
            width: "90%",
            borderRadius: "25px",
            boxShadow:
              "0 0 35px rgba(244,180,0,0.35)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;