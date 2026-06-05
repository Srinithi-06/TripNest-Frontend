import React from "react";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import ladakh from "../Assets/Images/ladakh.jpg";
import spiti from "../Assets/Images/spiti.jpg";
import andaman from "../Assets/Images/andaman.avif";


function Adventure() {
const tours = [
{
name: "Ladakh",
image: ladakh,
duration: "7 Days / 6 Nights",
price: "₹45,000",
description:
"Bike rides through breathtaking mountain passes.",
},
{
name: "Spiti Valley",
image: spiti,
duration: "6 Days / 5 Nights",
price: "₹42,000",
description:
"High altitude desert adventure and scenic landscapes.",
},
{
name: "Andaman",
image: andaman,
duration: "5 Days / 4 Nights",
price: "₹38,000",
description:
"Scuba diving and exciting water sports activities.",
},
];
const savedPackages =
  JSON.parse(localStorage.getItem("packages")) || [];

const adventurePackages =
  savedPackages.filter(
    (item) => item.category === "Adventure"
  );
return (
<div
style={{
background: "#000",
minHeight: "100vh",
color: "white",
}}
> <CategoryNavbar />

```
  <section
    style={{
      padding: "100px 8%",
      textAlign: "center",
      background:
        "linear-gradient(to right,#000,#111)",
    }}
  >
    <h1
      style={{
        color: "#f4b400",
        fontSize: "60px",
        marginBottom: "20px",
      }}
    >
      Adventure Packages
    </h1>

    <p
      style={{
        color: "#ccc",
        fontSize: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      Experience thrilling adventures, trekking,
      biking, rafting and unforgettable journeys.
    </p>
  </section>

  <section
    style={{
      padding: "60px 8%",
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

  {/* Admin Added Adventure Packages */}

  {adventurePackages.map((tour, index) => (
    <PackageCard
      key={`adventure-${index}`}
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

export default Adventure;
