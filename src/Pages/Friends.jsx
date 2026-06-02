import React from "react";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import goa from "../Assets/Images/goa.webp";
import pondicherry from "../Assets/Images/pondicherry.jpg";
import gokarna from "../Assets/Images/gorkana.jpg";
import manali from "../Assets/Images/Manali.jpg";
import kasol from "../Assets/Images/kasoli.jpg";
import rishikesh from "../Assets/Images/rishikesh.jpg";

function Friends() {
const tours = [
{
name: "Goa",
image: goa,
duration: "4 Days / 3 Nights",
price: "₹25,000",
description: "Beach parties and vibrant nightlife.",
},
{
name: "Pondicherry",
image: pondicherry,
duration: "3 Days / 2 Nights",
price: "₹18,000",
description: "French architecture and beautiful beaches.",
},
{
name: "Gokarna",
image: gokarna,
duration: "4 Days / 3 Nights",
price: "₹20,000",
description: "Peaceful beaches and trekking adventures.",
},
{
name: "Manali",
image: manali,
duration: "5 Days / 4 Nights",
price: "₹28,000",
description: "Snow adventures and scenic mountain views.",
},
{
name: "Kasol",
image: kasol,
duration: "4 Days / 3 Nights",
price: "₹24,000",
description: "Camping and unforgettable mountain vibes.",
},
{
name: "Rishikesh",
image: rishikesh,
duration: "4 Days / 3 Nights",
price: "₹22,000",
description: "River rafting and adventure activities.",
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
      Friends Tours
    </h1>

    <p
      style={{
        color: "#ccc",
        fontSize: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      Travel better together and create unforgettable memories with friends.
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

export default Friends;
