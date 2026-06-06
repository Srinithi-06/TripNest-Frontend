import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryNavbar from "../Components/CategoryNavbar";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    const allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const userWishlist = allWishlist.filter(
      (item) =>
        item.userEmail === currentUser.email
    );

    setWishlist(userWishlist);

    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const userBookings = allBookings.filter(
      (item) =>
        item.userEmail === currentUser.email
    );

    setBookings(userBookings);
  }, [navigate]);

  const removeItem = (index) => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const userWishlist = allWishlist.filter(
      (item) =>
        item.userEmail === currentUser.email
    );

    const itemToRemove = userWishlist[index];

    const updatedWishlist = allWishlist.filter(
      (item) => item !== itemToRemove
    );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setWishlist(
      updatedWishlist.filter(
        (item) =>
          item.userEmail === currentUser.email
      )
    );
  };

  const bookNow = (item) => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const alreadyBooked = allBookings.find(
      (booking) =>
        booking.userEmail === currentUser.email &&
        booking.name === item.name
    );

    if (alreadyBooked) {
      alert("Package already booked");
      return;
    }

    const newBooking = {
      userEmail: currentUser.email,
      customerName: currentUser.fullname,
      customerEmail: currentUser.email,
      image: item.image,
      name: item.name,
      duration: item.duration,
      description: item.description,
      price: item.price,
      status: "Pending",
      guideName: "",
      guidePhone: "",
      reason: "",
    };

    const updatedBookings = [
      ...allBookings,
      newBooking,
    ];

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(
      updatedBookings.filter(
        (booking) =>
          booking.userEmail === currentUser.email
      )
    );

    alert("Booking Request Sent Successfully");
  };

  const isBooked = (packageName) => {
    return bookings.some(
      (booking) => booking.name === packageName
    );
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

      <div
        style={{
          padding: "60px 8%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#f4b400",
            marginBottom: "15px",
            fontSize: "55px",
          }}
        >
          My Wishlist
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#ccc",
            marginBottom: "50px",
          }}
        >
          Your favorite travel destinations.
        </p>

        {wishlist.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <h3>No destinations added yet.</h3>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px",
            }}
          >
            {wishlist.map((item, index) => (
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
                  }}
                >
                  <h3
                    style={{
                      color: "#f4b400",
                    }}
                  >
                    {item.name}
                  </h3>

                  {item.duration && (
                    <p>{item.duration}</p>
                  )}

                  {item.description && (
                    <p>{item.description}</p>
                  )}

                  <h4
                    style={{
                      color: "#f4b400",
                    }}
                  >
                    {item.price}
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "15px",
                    }}
                  >
                    {isBooked(item.name) ? (
                      <button
                        disabled
                        style={{
                          flex: 1,
                          background: "#28a745",
                          color: "white",
                          border: "none",
                          padding: "12px",
                          borderRadius: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Booked ✓
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          bookNow(item)
                        }
                        style={{
                          flex: 1,
                          background: "#f4b400",
                          color: "#000",
                          border: "none",
                          padding: "12px",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Book Now
                      </button>
                    )}

                    <button
                      onClick={() =>
                        removeItem(index)
                      }
                      style={{
                        flex: 1,
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;