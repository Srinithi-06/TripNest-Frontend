import React, { useState } from "react";

import AdminSidebar from "../../Components/AdminSidebar";

import DashboardOverview from "./DashboardOverview";
import BookingRequests from "./BookingRequests";
import CustomTripRequests from "./CustomTripRequests";
import PackageManagement from "./PackageManagement";
import UserManagement from "./UserManagement";

function AdminDashboard() {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  return (
    <div
      style={{
        display: "flex",
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {activeSection === "dashboard" && (
          <DashboardOverview />
        )}

        {activeSection === "bookings" && (
          <BookingRequests />
        )}

        {activeSection === "customTrips" && (
          <CustomTripRequests />
        )}

        {activeSection === "packages" && (
          <PackageManagement />
        )}

        {activeSection === "users" && (
          <UserManagement />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;