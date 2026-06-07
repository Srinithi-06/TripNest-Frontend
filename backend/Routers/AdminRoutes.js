const express = require("express");

const router = express.Router();

const {
  dashboardStats,
} = require(
  "../Controllers/AdminController"
);

router.get(
  "/dashboard",
  dashboardStats
);

module.exports = router;