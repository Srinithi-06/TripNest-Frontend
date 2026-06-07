const Booking = require("../Models/BookingModel");

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const approveBooking = async (req, res) => {
  try {
    const { guideName, guidePhone } = req.body;

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          status: "Approved",
          guideName,
          guidePhone,
          reason: "",
        },
        {
          returnDocument: "after",
        }
      );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const rejectBooking = async (req, res) => {
  try {
    const { reason } = req.body;

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          status: "Rejected",
          reason,
        },
        {
          returnDocument: "after",
        }
      );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  approveBooking,
  rejectBooking,
};