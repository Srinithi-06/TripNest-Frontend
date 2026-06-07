const express = require(
  "express"
);

const router =
  express.Router();

const {
  addWishlist,
  getWishlist,
  deleteWishlist,
} = require(
  "../Controllers/WishlistController"
);

router.post(
  "/add",
  addWishlist
);

router.get(
  "/",
  getWishlist
);

router.delete(
  "/:id",
  deleteWishlist
);

module.exports = router;