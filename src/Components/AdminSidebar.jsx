import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../Assets/Images/tripnest logo.png";

function AdminSidebar({
  activeSection,
  setActiveSection,
}) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "280px",
        background: "#111",
        padding: "25px",
        borderRight:
          "2px solid #f4b400",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            width: "70px",
          }}
        />

        <h2
          style={{
            color: "#f4b400",
          }}
        >
          TripNest Admin
        </h2>
      </div>

      <button
        style={sidebarBtn}
        onClick={() =>
          setActiveSection("dashboard")
        }
      >
        Dashboard
      </button>

      <button
        style={sidebarBtn}
        onClick={() =>
          setActiveSection("packages")
        }
      >
        Packages
      </button>

      <button
        style={sidebarBtn}
        onClick={() =>
          setActiveSection("bookings")
        }
      >
        Bookings
      </button>

      <button
        style={sidebarBtn}
        onClick={() =>
          setActiveSection("customTrips")
        }
      >
        Custom Trips
      </button>

      <button
        style={sidebarBtn}
        onClick={() =>
          setActiveSection("users")
        }
      >
        Users
      </button>

      <button
        style={{
          ...sidebarBtn,
          background: "#dc3545",
        }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

const sidebarBtn = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  background: "#222",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default AdminSidebar;