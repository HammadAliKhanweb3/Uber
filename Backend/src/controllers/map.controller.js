import asyncHandler from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";
import { Cordinates, suggestions } from "../services/mapServicre.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { distanceAndTime } from "../services/mapServicre.service.js";

const getAddressCordinates = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("error in errors");

    throw new ApiError(400, "error in errors");
  }

  const { address } = req.query;

  const cordinates = await Cordinates(address);
  return res
    .status(200)
    .json(new ApiResponse(200, cordinates, "Cordinates fetched Successfully"));
});

const getDistanceAndTime = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ApiError(400, errors.array());
  }

  const { origin, destination } = req.query;
  console.log(origin, destination);

  const distancTime = await distanceAndTime(origin, destination);
  if (!distancTime) {
    throw new ApiError(400, "Unable to find distance and time");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        distancTime,
        "Distance And Time Fetched Successfully"
      )
    );
});

const getSuggestions = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ApirError(400, "input is required");
  }
  const { input } = req.query;

  const suggestionsResult = await suggestions(input);
  console.log("suggestions result is:", suggestionsResult);

  if (!suggestionsResult) {
    throw new ApiError(400, "Suggesstions not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, suggestionsResult, "suggestions found successfully")
    );
});

export { getAddressCordinates, getDistanceAndTime, getSuggestions };
