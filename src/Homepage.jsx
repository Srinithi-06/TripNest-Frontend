import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Homepage() {
  const logout = () => {
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              className="logo me-3"
              src="images/tripnest logo.png"
              alt="TripNest Logo"
            />

            <Link
              to="/dashboard"
              className="navbar-brand text-warning fw-bold fs-3 text-decoration-none"
            >
              TripNest
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link active text-white fw-semibold"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/packages"
                  className="nav-link text-white fw-semibold"
                >
                  Packages
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/customize"
                  className="nav-link text-white fw-semibold"
                >
                  Customize
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/wishlist"
                  className="nav-link text-white fw-semibold"
                >
                  Wishlist
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/mybookings"
                  className="nav-link text-white fw-semibold"
                >
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          <button className="btn btn-warning px-4 fw-semibold" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>

      <section className="welcome-section">
        <div className="container text-center">
          <h1>Explore Your Dream Destinations</h1>

          <p>
            Discover beautiful places, plan exciting adventures, and enjoy
            unforgettable travel experiences with TripNest.
          </p>

          <Link to="/packages">
            <button className="btn btn-warning px-4 py-2 fw-semibold mt-3">
              Start Exploring
            </button>
          </Link>
        </div>
      </section>
      <section className="places-section py-5">
        <div className="container">
          <h2 className="text-center text-warning fw-bold mb-5">
            Popular Destinations
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card place-card">
                <img
                  src="Assets/Images/paris.webp"
                  className="card-img-top"
                  alt="Paris"
                />
                <div className="card-body text-center">
                  <h3>Paris</h3>
                  <p>
                    Experience the beauty of the Eiffel Tower and romantic
                    streets.
                  </p>
                  <button className="btn btn-warning">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-center text-white py-3">
        <p className="mb-0">
          © 2026 TripNest | Designed For Travelers Around The World
        </p>
      </footer>
    </>
  );
}

export default Homepage;
