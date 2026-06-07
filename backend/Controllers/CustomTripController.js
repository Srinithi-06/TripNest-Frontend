const CustomTrip = require(
  "../Models/CustomTripModel"
);

// CREATE CUSTOM TRIP

const createTrip = async (
  req,
  res
) => {
  try {
    const trip =
      await CustomTrip.create(
        req.body
      );

    res.status(201).json(
      trip
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL CUSTOM TRIPS

const getTrips = async (
  req,
  res
) => {
  try {
    const trips =
      await CustomTrip.find();

    res.status(200).json(
      trips
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// APPROVE CUSTOM TRIP

const approveTrip = async (
  req,
  res
) => {
  try {
    const {
      guideName,
      guidePhone,
    } = req.body;

    const trip =
      await CustomTrip.findByIdAndUpdate(
        req.params.id,
        {
          status: "Approved",

          guideName,

          guidePhone,

          message:
            "You can contact the guide directly for further queries.",
        },
        {
          returnDocument:
            "after",
        }
      );

    res.json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// REJECT CUSTOM TRIP

const rejectTrip = async (
  req,
  res
) => {
  try {
    const { reason } =
      req.body;

    const trip =
      await CustomTrip.findByIdAndUpdate(
        req.params.id,
        {
          status: "Rejected",

          message: reason,
        },
        {
          returnDocument:
            "after",
        }
      );

    res.json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTrip,
  getTrips,
  approveTrip,
  rejectTrip,
};