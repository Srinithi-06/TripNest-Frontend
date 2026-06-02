import React from "react";
import { Link } from "react-router-dom";

import internationalImg from "../Assets/Images/international-background.jpg";
import familyImg from "../Assets/Images/family background.jpg";
import friendsImg from "../Assets/Images/friends background.jpg";
import adventureImg from "../Assets/Images/adventure background.jpg";
import honeymoonImg from "../Assets/Images/honeymoon background.jpg";

function Categories() {
  const categories = [
    {
      title: "International",
      image: internationalImg,
      path: "/international",
    },
    {
      title: "Family",
      image: familyImg,
      path: "/family",
    },
    {
      title: "Friends",
      image: friendsImg,
      path: "/friends",
    },
    {
      title: "Adventure",
      image: adventureImg,
      path: "/adventure",
    },
    {
      title: "Honeymoon",
      image: honeymoonImg,
      path: "/honeymoon",
    },
  ];

  return (
    <section
      id="categories"
      style={{
        background: "#181818",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#f4b400",
          fontSize: "45px",
          marginBottom: "50px",
        }}
      >
        Explore Categories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {categories.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#111",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
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
                }}
              >
                <h3
                  style={{
                    color: "#f4b400",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#ccc",
                  }}
                >
                  Explore amazing {item.title} packages
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;