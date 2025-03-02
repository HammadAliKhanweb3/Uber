import axios from "axios";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const Cordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAP;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      console.log(location);

      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new ApiError(400, "Unable to get location");
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(400, error.message);
  }
};

const distanceAndTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new ApiError(400, "Origin and Destination are required");
  }

  const apiKey = process.env.GOOGLE_MAP;

  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new ApiError(400, "No Results Found");
      }
      return response.data.rows[0].elements[0];
    } else {
      throw new ApiError(400, "Unable to Fetch Data");
    }
  } catch (error) {
    console.log(error);

    throw new ApiError(400, error);
  }
};

const suggestions = async (input) => {
  if (!input) {
    throw new ApiError(400, "query is required");
  }
  console.log(input);

  const apiKey = process.env.GOOGLE_MAP;

  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    console.log("before");

    const response = await axios(url);
    console.log(response);

    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new ApiError(400, "unable to fetch suggestions");
    }
  } catch (error) {
    console.log(error);   
    throw new ApiError(400, error);
  }
};

export { Cordinates, distanceAndTime, suggestions };
