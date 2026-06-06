import React, { useEffect, useState } from "react";

function BookingRequests() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(storedBookings);
  };

  const approveBooking = (index) => {
    const guideName =
      prompt("Enter Guide Name");

    if (!guideName) return;

    const guidePhone =
      prompt("Enter Guide Mobile");

    if (!guidePhone) return;

    const updatedBookings = [...bookings];

    updatedBookings[index].status =
      "Approved";

    updatedBookings[index].guideName =
      guideName;

    updatedBookings[index].guidePhone =
      guidePhone;

    updatedBookings[index].reason = "";

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);

    alert("Booking Approved");
  };

  const rejectBooking = (index) => {
    const reason =
      prompt("Enter Rejection Reason");

    if (!reason) return;

    const updatedBookings = [...bookings];

    updatedBookings[index].status =
      "Rejected";

    updatedBookings[index].reason =
      reason;

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);

    alert("Booking Rejected");
  };

  const filteredBookings =
    bookings.filter(
      (item) =>
        item.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.customerName
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

  return (
    <>
      <h1
        style={{
          color: "#f4b400",
          marginBottom: "25px",
        }}
      >
        Booking Requests
      </h1>

      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={statCard}>
          <h3>Total Bookings</h3>
          <h1>{bookings.length}</h1>
        </div>

        <div style={statCard}>
          <h3>Approved</h3>
          <h1>
            {
              bookings.filter(
                (b) =>
                  b.status === "Approved"
              ).length
            }
          </h1>
        </div>

        <div style={statCard}>
          <h3>Rejected</h3>
          <h1>
            {
              bookings.filter(
                (b) =>
                  b.status === "Rejected"
              ).length
            }
          </h1>
        </div>

        <div style={statCard}>
          <h3>Pending</h3>
          <h1>
            {
              bookings.filter(
                (b) =>
                  !b.status ||
                  b.status === "Pending"
              ).length
            }
          </h1>
        </div>
      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Booking..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={searchInput}
      />

      {/* Booking Cards */}

      {filteredBookings.map(
        (booking, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,

              border:
                booking.status ===
                "Approved"
                  ? "2px solid #28a745"
                  : booking.status ===
                    "Rejected"
                  ? "2px solid #dc3545"
                  : "2px solid #ffc107",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <h2>{booking.name}</h2>

              <span
                style={{
                  background:
                    booking.status ===
                    "Approved"
                      ? "#28a745"
                      : booking.status ===
                        "Rejected"
                      ? "#dc3545"
                      : "#ffc107",

                  color:
                    booking.status ===
                    "Pending"
                      ? "#000"
                      : "#fff",

                  padding:
                    "8px 15px",

                  borderRadius:
                    "20px",
                }}
              >
                {booking.status ||
                  "Pending"}
              </span>
            </div>

            <p>
              <strong>
                Customer:
              </strong>{" "}
              {
                booking.customerName
              }
            </p>

            <p>
              <strong>
                Email:
              </strong>{" "}
              {
                booking.customerEmail
              }
            </p>

            <p>
              <strong>
                Price:
              </strong>{" "}
              {booking.price}
            </p>

            {booking.guideName && (
              <p>
                <strong>
                  Guide:
                </strong>{" "}
                {
                  booking.guideName
                }
              </p>
            )}

            {booking.guidePhone && (
              <p>
                <strong>
                  Mobile:
                </strong>{" "}
                {
                  booking.guidePhone
                }
              </p>
            )}

            {booking.reason && (
              <p
                style={{
                  color: "#ff6b6b",
                }}
              >
                <strong>
                  Reason:
                </strong>{" "}
                {booking.reason}
              </p>
            )}

            {booking.status !==
              "Approved" &&
              booking.status !==
                "Rejected" && (
                <>
                  <button
                    style={
                      approveBtn
                    }
                    onClick={() =>
                      approveBooking(
                        index
                      )
                    }
                  >
                    Approve
                  </button>

                  <button
                    style={
                      rejectBtn
                    }
                    onClick={() =>
                      rejectBooking(
                        index
                      )
                    }
                  >
                    Reject
                  </button>
                </>
              )}
          </div>
        )
      )}
    </>
  );
}

const statCard = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid #f4b400",
};

const searchInput = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "white",
  marginBottom: "30px",
};

const cardStyle = {
  background: "#111",
  padding: "25px",
  borderRadius: "20px",
  marginBottom: "20px",
};

const approveBtn = {
  background: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
  marginTop: "15px",
};

const rejectBtn = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default BookingRequests;