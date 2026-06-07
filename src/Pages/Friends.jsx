import React, {
  useEffect,
  useState,
} from "react";

import api from "../Services/api";
import CategoryNavbar from "../Components/CategoryNavbar";
import PackageCard from "../Components/PackageCard";

import goa from "../Assets/Images/goa.webp";
import pondicherry from "../Assets/Images/pondicherry.jpg";
import gokarna from "../Assets/Images/gorkana.jpg";
import manali from "../Assets/Images/Manali.jpg";
import kasol from "../Assets/Images/kasoli.jpg";
import rishikesh from "../Assets/Images/rishikesh.jpg";
import friends from "../Assets/Images/friends-bg.jpeg";

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

const [friendsPackages,
  setFriendsPackages] =
  useState([]);

useEffect(() => {
  fetchPackages();
}, []);

const fetchPackages =
  async () => {
    try {
      const response =
        await api.get(
          "/packages/category/Friends"
        );

      setFriendsPackages(
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
    url(${friends})`,
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
  >
      Friends Tours
    </h1>

    <p
    style={{
      color: "#eee",
      fontSize: "22px",
      maxWidth: "900px",
      lineHeight: "1.8",
    }}
  >
      Travel better together and create unforgettable memories with friends.
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
    padding: "60px 8%",
    background: "#000",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(350px,1fr))",
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

  {/* Admin Added Friends Packages */}

  {friendsPackages.map((tour) => (
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

export default Friends;
