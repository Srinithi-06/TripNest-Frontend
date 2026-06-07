const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    packageName: String,

    packageImage: String,

    duration: String,

    price: String,

    userName: String,

    userEmail: String,

    status: {
      type: String,
      default: "Pending",
    },

    guideName: {
      type: String,
      default: "",
    },

    guidePhone: {
      type: String,
      default: "",
    },

    reason: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booking",
  BookingSchema
);