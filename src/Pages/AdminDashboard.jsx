import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] =
    useState("dashboard");

  const [bookings, setBookings] = useState([]);
  const [customTrips, setCustomTrips] = useState([]);
  const [packages, setPackages] = useState([]);
  const [users, setUsers] = useState([]);

  const [editingIndex, setEditingIndex] =
    useState(null);

  const [newPackage, setNewPackage] = useState({
    name: "",
    category: "",
    duration: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setBookings(
      JSON.parse(localStorage.getItem("bookings")) ||
        []
    );

    setCustomTrips(
      JSON.parse(
        localStorage.getItem("customTripRequests")
      ) || []
    );

    setPackages(
      JSON.parse(localStorage.getItem("packages")) ||
        []
    );

    setUsers(
      JSON.parse(
        localStorage.getItem("tripnestUsers")
      ) || []
    );
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const addPackage = () => {
    if (
      !newPackage.name ||
      !newPackage.category ||
      !newPackage.duration ||
      !newPackage.price
    ) {
      alert("Fill all required fields");
      return;
    }

    let updatedPackages = [...packages];

    if (editingIndex !== null) {
      updatedPackages[editingIndex] = newPackage;

      alert("Package Updated");
    } else {
      updatedPackages.push(newPackage);

      alert("Package Added");
    }

    setPackages(updatedPackages);

    localStorage.setItem(
      "packages",
      JSON.stringify(updatedPackages)
    );

    setNewPackage({
      name: "",
      category: "",
      duration: "",
      price: "",
      description: "",
      image: "",
    });

    setEditingIndex(null);
  };

  const editPackage = (index) => {
    setNewPackage(packages[index]);

    setEditingIndex(index);

    setActiveSection("packages");
  };
  const approveBooking = (index) => {
  const guideName = prompt("Enter Guide Name");

  if (!guideName) return;

  const guidePhone = prompt(
    "Enter Guide Mobile Number"
  );

  if (!guidePhone) return;

  const updatedBookings = [...bookings];

  updatedBookings[index].status = "Approved";
  updatedBookings[index].guideName = guideName;
  updatedBookings[index].guidePhone = guidePhone;
  updatedBookings[index].reason = "";

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  alert("Booking Approved");
};

const rejectBooking = (index) => {
  const reason = prompt(
    "Enter Rejection Reason"
  );

  if (!reason) return;

  const updatedBookings = [...bookings];

  updatedBookings[index].status = "Rejected";
  updatedBookings[index].reason = reason;

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  alert("Booking Rejected");
};

const deleteCustomTrip = (index) => {
  const updatedTrips = [...customTrips];

  updatedTrips.splice(index, 1);

  setCustomTrips(updatedTrips);

  localStorage.setItem(
    "customTripRequests",
    JSON.stringify(updatedTrips)
  );
};

const deleteUser = (index) => {
  const updatedUsers = [...users];

  updatedUsers.splice(index, 1);

  setUsers(updatedUsers);

  localStorage.setItem(
    "tripnestUsers",
    JSON.stringify(updatedUsers)
  );
};

const deletePackage = (index) => {
  if (
    !window.confirm(
      "Delete this package?"
    )
  )
    return;

  const updatedPackages = [...packages];

  updatedPackages.splice(index, 1);

  setPackages(updatedPackages);

  localStorage.setItem(
    "packages",
    JSON.stringify(updatedPackages)
  );
};

  return (
    <div
      style={{
        display: "flex",
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Sidebar */}

      <div
        style={{
          width: "280px",
          background: "#111",
          padding: "30px 20px",
          borderRight:
            "2px solid #f4b400",
        }}
      >
        <h1
          style={{
            color: "#f4b400",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          TripNest Admin
        </h1>

        <button
          style={sidebarBtn}
          onClick={() =>
            setActiveSection(
              "dashboard"
            )
          }
        >
          Dashboard
        </button>

        <button
          style={sidebarBtn}
          onClick={() =>
            setActiveSection(
              "packages"
            )
          }
        >
          Package Management
        </button>

        <button
          style={sidebarBtn}
          onClick={() =>
            setActiveSection(
              "bookings"
            )
          }
        >
          Booking Requests
        </button>

        <button
          style={sidebarBtn}
          onClick={() =>
            setActiveSection(
              "customTrips"
            )
          }
        >
          Custom Trips
        </button>

        <button
          style={sidebarBtn}
          onClick={() =>
            setActiveSection("users")
          }
        >
          Users
        </button>

        <button
          style={{
            ...sidebarBtn,
            background: "#dc3545",
            marginTop: "50px",
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          padding: "40px",
          
        }}
      >
        {/* DASHBOARD */}

        {activeSection ===
          "dashboard" && (
          <>
            <h1
              style={{
                color: "#f4b400",
                marginBottom: "40px",
              }}
            >
              Dashboard Overview
            </h1>
              
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(250px,1fr))",
                gap: "25px",
              }}
            >
              <div style={cardStyle}>
                <h3>
                  Total Packages
                </h3>
                <h1>
                  {packages.length}
                </h1>
              </div>

              <div style={cardStyle}>
                <h3>
                  Total Bookings
                </h3>
                <h1>
                  {bookings.length}
                </h1>
              </div>

              <div style={cardStyle}>
                <h3>
                  Registered Users
                </h3>
                <h1>
                  {users.length}
                </h1>
              </div>

              <div style={cardStyle}>
                <h3>
                  Custom Requests
                </h3>
                <h1>
                  {
                    customTrips.length
                  }
                </h1>
              </div>
            </div>
          </>
        )}
        {/* BOOKING REQUESTS */}

{activeSection === "bookings" && (
  <>
    <h1 style={{ color: "#f4b400" }}>
      Booking Requests
    </h1>

    {bookings.map((booking, index) => (
      <div key={index} style={boxStyle}>
        <h3>{booking.name}</h3>

        <p>
          Customer: {booking.customerName}
        </p>

        <p>
          Email: {booking.customerEmail}
        </p>

        <p>
          Price: {booking.price}
        </p>

        <p>
          Status: {booking.status}
        </p>

        {booking.reason && (
          <p>
            Reason: {booking.reason}
          </p>
        )}

        {booking.guideName && (
          <p>
            Guide: {booking.guideName}
          </p>
        )}

        {booking.guidePhone && (
          <p>
            Mobile: {booking.guidePhone}
          </p>
        )}

        <button
          style={approveBtn}
          onClick={() =>
            approveBooking(index)
          }
        >
          Approve
        </button>

        <button
          style={rejectBtn}
          onClick={() =>
            rejectBooking(index)
          }
        >
          Reject
        </button>
      </div>
    ))}
  </>
)}

{/* CUSTOM TRIPS */}

{activeSection === "customTrips" && (
  <>
    <h1 style={{ color: "#f4b400" }}>
      Custom Trip Requests
    </h1>

    {customTrips.map((trip, index) => (
      <div key={index} style={boxStyle}>
        <h3>{trip.destination}</h3>

        <p>
          Travelers: {trip.travelers}
        </p>

        <p>
          Budget: {trip.budget}
        </p>

        <p>
          Date: {trip.travelDate}
        </p>

        <p>{trip.requests}</p>

        <button
          style={rejectBtn}
          onClick={() =>
            deleteCustomTrip(index)
          }
        >
          Delete
        </button>
      </div>
    ))}
  </>
)}

{/* USERS */}

{activeSection === "users" && (
  <>
    <h1 style={{ color: "#f4b400" }}>
      Registered Users
    </h1>

    {users.map((user, index) => (
      <div key={index} style={boxStyle}>
        <h3>{user.fullname}</h3>

        <p>{user.email}</p>

        <button
          style={rejectBtn}
          onClick={() =>
            deleteUser(index)
          }
        >
          Delete User
        </button>
      </div>
    ))}
  </>
)}

        {/* PACKAGE MANAGEMENT */}

        {activeSection ===
          "packages" && (
          <>
            <h1
              style={{
                color: "#f4b400",
                marginBottom: "25px",
              }}
            >
              Package Management
            </h1>

            <div
              style={formCard}
            >
              <input
                style={
                  inputStyle
                }
                placeholder="Package Name"
                value={
                  newPackage.name
                }
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    name:
                      e.target
                        .value,
                  })
                }
              />

              <select
                style={
                  inputStyle
                }
                value={
                  newPackage.category
                }
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    category:
                      e.target
                        .value,
                  })
                }
              >
                <option value="">
                  Select Category
                </option>

                <option>
                  International
                </option>

                <option>
                  Family
                </option>

                <option>
                  Friends
                </option>

                <option>
                  Adventure
                </option>

                <option>
                  Honeymoon
                </option>
              </select>

              <input
                style={
                  inputStyle
                }
                placeholder="Duration"
                value={
                  newPackage.duration
                }
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    duration:
                      e.target
                        .value,
                  })
                }
              />

              <input
                style={
                  inputStyle
                }
                placeholder="Price"
                value={
                  newPackage.price
                }
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    price:
                      e.target
                        .value,
                  })
                }
              />

              <input
                style={
                  inputStyle
                }
                placeholder="Image URL"
                value={
                  newPackage.image
                }
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    image:
                      e.target
                        .value,
                  })
                }
              />

              <textarea
                style={
                  inputStyle
                }
                placeholder="Description"
                value={
                  newPackage.description
                }
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    description:
                      e.target
                        .value,
                  })
                }
              />

              <button
                style={
                  approveBtn
                }
                onClick={
                  addPackage
                }
              >
                {editingIndex !==
                null
                  ? "Update Package"
                  : "Add Package"}
              </button>
            </div>

            <h2
              style={{
                color: "#f4b400",
                marginBottom:
                  "25px",
              }}
            >
              Package History
            </h2>

            {packages.map(
              (
                pkg,
                index
              ) => (
                <div
                  key={index}
                  style={
                    boxStyle
                  }
                >
                  <h3>
                    {pkg.name}
                  </h3>

                  <p>
                    Category:
                    {
                      pkg.category
                    }
                  </p>

                  <p>
                    Duration:
                    {
                      pkg.duration
                    }
                  </p>

                  <p>
                    Price:
                    {
                      pkg.price
                    }
                  </p>

                  <p>
                    {
                      pkg.description
                    }
                  </p>

                  <button
                    style={
                      approveBtn
                    }
                    onClick={() =>
                      editPackage(
                        index
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    style={
                      rejectBtn
                    }
                    onClick={() =>
                      deletePackage(
                        index
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}

const sidebarBtn = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#222",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const cardStyle = {
  background: "#111",
  padding: "30px",
  borderRadius: "20px",
  textAlign: "center",
  border: "1px solid #f4b400",
};

const formCard = {
  background: "#111",
  padding: "25px",
  borderRadius: "20px",
  marginBottom: "40px",
};

const boxStyle = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#222",
  color: "white",
};

const approveBtn = {
  background: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const rejectBtn = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default AdminDashboard;