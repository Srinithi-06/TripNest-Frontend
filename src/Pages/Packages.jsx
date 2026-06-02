import React from "react";
import { Link } from "react-router-dom";
import CategoryNavbar from "../Components/CategoryNavbar";

function Packages() {
  const categories = [
    {
      name: "International Tours",
      path: "/international",
      icon: "🌍",
      desc: "Explore world-famous destinations and luxury international trips.",
    },
    {
      name: "Family Packages",
      path: "/family",
      icon: "👨‍👩‍👧‍👦",
      desc: "Memorable family vacations with comfort and fun.",
    },
    {
      name: "Friends Tours",
      path: "/friends",
      icon: "🎉",
      desc: "Adventure and fun-filled trips with your friends.",
    },
    {
      name: "Adventure Trips",
      path: "/adventure",
      icon: "🏔️",
      desc: "Trekking, rafting, biking and thrilling experiences.",
    },
    {
      name: "Honeymoon Packages",
      path: "/honeymoon",
      icon: "❤️",
      desc: "Romantic destinations for unforgettable moments.",
    },
  ];

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "80px 8%",
      }}
    >
      <CategoryNavbar />
      <h1
        style={{
          textAlign: "center",
          color: "#f4b400",
          marginBottom: "15px",
          fontSize: "55px",
        }}
      >
        Travel Packages
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#ccc",
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "60px",
        }}
      >
        Choose your favorite category and start planning your dream vacation.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
         
        {categories.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              borderRadius: "20px",
              padding: "35px",
              border: "1px solid #f4b400",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#f4b400",
                marginBottom: "15px",
              }}
            >
              {item.name}
            </h3>

            <p
              style={{
                color: "#ccc",
                marginBottom: "25px",
              }}
            >
              {item.desc}
            </p>

            <Link to={item.path}>
              <button
                style={{
                  background: "#f4b400",
                  border: "none",
                  padding: "12px 30px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;