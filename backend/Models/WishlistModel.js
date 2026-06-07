const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
    },

    packageImage: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Wishlist",
  WishlistSchema
);