import React from "react";

function PackageCard({
  image,
  name,
  duration,
  description,
  price,
}) {

  const addToWishlist = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      alert("Please login to add packages to wishlist");
      window.location.href = "/login";
      return;
    }

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

   const exists = wishlist.find(
  (item) =>
    item.name === name &&
    item.userEmail === currentUser.email
);

    if (exists) {
      alert("Already in Wishlist");
      return;
    }

    wishlist.push({
  userEmail: currentUser.email,
  image,
  name,
  duration,
  description,
  price,
});
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added to Wishlist");
  };

  const bookNow = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      alert("Please login to book a package");
      window.location.href = "/login";
      return;
    }

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

      bookings.push({
  userEmail: currentUser.email,
  customerName: currentUser.fullname,
  customerEmail: currentUser.email,
  image,
  name,
  duration,
  description,
  price,
  status: "Pending",
  guideName: "",
  guidePhone: "",
  reason: "",
});


    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("Booking Request Sent");
  };

  return (
    <div
      style={{
        background: "#111",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid #222",
        transition: "0.3s",
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

      <div style={{ padding: "20px" }}>
        <h3 style={{ color: "#f4b400" }}>
          {name}
        </h3>

        <p>{duration}</p>

        <p>{description}</p>

        <h4 style={{ color: "#f4b400" }}>
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
              border: "1px solid #f4b400",
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