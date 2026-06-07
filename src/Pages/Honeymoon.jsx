import React, {
  useEffect,
  useState,
} from "react";

import api from "../Services/api";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import maldives from "../Assets/Images/maldives.webp";
import bali from "../Assets/Images/bali.webp";
import paris from "../Assets/Images/paris.webp";
import honeymoon from "../Assets/Images/honeymoon-bg.avif"
function Honeymoon() {
  const tours = [
    {
      name: "Maldives",
      image: maldives,
      duration: "5 Days / 4 Nights",
      price: "₹95,000",
      description:
        "Luxury water villas and romantic sunset views.",
    },
    {
      name: "Bali",
      image: bali,
      duration: "6 Days / 5 Nights",
      price: "₹85,000",
      description:
        "Beautiful beaches and unforgettable honeymoon experiences.",
    },
    {
      name: "Paris",
      image: paris,
      duration: "7 Days / 6 Nights",
      price: "₹1,20,000",
      description:
        "The city of love with romantic streets and iconic landmarks.",
    },
  ];

  const [honeymoonPackages,
  setHoneymoonPackages] =
  useState([]);

useEffect(() => {
  fetchPackages();
}, []);

const fetchPackages =
  async () => {
    try {
      const response =
        await api.get(
          "/packages/category/Honeymoon"
        );

      setHoneymoonPackages(
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

      <section
  style={{
    height: "60vh",
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.75)
    ), url(${honeymoon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  >neymoon Packages
        </h1>

  <p
    style={{
      color: "#eee",
      fontSize: "22px",
      maxWidth: "900px",
      lineHeight: "1.8",
    }}
  >
          Celebrate your love with luxury, comfort and unforgettable
          romantic experiences around the world.
        </p>
      </section>
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

      <section
    style={{
   padding: "50px 8% 80px",
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
          {/* Default Packages */}

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

          {/* Admin Added Packages */}

          {honeymoonPackages.map((tour) => (
            <PackageCard
              key={tour._id}
              image={tour.image}
              name={tour.name}
              duration={tour.duration}
              description={tour.description}
              price={tour.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Honeymoon;