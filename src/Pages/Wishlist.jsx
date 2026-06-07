import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryNavbar from "../Components/CategoryNavbar";
import api from "../Services/api";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const currentUser = JSON.parse(
          localStorage.getItem("currentUser")
        );

        if (!currentUser) {
          alert("Please Login First");
          navigate("/login");
          return;
        }

        const wishlistResponse =
          await api.get("/wishlist");

        const userWishlist =
          wishlistResponse.data.filter(
            (item) =>
              item.userEmail ===
              currentUser.email
          );

        setWishlist(userWishlist);

        const bookingResponse =
          await api.get("/bookings");

        const userBookings =
          bookingResponse.data.filter(
            (item) =>
              item.userEmail ===
              currentUser.email
          );

        setBookings(userBookings);
      } catch (error) {
        console.log(error);
      }
    };

    loadWishlist();
  }, [navigate]);

  const refreshWishlist = async () => {
    try {
      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      const wishlistResponse =
        await api.get("/wishlist");

      const userWishlist =
        wishlistResponse.data.filter(
          (item) =>
            item.userEmail ===
            currentUser.email
        );

      setWishlist(userWishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(
        `/wishlist/${id}`
      );

      await refreshWishlist();

      alert(
        "Removed From Wishlist"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const bookNow = async (
    item
  ) => {
    try {
      const currentUser =
        JSON.parse(
          localStorage.getItem(
            "currentUser"
          )
        );

      const alreadyBooked =
        bookings.find(
          (booking) =>
            booking.packageName ===
            item.packageName
        );

      if (alreadyBooked) {
        alert(
          "Package Already Booked"
        );
        return;
      }

      await api.post(
        "/bookings/create",
        {
          packageName:
            item.packageName,

          packageImage:
            item.packageImage,

          duration:
            item.duration,

          price:
            item.price,

          userName:
            currentUser.fullname,

          userEmail:
            currentUser.email,

          status: "Pending",

          guideName: "",

          guidePhone: "",

          reason: "",
        }
      );

      const bookingResponse =
        await api.get(
          "/bookings"
        );

      const userBookings =
        bookingResponse.data.filter(
          (item) =>
            item.userEmail ===
            currentUser.email
        );

      setBookings(
        userBookings
      );

      alert(
        "Booking Request Sent Successfully"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const isBooked = (
    packageName
  ) => {
    return bookings.some(
      (booking) =>
        booking.packageName ===
        packageName
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
            <h3>
              No destinations added yet.
            </h3>
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
            {wishlist.map(
              (item) => (
                <div
                  key={item._id}
                  style={{
                    background:
                      "#111",
                    borderRadius:
                      "20px",
                    overflow:
                      "hidden",
                    border:
                      "1px solid #222",
                  }}
                >
                  <img
                    src={
                      item.packageImage
                    }
                    alt={
                      item.packageName
                    }
                    style={{
                      width:
                        "100%",
                      height:
                        "250px",
                      objectFit:
                        "cover",
                    }}
                  />

                  <div
                    style={{
                      padding:
                        "20px",
                    }}
                  >
                    <h3
                      style={{
                        color:
                          "#f4b400",
                      }}
                    >
                      {
                        item.packageName
                      }
                    </h3>

                    <p>
                      {
                        item.duration
                      }
                    </p>

                    <h4
                      style={{
                        color:
                          "#f4b400",
                      }}
                    >
                      {item.price}
                    </h4>

                    <div
                      style={{
                        display:
                          "flex",
                        gap: "10px",
                        marginTop:
                          "15px",
                      }}
                    >
                      {isBooked(
                        item.packageName
                      ) ? (
                        <button
                          disabled
                          style={{
                            flex: 1,
                            background:
                              "#28a745",
                            color:
                              "white",
                            border:
                              "none",
                            padding:
                              "12px",
                            borderRadius:
                              "10px",
                            fontWeight:
                              "bold",
                          }}
                        >
                          Booked ✓
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            bookNow(
                              item
                            )
                          }
                          style={{
                            flex: 1,
                            background:
                              "#f4b400",
                            color:
                              "#000",
                            border:
                              "none",
                            padding:
                              "12px",
                            borderRadius:
                              "10px",
                            fontWeight:
                              "bold",
                            cursor:
                              "pointer",
                          }}
                        >
                          Book Now
                        </button>
                      )}

                      <button
                        onClick={() =>
                          removeItem(
                            item._id
                          )
                        }
                        style={{
                          flex: 1,
                          background:
                            "#dc3545",
                          color:
                            "white",
                          border:
                            "none",
                          padding:
                            "12px",
                          borderRadius:
                            "10px",
                          cursor:
                            "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;