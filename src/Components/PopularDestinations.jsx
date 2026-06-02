import React from "react";

import paris from "../Assets/Images/paris.webp";
import bali from "../Assets/Images/bali.webp";
import dubai from "../Assets/Images/dubai.webp";
import switzerland from "../Assets/Images/switzerland.webp";

function PopularDestinations() {
  const places = [
    {
      name: "Paris",
      image: paris,
    },
    {
      name: "Bali",
      image: bali,
    },
    {
      name: "Dubai",
      image: dubai,
    },
    {
      name: "Switzerland",
      image: switzerland,
    },
  ];

  return (
    <section
      style={{
        background: "#000",
        padding: "100px 8%",
      }}
    >
      <h2
        style={{
          color: "#f4b400",
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "60px",
        }}
      >
        Popular Destinations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {places.map((place) => (
          <div
            key={place.name}
            style={{
              background: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "0.4s",
            }}
          >
            <img
              src={place.image}
              alt={place.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
                textAlign: "center",
                color: "white",
              }}
            >
              <h3>{place.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;