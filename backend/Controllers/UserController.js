const User = require("../Models/UserModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  try {
    const { fullname, email, password } =
      req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup Successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message:
          "Invalid Email or Password",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message:
          "Invalid Email or Password",
      });
    }
    
    // GET ALL USERS

const getUsers = async (
  req,
  res
) => {
  try {
    const users =
      await User.find().select(
        "-password"
      );

    res.status(200).json(
      users
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE USER

const deleteUser = async (
  req,
  res
) => {
  try {
    await User.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getUsers = async (
  req,
  res
) => {
  try {
    const users =
      await User.find().select(
        "-password"
      );

    res.status(200).json(
      users
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (
  req,
  res
) => {
  try {
    await User.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  signupUser,
  loginUser,
  getUsers,
  deleteUser,
};