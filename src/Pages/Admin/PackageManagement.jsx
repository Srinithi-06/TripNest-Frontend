import React, { useState, useEffect } from "react";
import api from "../../Services/api"
function PackageManagement() {
  const [packages, setPackages] = useState([]);

  const [editingIndex, setEditingIndex] =
    useState(null);

  const [newPackage, setNewPackage] =
    useState({
      name: "",
      category: "",
      duration: "",
      price: "",
      description: "",
      image: "",
    });

useEffect(() => {
  fetchPackages();
}, []);

const fetchPackages = async () => {
  try {
    const response =
      await api.get("/packages");

    setPackages(response.data);
  } catch (error) {
    console.log(error);
  }
};

const savePackage = async () => {
  if (
    !newPackage.name ||
    !newPackage.category ||
    !newPackage.duration ||
    !newPackage.price
  ) {
    alert("Fill all required fields");
    return;
  }

  try {
    if (editingIndex !== null) {
      await api.put(
        `/packages/${packages[editingIndex]._id}`,
        newPackage
      );

      alert("Package Updated");
    } else {
      await api.post(
        "/packages/add",
        newPackage
      );

      alert("Package Added");
    }

    fetchPackages();

    setNewPackage({
      name: "",
      category: "",
      duration: "",
      price: "",
      description: "",
      image: "",
    });

    setEditingIndex(null);
  } catch (error) {
    console.log(error);
  }
};

  const editPackage = (index) => {
    setNewPackage(packages[index]);
    setEditingIndex(index);
  };

  const deletePackage = async (
  index
) => {
  if (
    !window.confirm(
      "Delete Package?"
    )
  )
    return;

  try {
    await api.delete(
      `/packages/${packages[index]._id}`
    );

    fetchPackages();

    alert(
      "Package Deleted Successfully"
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
          marginBottom: "25px",
        }}
      >
        Package Management
      </h1>

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

        <select
          style={inputStyle}
          value={newPackage.category}
          onChange={(e) =>
            setNewPackage({
              ...newPackage,
              category: e.target.value,
            })
          }
        >
          <option value="">
            Select Category
          </option>

          <option>International</option>
          <option>Family</option>
          <option>Friends</option>
          <option>Adventure</option>
          <option>Honeymoon</option>
        </select>

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

        <input
          style={inputStyle}
          placeholder="Image URL"
          value={newPackage.image}
          onChange={(e) =>
            setNewPackage({
              ...newPackage,
              image: e.target.value,
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
              description:
                e.target.value,
            })
          }
        />

        <button
          style={saveBtn}
          onClick={savePackage}
        >
          {editingIndex !== null
            ? "Update Package"
            : "Add Package"}
        </button>
      </div>

      <h2
        style={{
          color: "#f4b400",
          marginBottom: "20px",
        }}
      >
        Package History
      </h2>

      {packages.map((pkg, index) => (
        <div key={index} style={boxStyle}>
          <h3>{pkg.name}</h3>

          <p>
            Category: {pkg.category}
          </p>

          <p>
            Duration: {pkg.duration}
          </p>

          <p>
            Price: {pkg.price}
          </p>

          <button
            style={editBtn}
            onClick={() =>
              editPackage(index)
            }
          >
            Edit
          </button>

          <button
            style={deleteBtn}
            onClick={() =>
              deletePackage(index)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

const formCard = {
  background: "#111",
  padding: "25px",
  borderRadius: "15px",
  marginBottom: "40px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#222",
  color: "white",
};

const saveBtn = {
  background: "#28a745",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "8px",
  cursor: "pointer",
};

const editBtn = {
  background: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteBtn = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

const boxStyle = {
  background: "#111",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "15px",
};

export default PackageManagement;