const express = require("express");

const router =
  express.Router();

const {
  signupUser,
  loginUser,
  getUsers,
  deleteUser,
} = require(
  "../Controllers/UserController"
);

router.post(
  "/signup",
  signupUser
);

router.post(
  "/login",
  loginUser
);

router.get(
  "/",
  getUsers
);

router.delete(
  "/:id",
  deleteUser
);

module.exports = router;