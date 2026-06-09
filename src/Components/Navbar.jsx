import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/Images/tripnest logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );
    setIsLoggedIn(!!currentUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("adminUser");
    alert("Logged Out Successfully");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "15px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid rgba(244,180,0,0.15)",
        boxShadow:
          "0 5px 25px rgba(0,0,0,0.4)",
      }}
    >
      {/* Logo */}

      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src={logo}
          alt="TripNest Logo"
          style={{
            width: "65px",
            height: "65px",
            objectFit: "contain",
            filter:
              "drop-shadow(0 0 10px rgba(244,180,0,0.5))",
          }}
        />

        <h1
          style={{
            color: "#f4b400",
            fontSize: "42px",
            fontWeight: "800",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          TripNest
        </h1>
      </Link>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <a href="#about" style={navLink}>
          About
        </a>

        <a href="#categories" style={navLink}>
          Categories
        </a>

        <a href="#contact" style={navLink}>
          Contact
        </a>

        {isLoggedIn ? (
          <button onClick={logout} style={logoutBtn}>
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            style={{
              textDecoration: "none",
            }}
          >
            <button style={loginBtn}>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "600",
  padding: "10px 18px",
  borderRadius: "30px",
  transition: "0.3s",
};

const loginBtn = {
  background:
    "linear-gradient(135deg,#f4b400,#ffcc00)",
  color: "#000",
  border: "none",
  padding: "13px 32px",
  borderRadius: "40px",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "17px",
  boxShadow:
    "0 0 15px rgba(244,180,0,0.4)",
  transition: "0.3s",
};

const logoutBtn = {
  background: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "13px 32px",
  borderRadius: "40px",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "17px",
  boxShadow:
    "0 0 15px rgba(220,53,69,0.4)",
  transition: "0.3s",
};

export default Navbar;