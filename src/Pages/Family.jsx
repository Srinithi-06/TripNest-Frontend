import React, {
  useEffect,
  useState,
} from "react";

import api from "../Services/api";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import ooty from "../Assets/Images/ooty.jpg";
import kodaikanal from "../Assets/Images/kodaikanal.jpg";
import munnar from "../Assets/Images/munnar.jpg";
import kerala from "../Assets/Images/kerela.jpg";
import coorg from "../Assets/Images/coorg.jpg";
import mysore from "../Assets/Images/mysore.jpg";
import fami from "../Assets/Images/fami-bg.webp";

function Family() {
  const tours = [
    {
      name: "Ooty",
      image: ooty,
      duration: "4 Days / 3 Nights",
      price: "₹18,000",
      description:
        "Beautiful hill station with cool climate and gardens.",
    },
    {
      name: "Kodaikanal",
      image: kodaikanal,
      duration: "4 Days / 3 Nights",
      price: "₹20,000",
      description:
        "Lakes, waterfalls and scenic mountain views.",
    },
    {
      name: "Munnar",
      image: munnar,
      duration: "5 Days / 4 Nights",
      price: "₹22,000",
      description:
        "Tea plantations and peaceful green landscapes.",
    },
    {
      name: "Kerala",
      image: kerala,
      duration: "6 Days / 5 Nights",
      price: "₹28,000",
      description:
        "Backwaters, houseboats and cultural experiences.",
    },
    {
      name: "Coorg",
      image: coorg,
      duration: "4 Days / 3 Nights",
      price: "₹21,000",
      description:
        "Coffee plantations and relaxing family vacations.",
    },
    {
      name: "Mysore",
      image: mysore,
      duration: "3 Days / 2 Nights",
      price: "₹15,000",
      description:
        "Historic palaces and rich cultural heritage.",
    },
  ];

const [familyPackages,
  setFamilyPackages] =
  useState([]);

useEffect(() => {
  fetchPackages();
}, []);

const fetchPackages =
  async () => {
    try {
      const response =
        await api.get(
          "/packages/category/Family"
        );

      setFamilyPackages(
        response.data
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <CategoryNavbar />

      {/* Hero Section */}

      <section
        style={{
          height: "50vh",
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.75)
          ), url(${fami})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 8%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "72px",
            fontWeight: "700",
            marginBottom: "20px",
            textShadow:
              "0 0 20px rgba(0,0,0,0.6)",
          }}
        >
          Family Packages
        </h1>

        <p
          style={{
            color: "#eee",
            fontSize: "22px",
            maxWidth: "900px",
            lineHeight: "1.8",
          }}
        >
          Create unforgettable memories
          with your loved ones through
          carefully planned family vacations.
        </p>
      </section>

      {/* Statistics Section */}

     <section
  style={{
    padding: "40px 8%",
    background: "#080808",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(200px,1fr))",
      gap: "25px",
      textAlign: "center",
    }}
  >
    {/* Replace values according to page */}

    <div>
      <h1 style={{ color: "#f4b400" }}>
        500+
      </h1>
      <p style={{ color: "#ccc" }}>
        Travelers
      </p>
    </div>

    <div>
      <h1 style={{ color: "#f4b400" }}>
        100+
      </h1>
      <p style={{ color: "#ccc" }}>
        Destinations
      </p>
    </div>

    <div>
      <h1 style={{ color: "#f4b400" }}>
        4.9★
      </h1>
      <p style={{ color: "#ccc" }}>
        Ratings
      </p>
    </div>

    <div>
      <h1 style={{ color: "#f4b400" }}>
        24/7
      </h1>
      <p style={{ color: "#ccc" }}>
        Support
      </p>
    </div>
  </div>
</section>

      {/* Packages Section */}

      <section
        style={{
          padding: "60px 8% 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {tours.map((tour) => (
            <PackageCard
              key={tour.name}
              image={tour.image}
              name={tour.name}
              duration={tour.duration}
              description={tour.description}
              price={tour.price}
            />
          ))}

          {familyPackages.map(
            (tour) => (
              <PackageCard
                key={tour._id}
                image={tour.image}
                name={tour.name}
                duration={tour.duration}
                description={tour.description}
                price={tour.price}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}



export default Family;