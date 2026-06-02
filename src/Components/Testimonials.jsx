import React from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Kumar",
      review:
        "TripNest made our honeymoon trip unforgettable. Everything was perfectly planned.",
    },
    {
      name: "Priya Sharma",
      review:
        "Excellent customer support and amazing destinations. Highly recommended.",
    },
    {
      name: "Arjun Patel",
      review:
        "The customized package was exactly what we needed. Great experience.",
    },
  ];

  return (
    <section
      style={{
        background: "#111",
        padding: "100px 8%",
      }}
    >
      <h2
        style={{
          color: "#f4b400",
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "60px",
        }}
      >
        What Our Travelers Say
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              color: "white",
              border: "1px solid #f4b400",
            }}
          >
            <h3
              style={{
                color: "#f4b400",
                marginBottom: "15px",
              }}
            >
              {item.name}
            </h3>

            <p>{item.review}</p>

            <div
              style={{
                marginTop: "15px",
                color: "#f4b400",
              }}
            >
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;