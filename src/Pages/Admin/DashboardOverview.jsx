import React, {  useEffect,  useState,} from "react";
import logo from "../../Assets/Images/tripnest logo.png";

function DashboardOverview() {
  const [packages, setPackages] =
    useState([]);

  const [bookings, setBookings] =
    useState([]);

  const [users, setUsers] =
    useState([]);

  const [customTrips, setCustomTrips] =
    useState([]);
const [selectedCategory, setSelectedCategory] =  useState("All");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    setPackages(
      JSON.parse(
        localStorage.getItem("packages")
      ) || []
    );

    setBookings(
      JSON.parse(
        localStorage.getItem("bookings")
      ) || []
    );

    setUsers(
      JSON.parse(
        localStorage.getItem("tripnestUsers")
      ) || []
    );

    setCustomTrips(
      JSON.parse(
        localStorage.getItem(
          "customTripRequests"
        )
      ) || []
    );
  }, []);

  const filteredPackages =
    packages.filter((pkg) =>
      pkg.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );
    const displayedPackages =
  selectedCategory === "All"
    ? packages
    : packages.filter(
        (pkg) =>
          pkg.category ===
          selectedCategory
      );

  return (
    <>
      {/* Header */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <img
          src={logo}
          alt="TripNest"
          style={{
            width: "80px",
            height: "80px",
          }}
        />

        <div>
          <h1
            style={{
              color: "#f4b400",
              margin: 0,
            }}
          >
            Admin Dashboard
          </h1>

          <p
            style={{
              color: "#ccc",
            }}
          >
            Manage Packages,
            Bookings, Users and
            Custom Trips
          </p>
        </div>
      </div>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Packages</h3>
          <h1>{packages.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <h1>{bookings.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Custom Trips</h3>
          <h1>{customTrips.length}</h1>
        </div>
      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Packages..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        style={searchInput}
      />

      {search && (
        <>
          <h2
            style={{
              color: "#f4b400",
              marginBottom: "20px",
            }}
          >
            Search Results
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {filteredPackages.map(
              (
                pkg,
                index
              ) => (
                <div
                  key={index}
                  style={cardStyle}
                >
                  <h3>
                    {pkg.name}
                  </h3>

                  <p>
                    {
                      pkg.category
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </>
      )}

      {/* Category Statistics */}

     <h2
  style={{
    color: "#f4b400",
    marginBottom: "20px",
  }}
>
  Package Categories
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "40px",
  }}
>
  {[
    "All",
    "International",
    "Family",
    "Friends",
    "Adventure",
    "Honeymoon",
  ].map((category) => (
    <div
      key={category}
      onClick={() =>
        setSelectedCategory(category)
      }
      style={{
        background:
          selectedCategory === category
            ? "#f4b400"
            : "#111",

        color:
          selectedCategory === category
            ? "#000"
            : "#fff",

        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #f4b400",
        transition: "0.3s",
      }}
    >
      <h3>{category}</h3>

      <h2>
        {category === "All"
          ? packages.length
          : packages.filter(
              (pkg) =>
                pkg.category === category
            ).length}
      </h2>
    </div>
  ))}
</div>
  { /*   <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
      
        <div style={cardStyle}>
          <h3>👨‍👩‍👧 Family</h3>
          <h2>
            {
              packages.filter(
                (pkg) =>
                  pkg.category ===
                  "Family"
              ).length
            }
          </h2>
        </div>

        <div style={cardStyle}>
          <h3>🎉 Friends</h3>
          <h2>
            {
              packages.filter(
                (pkg) =>
                  pkg.category ===
                  "Friends"
              ).length
            }
          </h2>
        </div>

        <div style={cardStyle}>
          <h3>🏔 Adventure</h3>
          <h2>
            {
              packages.filter(
                (pkg) =>
                  pkg.category ===
                  "Adventure"
              ).length
            }
          </h2>
        </div>

        <div style={cardStyle}>
          <h3>❤️ Honeymoon</h3>
          <h2>
            {
              packages.filter(
                (pkg) =>
                  pkg.category ===
                  "Honeymoon"
              ).length
            }
          </h2>
        </div>
      </div>*/}

      {/* Available Packages */}

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Available Packages
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
       {displayedPackages.map(
  (pkg, index) => (
            <div
              key={index}
              style={{
                background:
                  "#111",
                borderRadius:
                  "20px",
                overflow:
                  "hidden",
                border:
                  "1px solid #333",
                boxShadow:
                  "0 0 15px rgba(244,180,0,0.15)",
              }}
            >
              {pkg.image && (
                <img
                  src={
                    pkg.image
                  }
                  alt={
                    pkg.name
                  }
                  style={{
                    width:
                      "100%",
                    height:
                      "220px",
                    objectFit:
                      "cover",
                  }}
                />
              )}

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
                    pkg.name
                  }
                </h3>

                <p>
                  <strong>
                    Category:
                  </strong>{" "}
                  {
                    pkg.category
                  }
                </p>

                <p>
                  <strong>
                    Duration:
                  </strong>{" "}
                  {
                    pkg.duration
                  }
                </p>

                <p
                  style={{
                    color:
                      "#ccc",
                  }}
                >
                  {
                    pkg.description
                  }
                </p>

                <h4
                  style={{
                    color:
                      "#28a745",
                  }}
                >
                  {
                    pkg.price
                  }
                </h4>
              </div>
            </div>
          )
        )}
      </div>

      {/* Recent Bookings */}

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Recent Bookings
      </h2>

      {bookings
        .slice(-3)
        .reverse()
        .map(
          (
            booking,
            index
          ) => (
            <div
              key={index}
              style={
                listCard
              }
            >
              <strong>
                {
                  booking.name
                }
              </strong>

              <p>
                {
                  booking.customerName
                }
              </p>

              <p>
                Status:
                {" "}
                {booking.status ||
                  "Pending"}
              </p>
            </div>
          )
        )}

      {/* Recent Custom Trips */}

      <h2
        style={{
          color: "#f4b400",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Recent Custom Trips
      </h2>

      {customTrips
        .slice(-3)
        .reverse()
        .map(
          (
            trip,
            index
          ) => (
            <div
              key={index}
              style={
                listCard
              }
            >
              <strong>
                {
                  trip.destination
                }
              </strong>

              <p>
                {
                  trip.userName
                }
              </p>

              <p>
                Status:
                {" "}
                {trip.status ||
                  "Pending"}
              </p>
            </div>
          )
        )}
    </>
  );
}

const cardStyle = {
  background: "#111",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid #f4b400",
};

const searchInput = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#111",
  color: "white",
  marginBottom: "30px",
};

const listCard = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "15px",
};

export default DashboardOverview;