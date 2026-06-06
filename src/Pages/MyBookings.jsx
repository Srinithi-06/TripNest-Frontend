import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryNavbar from "../Components/CategoryNavbar";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const userBookings = allBookings.filter(
      (item) => item.userEmail === currentUser.email,
    );

    setBookings(userBookings);
  }, [navigate]);

  const cancelBooking = (index) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const userBookings = allBookings.filter(
      (item) => item.userEmail === currentUser.email,
    );

    const bookingToRemove = userBookings[index];

    const updatedBookings = allBookings.filter(
      (item) => item !== bookingToRemove,
    );

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    setBookings(
      updatedBookings.filter((item) => item.userEmail === currentUser.email),
    );

    alert("Booking Cancelled Successfully");
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
     
      }}
    >
      <CategoryNavbar />
     
      <h1
        style={{
          textAlign: "center",
          color: "#f4b400",
          fontSize: "55px",
          marginBottom: "20px",
        }}
      >
        My Bookings
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#ccc",
          marginBottom: "50px",
        }}
      >
        Manage your booked travel packages.
      </p>

      {bookings.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h3>No bookings available.</h3>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {bookings.map((item, index) => (
     <div
  key={index}
  style={{
    background: "#111",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #222",
    display: "flex",
    flexDirection: "column",
    height: "100%",
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
                }}
              >
                <h3
                  style={{
                    color: "#f4b400",
                  }}
                >
                  {item.name}
                </h3>

                <p>
                  <strong>Duration:</strong> {item.duration}
                </p>

                <p>
                 <div
  style={{
    background:
      item.status === "Approved"
        ? "#0f3d1f"
        : item.status === "Rejected"
        ? "#4d1111"
        : "#3d330f",

    border:
      item.status === "Approved"
        ? "1px solid #28a745"
        : item.status === "Rejected"
        ? "1px solid #dc3545"
        : "1px solid #ffc107",

    padding: "12px",
    borderRadius: "10px",
    marginBottom: "15px",
  }}
>
  <strong>Status:</strong>{" "}
  <span
    style={{
      color:
        item.status === "Approved"
          ? "#28a745"
          : item.status === "Rejected"
          ? "#dc3545"
          : "#ffc107",
      fontWeight: "bold",
    }}
  >
    {item.status || "Pending"}
  </span>
</div>
                </p>
{item.status === "Approved" && (
  <div
    style={{
      background: "#102b18",
      border: "1px solid #28a745",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
    }}
  >
    <p>
      <strong>Guide Name:</strong>{" "}
      {item.guideName}
    </p>

    <p>
      <strong>Guide Mobile:</strong>{" "}
      {item.guidePhone}
    </p>

    <p
      style={{
        color: "#90ee90",
        marginTop: "10px",
        fontWeight: "bold",
      }}
    >
      ✓ You can contact the guide directly
      for further queries.
    </p>
  </div>
)}
                {item.reason && (
                  <p
                    style={{
                      color: "#dc3545",
                    }}
                  >
                    <strong>Reason:</strong> {item.reason}
                  </p>
                )}
                {item.guideName && (
                  <p>
                    <strong>Guide Name:</strong> {item.guideName}
                  </p>
                )}

                {item.guidePhone && (
                  <p>
                    <strong>Guide Mobile:</strong> {item.guidePhone}
                  </p>
                )}
                <h4
                  style={{
                    color: "#f4b400",
                  }}
                >
                  {item.price}
                </h4>

              {item.status === "Approved" ? (
  <button
    style={{
      width: "100%",
      background: "#28a745",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "10px",
      marginTop: "15px",
      fontWeight: "bold",
      cursor: "default",
    }}
  >
    ✓ Booking Approved
  </button>
) : item.status === "Rejected" ? (
  <button
    style={{
      width: "100%",
      background: "#dc3545",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "10px",
      marginTop: "15px",
      fontWeight: "bold",
      cursor: "default",
    }}
  >
    ✕ Booking Rejected
  </button>
) : (
  <button
    onClick={() => cancelBooking(index)}
    style={{
      width: "100%",
      background: "#f4b400",
      color: "#000",
      border: "none",
      padding: "12px",
      borderRadius: "10px",
      cursor: "pointer",
      marginTop: "15px",
      fontWeight: "bold",
    }}
  >
    Cancel Booking
  </button>
)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
