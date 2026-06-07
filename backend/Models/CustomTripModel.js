const mongoose = require("mongoose");

const CustomTripSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },

    travelers: {
      type: Number,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    travelDate: {
      type: String,
      required: true,
    },

    requests: {
      type: String,
    },

    userName: {
      type: String,
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },

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

    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model(
  "CustomTrip",
  CustomTripSchema
);