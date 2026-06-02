import React from "react";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import maldives from "../Assets/Images/maldives.webp";
import bali from "../Assets/Images/bali.webp";
import paris from "../Assets/Images/paris.webp";

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
      padding: "80px 8%",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        color: "#f4b400",
        fontSize: "55px",
        marginBottom: "20px",
      }}
    >
      Honeymoon Packages
    </h1>

    <p
      style={{
        color: "#ccc",
        maxWidth: "800px",
        margin: "auto",
        fontSize: "18px",
      }}
    >
      Celebrate your love with luxury, comfort and unforgettable
      romantic experiences around the world.
    </p>
  </section>

  <section
    style={{
      padding: "20px 8% 60px",
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

export default Honeymoon;
