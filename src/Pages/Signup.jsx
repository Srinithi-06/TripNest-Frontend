import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/Css/Signup.css";

import signupBg from "../Assets/Images/signup.webp";
import logo from "../Assets/Images/tripnest logo.png";

function Signup() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z ]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!nameRegex.test(fullname)) {
      alert("Name should contain only letters and spaces");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain uppercase, lowercase and number"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let users =
      JSON.parse(localStorage.getItem("tripnestUsers")) || [];

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      alert("Email already registered");
      return;
    }

    const user = {
      fullname,
      email,
      password,
    };

    users.push(user);

    localStorage.setItem(
      "tripnestUsers",
      JSON.stringify(users)
    );

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${signupBg})`,
      }}
    >
      <div className="signup-card">
        <div className="text-center">
          <img
            src={logo}
            alt="TripNest Logo"
            className="logo"
          />

          <h2>Create Account</h2>

          <p>
            Start your travel journey with TripNest
          </p>
        </div>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />

          <p className="message">
            Press the button to enter into the world for exploring happiness.
          </p>

          <button type="submit">
            Signup
          </button>
        </form>

        <div className="login-link">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;