const Wishlist = require(
  "../Models/WishlistModel"
);

// ADD TO WISHLIST

const addWishlist = async (
  req,
  res
) => {
  try {
    const wishlist =
      await Wishlist.create(
        req.body
      );

    res.status(201).json(
      wishlist
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL WISHLIST

const getWishlist = async (
  req,
  res
) => {
  try {
    const wishlist =
      await Wishlist.find();

    res.status(200).json(
      wishlist
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE WISHLIST ITEM

const deleteWishlist = async (
  req,
  res
) => {
  try {
    await Wishlist.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Wishlist Item Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addWishlist,
  getWishlist,
  deleteWishlist,
};