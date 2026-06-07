import React, { useEffect, useState } from "react";
import api from "../../Services/api";

function CustomTripRequests() {
const [customTrips, setCustomTrips] =
useState([]);

const [search, setSearch] =
useState("");

useEffect(() => {
  fetchTrips();
}, []);

const fetchTrips = async () => {
  try {
    const response =
      await api.get(
        "/customtrips"
      );

    console.log(
      "Trips:",
      response.data
    );

    setCustomTrips(
      response.data
    );
  } catch (error) {
    console.log(error);
  }
};

const approveTrip = async (
  index
) => {
  const guideName = prompt(
    "Enter Guide Name"
  );

  if (!guideName) return;

  const guidePhone = prompt(
    "Enter Guide Mobile Number"
  );

  if (!guidePhone) return;

  try {
    await api.put(
      `/customtrips/approve/${customTrips[index]._id}`,
      {
        guideName,
        guidePhone,
      }
    );

    fetchTrips();

    alert(
      "Trip Approved"
    );
  } catch (error) {
    console.log(error);
  }
};

const rejectTrip = async (
  index
) => {
  const reason = prompt(
    "Enter Rejection Reason"
  );

  if (!reason) return;

  try {
    await api.put(
      `/customtrips/reject/${customTrips[index]._id}`,
      {
        reason,
      }
    );

    fetchTrips();

    alert(
      "Trip Rejected"
    );
  } catch (error) {
    console.log(error);
  }
};

const filteredTrips =
  customTrips.filter((trip) =>
    (trip.destination || "")
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

console.log(customTrips);

console.log("Custom Trips State:", customTrips);


console.log(
  "Filtered Trips:",
  filteredTrips
);

return (
<>
<h1
style={{
color: "#f4b400",
marginBottom: "25px",
}}
>
Custom Trip Requests </h1>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      marginBottom: "30px",
    }}
  >
    <div style={statCard}>
      <h3>Total Requests</h3>
      <h1>
        {customTrips.length}
      </h1>
    </div>

    <div style={statCard}>
      <h3>Approved</h3>
      <h1>
        {
          customTrips.filter(
            (trip) =>
              trip.status ===
              "Approved"
          ).length
        }
      </h1>
    </div>

    <div style={statCard}>
      <h3>Rejected</h3>
      <h1>
        {
          customTrips.filter(
            (trip) =>
              trip.status ===
              "Rejected"
          ).length
        }
      </h1>
    </div>

    <div style={statCard}>
      <h3>Pending</h3>
      <h1>
        {
          customTrips.filter(
            (trip) =>
              trip.status === "Pending" ||
              !trip.status
          ).length
        }
      </h1>
    </div>
  </div>

  <input
    type="text"
    placeholder="Search Destination..."
    value={search}
    onChange={(e) =>
      setSearch(
        e.target.value
      )
    }
    style={searchInput}
  />

  {filteredTrips.map(
    (trip, index) => (
      <div
        key={trip._id}
        style={{
          ...cardStyle,

          border:
            trip.status ===
            "Approved"
              ? "2px solid #28a745"
              : trip.status ===
                "Rejected"
              ? "2px solid #dc3545"
              : "2px solid #ffc107",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <h2>
            {
              trip.destination
            }
          </h2>

          <span
            style={{
              background:
                trip.status ===
                "Approved"
                  ? "#28a745"
                  : trip.status ===
                    "Rejected"
                  ? "#dc3545"
                  : "#ffc107",

              color:
                trip.status
                  ? "#fff"
                  : "#000",

              padding:
                "8px 15px",

              borderRadius:
                "20px",
            }}
          >
            {trip.status ||
              "Pending"}
          </span>
        </div>

        <p>
          <strong>
            User Name:
          </strong>{" "}
         {trip.userName || "Not Available"}
        </p>

        <p>
          <strong>
            User Email:
          </strong>{" "}
          {trip.userEmail || "Not Available"}
        </p>

        <p>
          <strong>
            Travelers:
          </strong>{" "}
          {
            trip.travelers
          }
        </p>

        <p>
          <strong>
            Budget:
          </strong>{" "}
          {trip.budget}
        </p>

        <p>
          <strong>
            Travel Date:
          </strong>{" "}
          {trip.travelDate || "Not Specified"}
        </p>

        <p>
          <strong>
            Special Requests:
          </strong>{" "}
          {trip.requests || "No Requests"}
        </p>

        {trip.guideName && (
          <p>
            <strong>
              Guide Name:
            </strong>{" "}
            {
              trip.guideName
            }
          </p>
        )}

        {trip.guidePhone && (
          <p>
            <strong>
              Guide Mobile:
            </strong>{" "}
            {
              trip.guidePhone
            }
          </p>
        )}

        {trip.message && (
          <p
            style={{
              marginTop:
                "15px",

              color:
                trip.status ===
                "Approved"
                  ? "#28a745"
                  : "#dc3545",
            }}
          >
            <strong>
              Message:
            </strong>{" "}
            {
              trip.message
            }
          </p>
        )}

        {(trip.status === "Pending" || !trip.status) && (
          <>
            <button
              style={
                approveBtn
              }
              onClick={() =>
                approveTrip(
                  index
                )
              }
            >
              Accept
            </button>

            <button
              style={
                rejectBtn
              }
              onClick={() =>
                rejectTrip(
                  index
                )
              }
            >
              Reject
            </button>
          </>
        )}
      </div>
    )
  )}
</>


);
}

const statCard = {
background: "#111",
padding: "20px",
borderRadius: "15px",
textAlign: "center",
border: "1px solid #f4b400",
};

const searchInput = {
width: "100%",
padding: "14px",
borderRadius: "10px",
border: "1px solid #333",
background: "#111",
color: "white",
marginBottom: "30px",
};

const cardStyle = {
background: "#111",
padding: "25px",
borderRadius: "20px",
marginBottom: "20px",
};

const approveBtn = {
background: "#28a745",
color: "white",
border: "none",
padding: "10px 20px",
borderRadius: "8px",
cursor: "pointer",
marginRight: "10px",
marginTop: "15px",
};

const rejectBtn = {
background: "#dc3545",
color: "white",
border: "none",
padding: "10px 20px",
borderRadius: "8px",
cursor: "pointer",
};

export default CustomTripRequests;
