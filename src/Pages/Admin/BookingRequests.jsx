import React, { useEffect, useState } from "react";
import api from "../../Services/api";

function BookingRequests() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

 useEffect(() => {
  fetchBookings();
}, []);

const fetchBookings = async () => {
  try {
    const response =
      await api.get("/bookings");

    console.log(
      "Bookings Response:",
      response.data
    );

    setBookings(response.data);
  } catch (error) {
    console.log(error);
  }
};
 const approveBooking = async (
  index
) => {
  const guideName =
    prompt("Enter Guide Name");

  if (!guideName) return;

  const guidePhone =
    prompt(
      "Enter Guide Mobile Number"
    );

  if (!guidePhone) return;

  try {
    await api.put(
      `/bookings/approve/${bookings[index]._id}`,
      {
        guideName,
        guidePhone,
      }
    );

    fetchBookings();

    alert(
      "Booking Approved"
    );
  } catch (error) {
    console.log(error);
  }
};
  const rejectBooking = async (
  index
) => {
  const reason =
    prompt(
      "Enter Rejection Reason"
    );

  if (!reason) return;

  try {
    await api.put(
      `/bookings/reject/${bookings[index]._id}`,
      {
        reason,
      }
    );

    fetchBookings();

    alert(
      "Booking Rejected"
    );
  } catch (error) {
    console.log(error);
  }
};

  const filteredBookings =
  bookings.filter(
    (item) =>
      item.packageName
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||
      item.userName
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  console.log(bookings);
  
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
            key={booking._id}
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
             <h2>{booking.packageName}</h2>

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
  !booking.status===
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
              {booking.userName}
            </p>

            <p>
              <strong>
                Email:
              </strong>{" "}
             {booking.userEmail}
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