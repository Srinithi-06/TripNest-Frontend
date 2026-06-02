import React from "react";

function About() {
  const features = [
    "Best Price Guarantee",
    "24/7 Customer Support",
    "Safe & Secure Travel",
    "Customized Packages",
  ];

  return (
    <section
      id="about"
      style={{
        background: "#111",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <h2
        style={{
          color: "#f4b400",
          textAlign: "center",
          fontSize: "45px",
        }}
      >
        Why Choose TripNest?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginTop: "50px",
        }}
      >
        {features.map((item) => (
          <div
            key={item}
            style={{
              background: "#181818",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid #333",
            }}
          >
            <h3 style={{ color: "#f4b400" }}>
              ✓
            </h3>

            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;