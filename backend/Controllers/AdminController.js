const User = require("../Models/UserModel");
const Package = require("../Models/PackageModel");
const Booking = require("../Models/BookingModel");
const CustomTrip = require("../Models/CustomTripModel");

const dashboardStats = async (req, res) => {
  try {
    const totalUsers =
      await User.countDocuments();

    const totalPackages =
      await Package.countDocuments();

    const totalBookings =
      await Booking.countDocuments();

    const totalCustomTrips =
      await CustomTrip.countDocuments();

    const approvedBookings =
      await Booking.countDocuments({
        status: "Approved",
      });

    const rejectedBookings =
      await Booking.countDocuments({
        status: "Rejected",
      });

    const pendingBookings =
      await Booking.countDocuments({
        status: "Pending",
      });

    res.status(200).json({
      totalUsers,
      totalPackages,
      totalBookings,
      totalCustomTrips,
      approvedBookings,
      rejectedBookings,
      pendingBookings,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  dashboardStats,
};