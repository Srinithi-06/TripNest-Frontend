import React from "react";
import api from "../Services/api";

function PackageCard({
  image,
  name,
  duration,
  description,
  price,
}) {
  const addToWishlist = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      alert(
        "Please login to add packages to wishlist"
      );
      window.location.href = "/login";
      return;
    }

    try {
      const response =
        await api.get("/wishlist");

      const exists =
        response.data.find(
          (item) =>
            item.packageName ===
              name &&
            item.userEmail ===
              currentUser.email
        );

      if (exists) {
        alert(
          "Already in Wishlist"
        );
        return;
      }

      await api.post(
        "/wishlist/add",
        {
          packageName: name,
          packageImage: image,
          duration,
          price,
          userName:
            currentUser.fullname,
          userEmail:
            currentUser.email,
        }
      );

      alert(
        "Added To Wishlist Successfully"
      );
    } catch (error) {
      console.log(error);
      alert(
        "Failed To Add Wishlist"
      );
    }
  };

  const bookNow = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      alert(
        "Please login to book a package"
      );
      window.location.href = "/login";
      return;
    }

    try {
      const response =
        await api.get("/bookings");

      const exists =
        response.data.find(
          (item) =>
            item.packageName ===
              name &&
            item.userEmail ===
              currentUser.email
        );

      if (exists) {
        alert(
          "Package Already Booked"
        );
        return;
      }

      await api.post(
        "/bookings/create",
        {
          packageName: name,
          packageImage: image,
          duration,
          price,
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

      alert(
        "Booking Request Sent Successfully"
      );
    } catch (error) {
      console.log(error);
      alert(
        "Booking Failed"
      );
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#111,#181818)",
        borderRadius: "25px",
        overflow: "hidden",
        border:
          "1px solid rgba(244,180,0,0.15)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.4)",
        transition: "0.4s",
      }}
    >
      <img
        src={image}
        alt={name}
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
          {name}
        </h3>

        <p>{duration}</p>

        <p>{description}</p>

        <h4
          style={{
            color: "#f4b400",
          }}
        >
          {price}
        </h4>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <button
            onClick={bookNow}
            style={{
              flex: 1,
              background: "#f4b400",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>

          <button
            onClick={addToWishlist}
            style={{
              flex: 1,
              background: "transparent",
              color: "#f4b400",
              border:
                "1px solid #f4b400",
              padding: "12px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;