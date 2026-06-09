import React, { useState, useEffect } from "react";
import {
  NavLink,
  useNavigate,
  Link,
} from "react-router-dom";

function CategoryNavbar() {
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
        background: "#000",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Logo */}

      <h2
        style={{
          color: "#f4b400",
          fontSize: "34px",
          fontWeight: "700",
          margin: 0,
        }}
      >
        TripNest
      </h2>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : linkStyle
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/packages"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : linkStyle
          }
        >
          Packages
        </NavLink>

        <NavLink
          to="/customize"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : linkStyle
          }
        >
          Customize Trip
        </NavLink>

        <NavLink
          to="/wishlist"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : linkStyle
          }
        >
          Wishlist
        </NavLink>

        <NavLink
          to="/mybookings"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : linkStyle
          }
        >
          My Bookings
        </NavLink>

        {isLoggedIn ? (
          <button
            onClick={logout}
            style={logoutBtn}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button style={loginBtn}>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#ddd",
  textDecoration: "none",
  fontWeight: "600",
  padding: "10px 18px",
  borderRadius: "10px",
  transition: "all 0.3s ease",
};

const activeLink = {
  color: "#000",
  background: "#f4b400",
  textDecoration: "none",
  fontWeight: "700",
  padding: "10px 18px",
  borderRadius: "10px",
  boxShadow:
    "0 0 15px rgba(244,180,0,0.4)",
  transition: "all 0.3s ease",
};

const logoutBtn = {
  background: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "12px 22px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};

const loginBtn = {
  background: "linear-gradient(135deg,#f4b400,#ffcc00)",
  color: "#000",
  border: "none",
  padding: "12px 22px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  boxShadow: "0 0 15px rgba(244,180,0,0.4)",
  transition: "0.3s",
};

export default CategoryNavbar;