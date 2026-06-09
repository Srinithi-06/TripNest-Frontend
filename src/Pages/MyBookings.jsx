import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryNavbar from "../Components/CategoryNavbar";
import api from "../Services/api";

function MyBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [customTrips, setCustomTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBookings = async () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (!currentUser) {
        alert("Please Login First");
        navigate("/login");
        setIsLoading(false);
        return;
      }

      try {
        const response = await api.get("/bookings");
        const userBookings = (response.data || []).filter(
          (booking) => booking.userEmail === currentUser.email,
        );
        setBookings(userBookings);
        await fetchCustomTrips(currentUser.email);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    loadBookings();
  }, [navigate]);

  const fetchCustomTrips = async (email) => {
    try {
      const response = await api.get("/customtrips");
      const userCustomTrips = (response.data || []).filter(
        (trip) => trip.userEmail === email,
      );
      setCustomTrips(userCustomTrips);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelBooking = async (id) => {
    try {
      await api.delete(`/bookings/${id}`);
      const response = await api.get("/bookings");
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const userBookings = (response.data || []).filter(
        (booking) => booking.userEmail === currentUser.email,
      );
      setBookings(userBookings);
      alert("Booking Cancelled Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const noData = bookings.length === 0 && customTrips.length === 0;

  if (isLoading) {
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

      {noData ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h3>No bookings available.</h3>
        </div>
      ) : (
        <>
          {bookings.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                gap: "30px",
              }}
            >
              {bookings.map((item) => (
                <div
                  key={item._id}
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
                    src={item.packageImage || item.image}
                    alt={item.packageName || item.name}
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
                      {item.packageName || item.name}
                    </h3>

                    <p>
                      <strong>Duration:</strong> {item.duration}
                    </p>

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
                          <strong>Guide Name:</strong> {item.guideName}
                        </p>
                        <p>
                          <strong>Guide Mobile:</strong> {item.guidePhone}
                        </p>
                        <p
                          style={{
                            color: "#90ee90",
                            marginTop: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          ✓ You can contact the guide directly for further queries.
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
                        onClick={() => cancelBooking(item._id)}
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

          {customTrips.length > 0 && (
            <>
              <h2
                style={{
                  textAlign: "center",
                  color: "#f4b400",
                  fontSize: "45px",
                  margin: "40px 0 20px",
                }}
              >
                My Custom Trip Requests
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                  gap: "30px",
                }}
              >
                {customTrips.map((item) => (
                  <div
                    key={item._id}
                    style={{
                      background: "#111",
                      borderRadius: "20px",
                      border: "1px solid #222",
                      padding: "20px",
                    }}
                  >
                    <h3
                      style={{
                        color: "#f4b400",
                        marginBottom: "12px",
                      }}
                    >
                      {item.destination || "Custom Trip"}
                    </h3>

                    <p>
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
                    </p>

                    <p>
                      <strong>Travelers:</strong> {item.travelers}
                    </p>

                    <p>
                      <strong>Budget:</strong> {item.budget}
                    </p>

                    <p>
                      <strong>Travel Date:</strong> {item.travelDate || "Not Specified"}
                    </p>

                    <p>
                      <strong>Special Requests:</strong> {item.requests || "No Requests"}
                    </p>

                    {item.status === "Approved" && (
                      <>
                        <p>
                          <strong>Guide Name:</strong> {item.guideName}
                        </p>
                        <p>
                          <strong>Guide Mobile:</strong> {item.guidePhone}
                        </p>
                      </>
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
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default MyBookings;
