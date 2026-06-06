import React from "react";
import { Link } from "react-router-dom";

import internationalImg from "../Assets/Images/international-background.jpg";
import familyImg from "../Assets/Images/family background.jpg";
import friendsImg from "../Assets/Images/friends-background.jpg";
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
          marginBottom: "20px",
        }}
      >
        Explore Categories
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#ccc",
          maxWidth: "700px",
          margin: "0 auto 60px",
          lineHeight: "1.8",
        }}
      >
        Choose from our specially designed travel
        experiences and start your next adventure.
      </p>

      {/* Top Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        {categories.slice(0, 3).map((item) => (
          <CategoryCard key={item.title} item={item} />
        ))}
      </div>

      {/* Bottom Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {categories.slice(3).map((item) => (
          <div
            key={item.title}
            style={{
              width: "340px",
            }}
          >
            <CategoryCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ item }) {
  return (
    <Link
      to={item.path}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-12px) scale(1.03)";
          e.currentTarget.style.boxShadow =
            "0 15px 35px rgba(244,180,0,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0px) scale(1)";
          e.currentTarget.style.boxShadow =
            "none";
        }}
        style={{
          background: "#111",
          borderRadius: "20px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s ease",
          border: "1px solid #222",
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
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#f4b400",
              fontSize: "26px",
              marginBottom: "10px",
            }}
          >
            {item.title}
          </h3>

          <h5
            style={{
              color: "#ccc",
              fontSize: "16px",
              fontWeight: "400",
              marginBottom: "15px",
            }}
          >
            Explore amazing {item.title} packages
          </h5>

          <span
            style={{
              color: "#f4b400",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Explore Packages →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Categories;