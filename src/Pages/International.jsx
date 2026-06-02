import React from "react";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import paris from "../Assets/Images/paris.webp";
import dubai from "../Assets/Images/dubai.webp";
import switzerland from "../Assets/Images/switzerland.webp";
import maldives from "../Assets/Images/maldives.webp";
import bali from "../Assets/Images/bali.webp";
import singapore from "../Assets/Images/singapore.jpg";

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
      International Tours
    </h1>

    <p
      style={{
        color: "#ccc",
        fontSize: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      Discover luxury destinations and unforgettable
      international travel experiences.
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
    </div>
  </section>
</div>


);
}

export default International;
