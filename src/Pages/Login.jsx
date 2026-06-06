import React, { useState, useEffect } from "react";
import {  Link, useNavigate,} from "react-router-dom";
import axios from "axios";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    const adminUser = localStorage.getItem("adminUser");

    if (currentUser) {
      navigate("/dashboard");
    }

    if (adminUser) {
      navigate("/admin");
    }
  }, [navigate]);

const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    // Admin Login
    if (
      email === "sri@gmail.com" &&
      password === "Sri@2006"
    ) {
      localStorage.setItem(
        "adminUser",
        JSON.stringify({
          email: "sri@gmail.com",
        })
      );

      alert("Admin Login Successful");

      navigate("/admin");
      return;
    }

    const response = await axios.post(
      "https://tripnest-backend-3.onrender.com/api/users/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(response.data.user)
    );

    alert("Login Successful");

    navigate("/dashboard");
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Invalid Email or Password"
    );
  } finally {
    setLoading(false);
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
    position: "relative",
  }}
>

      <Link
  to="/"
  style={{
    position: "absolute",
    top: "30px",
    left: "30px",
    textDecoration: "none",
  }}
>
  <button
    style={{
      background: "#f4b400",
      color: "#000",
      border: "none",
      padding: "12px 25px",
      borderRadius: "30px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "15px",
      boxShadow:
        "0 0 15px rgba(244,180,0,0.3)",
      transition: "0.3s",
    }}
  >
    ← Home
  </button>
</Link>
      <div
        style={{
          width: "420px",
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
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
          />

      <button
  type="submit"
  disabled={loading}
  style={{
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background: loading
      ? "#888"
      : "#f4b400",
    color: "#000",
    fontWeight: "bold",
    cursor: loading
      ? "not-allowed"
      : "pointer",
    fontSize: "16px",
    transition: "0.3s",
  }}
>
  {loading
    ? "Logging In..."
    : "Login"}
</button>
        </form>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#ccc",
            }}
          >
            Don't have an account?
          </p>

          <Link
            to="/signup"
            style={{
              color: "#f4b400",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;