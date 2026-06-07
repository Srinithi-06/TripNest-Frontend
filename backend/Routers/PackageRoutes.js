const express = require("express");

const router = express.Router();

const {
  addPackage,
  getPackages,
  getPackagesByCategory,
  updatePackage,
  deletePackage,
} = require("../Controllers/PackageController");

router.post("/add", addPackage);

router.get("/", getPackages);

router.get(
  "/category/:category",
  getPackagesByCategory
);

router.put("/:id", updatePackage);

router.delete("/:id", deletePackage);

module.exports = router;