import React, { useEffect, useState } from "react";

import international from "../../Assets/Images/international-background.jpg";
import family from "../../Assets/Images/family background.jpg";
import friends from "../../Assets/Images/friends-background.jpg";
import adventure from "../../Assets/Images/adventure background.jpg";
import honeymoon from "../../Assets/Images/honeymoon background.jpg";

function DashboardOverview() {
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [customTrips, setCustomTrips] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setPackages(
      JSON.parse(localStorage.getItem("packages")) || []
    );

    setBookings(
      JSON.parse(localStorage.getItem("bookings")) || []
    );

    setUsers(
      JSON.parse(localStorage.getItem("tripnestUsers")) || []
    );

    setCustomTrips(
      JSON.parse(
        localStorage.getItem("customTripRequests")
      ) || []
    );
  }, []);

  const destinations = [
    {
      name: "International",
      image: international,
    },
    {
      name: "Family",
      image: family,
    },
    {
      name: "Friends",
      image: friends,
    },
    {
      name: "Adventure",
      image: adventure,
    },
    {
      name: "Honeymoon",
      image: honeymoon,
    },
  ];

  const filteredDestinations =
    destinations.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      {/* Welcome */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#f4b400,#ffcc00)",
          color: "#000",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1>
          Welcome Back Admin 👋
        </h1>

        <p>
          Manage users, bookings,
          packages and custom trips.
        </p>
      </div>

      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Packages</h3>
          <h1>{packages.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <h1>{bookings.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Custom Requests</h3>
          <h1>{customTrips.length}</h1>
        </div>
      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Destination..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #333",
          background: "#111",
          color: "white",
          marginBottom: "30px",
        }}
      />

      {/* Destinations */}

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Popular Destinations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {filteredDestinations.map(
          (item, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "15px",
                }}
              >
                <h3
                  style={{
                    color: "#f4b400",
                  }}
                >
                  {item.name}
                </h3>
              </div>
            </div>
          )
        )}
      </div>

      {/* Recent Bookings */}

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Recent Booking Requests
      </h2>

      {bookings.slice(0, 5).map((booking, index) => (
        <div
          key={index}
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{booking.name}</h3>

          <p>
            Customer:
            {" "}
            {booking.customerName}
          </p>

          <p>
            Status:
            {" "}
            <span
              style={{
                color:
                  booking.status ===
                  "Approved"
                    ? "#28a745"
                    : booking.status ===
                      "Rejected"
                    ? "#dc3545"
                    : "#ffc107",
              }}
            >
              {booking.status ||
                "Pending"}
            </span>
          </p>
        </div>
      ))}
    </>
  );
}

const cardStyle = {
  background: "#111",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid #f4b400",
};

export default DashboardOverview;