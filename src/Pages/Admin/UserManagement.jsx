import React, {
  useEffect,
  useState,
} from "react";

import api from "../../Services/api";

function UserManagement() {
  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers =
    async () => {
      try {
        const response =
          await api.get(
            "/users"
          );

        console.log(
          "Users:",
          response.data
        );

        setUsers(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const deleteUser =
    async (id) => {
      if (
        !window.confirm(
          "Delete User?"
        )
      )
        return;

      try {
        await api.delete(
          `/users/${id}`
        );

        fetchUsers();

        alert(
          "User Deleted Successfully"
        );
      } catch (error) {
        console.log(error);
      }
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
          Total Users:
          {" "}
          {users.length}
        </h2>
      </div>

      {users.map((user) => (
        <div
          key={user._id}
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>
            {user.fullname}
          </h3>

          <p>
            {user.email}
          </p>

          <button
            style={{
              background:
                "#dc3545",
              color: "white",
              border: "none",
              padding:
                "10px 20px",
              borderRadius:
                "8px",
              cursor:
                "pointer",
            }}
            onClick={() =>
              deleteUser(
                user._id
              )
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