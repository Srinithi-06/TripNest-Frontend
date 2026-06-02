import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import Packages from "./Pages/Packages";
import International from "./Pages/International";
import Family from "./Pages/Family";
import Friends from "./Pages/Friends";
import Adventure from "./Pages/Adventure";
import Honeymoon from "./Pages/Honeymoon";
import Wishlist from "./Pages/Wishlist";
import MyBookings from "./Pages/MyBookings";
import Customize from "./Pages/Customize";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/packages" element={<Packages />} />
        <Route   path="/international"   element={<International />} />
        <Route path="/family" element={<Family />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/honeymoon" element={<Honeymoon />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;