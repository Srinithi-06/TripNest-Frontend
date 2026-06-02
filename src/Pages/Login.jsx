import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "sri@gmail.com" &&
      password === "Sri@2006"
    ) {
      localStorage.setItem("adminUser", "true");

      alert("Admin Login Successful");

      navigate("/admin");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("tripnestUsers")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (user) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
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
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#f4b400",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
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