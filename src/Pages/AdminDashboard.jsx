import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [customTrips, setCustomTrips] = useState([]);
  const [packages, setPackages] = useState([]);
  const [users, setUsers] = useState([]);

  const [newPackage, setNewPackage] = useState({
    name: "",
    duration: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const storedTrips =
      JSON.parse(localStorage.getItem("customTripRequests")) || [];

    const storedPackages =
      JSON.parse(localStorage.getItem("packages")) || [];

    const storedUsers =
      JSON.parse(localStorage.getItem("tripnestUsers")) || [];

    setBookings(storedBookings);
    setCustomTrips(storedTrips);
    setPackages(storedPackages);
    setUsers(storedUsers);
  };

  const approveBooking = (index) => {
    const updatedBookings = [...bookings];

    updatedBookings[index].status = "Approved";
    updatedBookings[index].reason = "";

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);

    alert("Booking Approved");
  };

  const rejectBooking = (index) => {
    const reason = prompt("Enter rejection reason");

    if (!reason) return;

    const updatedBookings = [...bookings];

    updatedBookings[index].status = "Rejected";
    updatedBookings[index].reason = reason;

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);

    alert("Booking Rejected");
  };

  const deleteCustomTrip = (index) => {
    const updatedTrips = [...customTrips];

    updatedTrips.splice(index, 1);

    localStorage.setItem(
      "customTripRequests",
      JSON.stringify(updatedTrips)
    );

    setCustomTrips(updatedTrips);
  };

  const addPackage = () => {
    if (
      !newPackage.name ||
      !newPackage.duration ||
      !newPackage.price
    ) {
      alert("Fill all required fields");
      return;
    }

    const updatedPackages = [
      ...packages,
      newPackage,
    ];

    setPackages(updatedPackages);

    localStorage.setItem(
      "packages",
      JSON.stringify(updatedPackages)
    );

    setNewPackage({
      name: "",
      duration: "",
      price: "",
      description: "",
      image: "",
    });

    alert("Package Added Successfully");
  };

  const deletePackage = (index) => {
    const updatedPackages = [...packages];

    updatedPackages.splice(index, 1);

    setPackages(updatedPackages);

    localStorage.setItem(
      "packages",
      JSON.stringify(updatedPackages)
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

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#f4b400",
          marginBottom: "50px",
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <h1>{bookings.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Custom Requests</h3>
          <h1>{customTrips.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Packages</h3>
          <h1>{packages.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Registered Users</h3>
          <h1>{users.length}</h1>
        </div>
      </div>

      <h2 style={sectionTitle}>
        Package Management
      </h2>

      <div style={formCard}>
        <input
          style={inputStyle}
          placeholder="Package Name"
          value={newPackage.name}
          onChange={(e) =>
            setNewPackage({
              ...newPackage,
              name: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Duration"
          value={newPackage.duration}
          onChange={(e) =>
            setNewPackage({
              ...newPackage,
              duration: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Price"
          value={newPackage.price}
          onChange={(e) =>
            setNewPackage({
              ...newPackage,
              price: e.target.value,
            })
          }
        />

        <textarea
          style={inputStyle}
          placeholder="Description"
          value={newPackage.description}
          onChange={(e) =>
            setNewPackage({
              ...newPackage,
              description: e.target.value,
            })
          }
        />

        <button
          style={approveBtn}
          onClick={addPackage}
        >
          Add Package
        </button>
      </div>

      {packages.map((pkg, index) => (
        <div key={index} style={boxStyle}>
          <h3>{pkg.name}</h3>
          <p>{pkg.duration}</p>
          <p>{pkg.price}</p>

          <button
            style={rejectBtn}
            onClick={() =>
              deletePackage(index)
            }
          >
            Delete Package
          </button>
        </div>
      ))}

      <h2 style={sectionTitle}>
        Booking Requests
      </h2>

      {bookings.map((booking, index) => (
        <div key={index} style={boxStyle}>
          <h3>{booking.name}</h3>

          <p>{booking.price}</p>

          <p>
            Status:
            {" "}
            {booking.status || "Pending"}
          </p>

          {booking.reason && (
            <p>
              Reason:
              {" "}
              {booking.reason}
            </p>
          )}

          {booking.status !== "Approved" && (
            <button
              style={approveBtn}
              onClick={() =>
                approveBooking(index)
              }
            >
              Approve
            </button>
          )}

          {booking.status !== "Rejected" && (
            <button
              style={rejectBtn}
              onClick={() =>
                rejectBooking(index)
              }
            >
              Reject
            </button>
          )}
        </div>
      ))}

      <h2 style={sectionTitle}>
        Custom Trip Requests
      </h2>

      {customTrips.map((trip, index) => (
        <div key={index} style={boxStyle}>
          <h3>{trip.destination}</h3>

          <p>Travelers: {trip.travelers}</p>

          <p>Budget: {trip.budget}</p>

          <p>Date: {trip.travelDate}</p>

          <p>{trip.requests}</p>

          <button
            style={rejectBtn}
            onClick={() =>
              deleteCustomTrip(index)
            }
          >
            Delete Request
          </button>
        </div>
      ))}

      <h2 style={sectionTitle}>
        Registered Users
      </h2>

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
    </div>
  );
}

const sectionTitle = {
  color: "#f4b400",
  marginTop: "50px",
  marginBottom: "20px",
};

const cardStyle = {
  background: "#111",
  padding: "30px",
  borderRadius: "20px",
  textAlign: "center",
  border: "1px solid #f4b400",
};

const boxStyle = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "15px",
};

const formCard = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "30px",
};

const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  padding: "12px",
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
  marginRight: "10px",
  cursor: "pointer",
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