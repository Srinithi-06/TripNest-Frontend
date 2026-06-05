import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleSignup = async (e) => {
  e.preventDefault();

  const nameRegex = /^[A-Za-z ]{3,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!nameRegex.test(fullname)) {
    alert(
      "Name should contain only letters and spaces"
    );
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

  try {
    const response = await axios.post(
      "https://tripnest-backend-3.onrender.com/api/users/signup",
      {
        fullname,
        email,
        password,
      }
    );

    alert(response.data.message);

    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Signup Failed"
    );
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid #f4b400",
          boxShadow:
            "0 0 30px rgba(244,180,0,0.25)",
        }}
      >
        <h1
          style={{
            color: "#f4b400",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          TripNest
        </h1>

        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#f4b400",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Signup
          </button>
        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <span style={{ color: "#fff" }}>
            Already have an account?
          </span>

          <Link
            to="/login"
            style={{
              color: "#f4b400",
              marginLeft: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
};

export default Signup;