const Package = require("../Models/PackageModel");

// ADD PACKAGE

const addPackage = async (req, res) => {
  try {
    const packageData =
      await Package.create(req.body);

    res.status(201).json({
      success: true,
      packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL PACKAGES

const getPackages = async (
  req,
  res
) => {
  try {
    const packages =
      await Package.find();

    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET PACKAGES BY CATEGORY

const getPackagesByCategory =
  async (req, res) => {
    try {
      const packages =
        await Package.find({
          category:
            req.params.category,
        });

      res
        .status(200)
        .json(packages);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// UPDATE PACKAGE

const updatePackage = async (
  req,
  res
) => {
  try {
    const updatedPackage =
      await Package.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          returnDocument:
            "after",
        }
      );

    res.status(200).json(
      updatedPackage
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE PACKAGE

const deletePackage = async (
  req,
  res
) => {
  try {
    await Package.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Package Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addPackage,
  getPackages,
  getPackagesByCategory,
  updatePackage,
  deletePackage,
};