import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import paris from "../Assets/Images/paris.webp";
import dubai from "../Assets/Images/dubai.webp";
import bali from "../Assets/Images/bali.webp";
import switzerland from "../Assets/Images/switzerland.webp";
import goa from "../Assets/Images/goa.webp";
import maldives from "../Assets/Images/maldives.webp";
import logo from "../Assets/Images/tripnest logo.png";

function Dashboard() {
const navigate = useNavigate();

const [currentUser, setCurrentUser] =
useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
const user = JSON.parse(
localStorage.getItem("currentUser")
);


if (!user) {
  alert("Please Login First");
  navigate("/login");
  setIsLoading(false);
  return;
}

setCurrentUser(user);
setIsLoading(false);

}, [navigate]);

const logout = () => {
localStorage.removeItem("currentUser");


alert("Logged Out Successfully");

navigate("/");

};

const destinations = [
{
name: "Paris",
image: paris,
price: "₹1,20,000",
},
{
name: "Dubai",
image: dubai,
price: "₹1,10,000",
},
{
name: "Bali",
image: bali,
price: "₹85,000",
},
{
name: "Switzerland",
image: switzerland,
price: "₹1,50,000",
},
{
name: "Goa",
image: goa,
price: "₹25,000",
},
{
name: "Maldives",
image: maldives,
price: "₹95,000",
},
];

if (isLoading || !currentUser) {
return null;
}

return (
<div
style={{
background: "#000",
minHeight: "100vh",
color: "white",
}}
>
<nav
style={{
background: "#111",
padding: "15px 8%",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
borderBottom: "1px solid #f4b400",
}}
>
<div
style={{
display: "flex",
alignItems: "center",
gap: "12px",
}}
>
<img
src={logo}
alt="TripNest"
style={{
width: "55px",
}}
/>

      <h2
        style={{
          color: "#f4b400",
          margin: 0,
        }}
      >
        TripNest
      </h2>
    </div>

    <div
      style={{
        display: "flex",
        gap: "25px",
        alignItems: "center",
      }}
    >
      <Link
        to="/dashboard"
        style={navStyle}
      >
        Home
      </Link>

      <Link
        to="/packages"
        style={navStyle}
      >
        Packages
      </Link>

      <Link
        to="/wishlist"
        style={navStyle}
      >
        Wishlist
      </Link>

      <Link
        to="/mybookings"
        style={navStyle}
      >
        Bookings
      </Link>

      <Link
        to="/customize"
        style={navStyle}
      >
        Customize
      </Link>

      <span
        style={{
          color: "#f4b400",
          fontWeight: "bold",
        }}
      >
        Welcome,
        {" "}
        {currentUser.fullname}
      </span>

      <button
        onClick={logout}
        style={{
          background: "#dc3545",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  </nav>

  <section
    style={{
      padding: "80px 8%",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "55px",
        marginBottom: "20px",
      }}
    >
      Explore Your Dream Destinations
    </h1>

    <p
      style={{
        color: "#ccc",
        fontSize: "20px",
        maxWidth: "850px",
        margin: "0 auto",
      }}
    >
      Discover beautiful places, luxury stays,
      exciting adventures and unforgettable
      travel experiences around the world.
    </p>

    <Link to="/packages">
      <button
        style={{
          marginTop: "30px",
          background: "#f4b400",
          border: "none",
          padding: "15px 40px",
          borderRadius: "50px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Explore Packages
      </button>
    </Link>
  </section>

  <section
    style={{
      padding: "40px 8% 80px",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        color: "#f4b400",
        marginBottom: "40px",
      }}
    >
      Popular Destinations
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        gap: "30px",
      }}
    >
      {destinations.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#111",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #222",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3>{item.name}</h3>

            <p
              style={{
                color: "#f4b400",
                fontWeight: "bold",
              }}
            >
              {item.price}
            </p>

            <Link to="/packages">
              <button
                style={{
                  background: "#f4b400",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>


);
}

const navStyle = {
color: "white",
textDecoration: "none",
fontWeight: "600",
};

export default Dashboard;
