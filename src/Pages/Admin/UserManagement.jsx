import React, { useEffect, useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers =
      JSON.parse(
        localStorage.getItem("tripnestUsers")
      ) || [];

    setUsers(storedUsers);
  }, []);

  const deleteUser = (index) => {
    if (!window.confirm("Delete User?"))
      return;

    const updatedUsers = [...users];

    updatedUsers.splice(index, 1);

    setUsers(updatedUsers);

    localStorage.setItem(
      "tripnestUsers",
      JSON.stringify(updatedUsers)
    );
  };

  return (
    <>
      <h1
        style={{
          color: "#f4b400",
          marginBottom: "30px",
        }}
      >
        User Management
      </h1>

      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h2>
          Total Users: {users.length}
        </h2>
      </div>

      {users.map((user, index) => (
        <div
          key={index}
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{user.fullname}</h3>

          <p>{user.email}</p>

          <button
            style={{
              background: "#dc3545",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() =>
              deleteUser(index)
            }
          >
            Delete User
          </button>
        </div>
      ))}
    </>
  );
}

export default UserManagement;