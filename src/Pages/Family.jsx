import React from "react";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import ooty from "../Assets/Images/ooty.jpg";
import kodaikanal from "../Assets/Images/kodaikanal.jpg";
import munnar from "../Assets/Images/munnar.jpg";
import kerala from "../Assets/Images/kerela.jpg";
import coorg from "../Assets/Images/coorg.jpg";
import mysore from "../Assets/Images/mysore.jpg";

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
const savedPackages =
  JSON.parse(localStorage.getItem("packages")) || [];

const familyPackages =
  savedPackages.filter(
    (item) => item.category === "Family"
  );

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
      Family Packages
    </h1>

    <p
      style={{
        color: "#ccc",
        fontSize: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      Create unforgettable memories with your loved ones.
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

  {/* Admin Added Family Packages */}

  {familyPackages.map((tour, index) => (
    <PackageCard
      key={`family-${index}`}
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

export default Family;
