import { validationResult } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createRideService } from "../services/ride.service.js";

const createRide = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(400, errors.array());
  }

  const { pickup, destination, vehicleType } = req.body;

  const ride = await createRideService(
     req.user._id,
    pickup,
    destination,
    vehicleType,
  );

  if (!ride) {
    throw new ApiError(400, "Ride not created");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, ride, "Ride created successfully"));
});

export { createRide };
