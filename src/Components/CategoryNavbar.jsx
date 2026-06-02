import React from "react";
import { Link } from "react-router-dom";

function CategoryNavbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "12px 25px",
    borderRadius: "30px",
    border: "1px solid #f4b400",
    transition: "0.3s",
    fontWeight: "600",
  };

  return (
    <div
      style={{
        background: "#111",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
        borderBottom: "1px solid #f4b400",
      }}
    >
      <Link to="/packages" style={linkStyle}>
        Packages
      </Link>

      <Link to="/international" style={linkStyle}>
        International
      </Link>

      <Link to="/family" style={linkStyle}>
        Family
      </Link>

      <Link to="/friends" style={linkStyle}>
        Friends
      </Link>

      <Link to="/adventure" style={linkStyle}>
        Adventure
      </Link>

      <Link to="/honeymoon" style={linkStyle}>
        Honeymoon
      </Link>
    </div>
  );
}

export default CategoryNavbar;