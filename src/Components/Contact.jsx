import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#111",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#f4b400",
          fontSize: "45px",
          marginBottom: "50px",
        }}
      >
        Contact Us
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>Email</h3>
          <p>support@tripnest.com</p>
        </div>

        <div style={cardStyle}>
          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div style={cardStyle}>
          <h3>Location</h3>
          <p>Chennai, Tamil Nadu</p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#181818",
  padding: "30px",
  borderRadius: "20px",
  textAlign: "center",
};

export default Contact;