import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Customize() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
destination: "",
travelers: "",
budget: "",
travelDate: "",
requests: "",
});

useEffect(() => {
const currentUser = JSON.parse(
localStorage.getItem("currentUser")
);


if (!currentUser) {
  alert("Please Login First");
  navigate("/login");
}

}, [navigate]);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const submitRequest = (e) => {
e.preventDefault();


const existingRequests =
  JSON.parse(
    localStorage.getItem("customTripRequests")
  ) || [];

existingRequests.push(formData);

localStorage.setItem(
  "customTripRequests",
  JSON.stringify(existingRequests)
);

alert(
  "Your custom trip request has been submitted successfully."
);

setFormData({
  destination: "",
  travelers: "",
  budget: "",
  travelDate: "",
  requests: "",
});


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
fontSize: "55px",
marginBottom: "20px",
}}
>
Customize Your Trip </h1>


  <p
    style={{
      textAlign: "center",
      color: "#ccc",
      marginBottom: "50px",
    }}
  >
    Tell us your requirements and we'll design
    your dream vacation.
  </p>

  <form
    onSubmit={submitRequest}
    style={{
      maxWidth: "800px",
      margin: "auto",
      background: "#111",
      padding: "40px",
      borderRadius: "20px",
      border: "1px solid #f4b400",
    }}
  >
    <input
      type="text"
      name="destination"
      placeholder="Preferred Destination"
      value={formData.destination}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <input
      type="number"
      name="travelers"
      placeholder="Number of Travelers"
      value={formData.travelers}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <input
      type="text"
      name="budget"
      placeholder="Budget"
      value={formData.budget}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <input
      type="date"
      name="travelDate"
      value={formData.travelDate}
      onChange={handleChange}
      required
      style={inputStyle}
    />

    <textarea
      name="requests"
      placeholder="Special Requests"
      rows="5"
      value={formData.requests}
      onChange={handleChange}
      style={inputStyle}
    />

    <button
      type="submit"
      style={{
        width: "100%",
        background: "#f4b400",
        color: "#000",
        border: "none",
        padding: "15px",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "15px",
      }}
    >
      Submit Request
    </button>
  </form>
</div>


);
}

const inputStyle = {
width: "100%",
padding: "15px",
marginBottom: "15px",
borderRadius: "10px",
border: "1px solid #333",
background: "#222",
color: "white",
};

export default Customize;
