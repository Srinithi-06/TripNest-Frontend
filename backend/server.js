const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./Utils/db");

const userRoutes = require("./Routers/UserRoutes");
const packageRoutes = require("./Routers/PackageRoutes");
const bookingRoutes = require("./Routers/BookingRoutes");
const customTripRoutes = require("./Routers/CustomTripRoutes");
const wishlistRoutes = require("./Routers/WishlistRoutes");
const adminRoutes =require("./Routers/AdminRoutes");
const dashboardRoutes =
  require("./Routers/DashboardRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/customtrips", customTripRoutes);
app.use("/api/admin",adminRoutes);
app.use(  "/api/dashboard",dashboardRoutes);


app.get("/", (req, res) => {
 
  res.send("TripNest Backend Running");
});
app.get("/test", (req, res) => {
 
  res.send("Test Route Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
