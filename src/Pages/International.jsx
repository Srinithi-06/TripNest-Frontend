import React, {useEffect,useState,} from "react";

import api from "../Services/api";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import paris from "../Assets/Images/paris.webp";
import dubai from "../Assets/Images/dubai.webp";
import switzerland from "../Assets/Images/switzerland.webp";
import maldives from "../Assets/Images/maldives.webp";
import bali from "../Assets/Images/bali.webp";
import singapore from "../Assets/Images/singapore.jpg";
import bg from "../Assets/Images/international-bg.avif";

function International() {
const tours = [
{
name: "Paris",
image: paris,
duration: "7 Days / 6 Nights",
price: "₹1,20,000",
description:
"Experience the Eiffel Tower and romantic streets.",
},
{
name: "Dubai",
image: dubai,
duration: "6 Days / 5 Nights",
price: "₹1,10,000",
description:
"Luxury shopping, desert safari and skyscrapers.",
},
{
name: "Switzerland",
image: switzerland,
duration: "8 Days / 7 Nights",
price: "₹1,50,000",
description:
"Snowy mountains and scenic train journeys.",
},
{
name: "Maldives",
image: maldives,
duration: "5 Days / 4 Nights",
price: "₹95,000",
description:
"Crystal-clear beaches and luxury villas.",
},
{
name: "Bali",
image: bali,
duration: "6 Days / 5 Nights",
price: "₹85,000",
description:
"Beautiful beaches and tropical adventures.",
},
{
name: "Singapore",
image: singapore,
duration: "5 Days / 4 Nights",
price: "₹1,00,000",
description:
"Modern attractions and stunning city views.",
},
];
const [internationalPackages,
  setInternationalPackages] =
  useState([]);

useEffect(() => {
  fetchPackages();
}, []);

const fetchPackages =
  async () => {
    try {
      const response =
        await api.get(
          "/packages/category/International"
        );

      setInternationalPackages(
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
> <CategoryNavbar />


 <section
  style={{
    height: "60vh",
    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.75)
    ),
    url(${bg})`,
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
      textShadow: "0 0 20px rgba(0,0,0,0.6)",
    }}
  >
    International Tours
  </h1>

  <p
    style={{
      color: "#eee",
      fontSize: "22px",
      maxWidth: "900px",
      lineHeight: "1.8",
    }}
  >
    Explore world-famous destinations,
    luxury experiences and unforgettable
    international adventures.
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
    <div>
      <h1
        style={{
          color: "#f4b400",
          marginBottom: "10px",
        }}
      >
        50+
      </h1>

      <p style={{ color: "#ccc" }}>
        Countries
      </p>
    </div>

    <div>
      <h1
        style={{
          color: "#f4b400",
          marginBottom: "10px",
        }}
      >
        10K+
      </h1>

      <p style={{ color: "#ccc" }}>
        Travelers
      </p>
    </div>

    <div>
      <h1
        style={{
          color: "#f4b400",
          marginBottom: "10px",
        }}
      >
        500+
      </h1>

      <p style={{ color: "#ccc" }}>
        Tours
      </p>
    </div>

    <div>
      <h1
        style={{
          color: "#f4b400",
          marginBottom: "10px",
        }}
      >
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

  {/* Admin Added International Packages */}

  {internationalPackages.map((tour) => (
    <PackageCard
      key={tour}
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

export default International;
