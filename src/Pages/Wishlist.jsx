import React, { useState, useEffect } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  const removeItem = (index) => {
    const updatedWishlist = [...wishlist];

    updatedWishlist.splice(index, 1);

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
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

                <h4
                  style={{
                    color: "#f4b400",
                  }}
                >
                  {item.price}
                </h4>

                <button
                  onClick={() => removeItem(index)}
                  style={{
                    width: "100%",
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;