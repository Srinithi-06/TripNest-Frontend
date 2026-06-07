const express = require(
  "express"
);

const router =
  express.Router();

const {
  createTrip,
  getTrips,
  approveTrip,
  rejectTrip,
} = require(
  "../Controllers/CustomTripController"
);

router.post(
  "/create",
  createTrip
);

router.get(
  "/",
  getTrips
);

router.put(
  "/approve/:id",
  approveTrip
);

router.put(
  "/reject/:id",
  rejectTrip
);

module.exports = router;