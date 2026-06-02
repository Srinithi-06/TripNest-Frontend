import React from "react";
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

  const logout = () => {
    localStorage.removeItem("currentUser");
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

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Navbar */}

      <nav
        style={{
          background: "#111",
          padding: "18px 8%",
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
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "60px",
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
            gap: "30px",
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

          <button
            onClick={logout}
            style={{
              background: "#f4b400",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero */}

      <section
        style={{
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Explore Your Dream Destinations
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          Discover beautiful places, luxury stays,
          exciting adventures and unforgettable travel
          experiences around the world.
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

      {/* Destinations */}

      <section
        style={{
          padding: "50px 8%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#f4b400",
            marginBottom: "50px",
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
  fontWeight: "500",
};

export default Dashboard;