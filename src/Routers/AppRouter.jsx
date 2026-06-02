import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgotPassword from "../Pages/ForgotPassword";
import Dashboard from "../Pages/Dashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import Packages from "../Pages/Packages";
import International from "../Pages/International";
import Family from "../Pages/Family";
import Friends from "../Pages/Friends";
import Adventure from "../Pages/Adventure";
import Honeymoon from "../Pages/Honeymoon";
import Customize from "../Pages/Customize";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/international" element={<International />} />
        <Route path="/family" element={<Family />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/honeymoon" element={<Honeymoon />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
