import { ApiError } from "../utils/ApiError.js";
import { distanceAndTime } from "./mapServicre.service.js";
import { Ride } from "../models/ride.model.js";
import crypto from "crypto";

const getFare = async (pickUp, destination) => {
  if (!pickUp || !destination) {
    throw new ApiError(400, "Picup and destination is required");
  }
  const distanceTime = await distanceAndTime(pickUp, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };
  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime.distance.value / 1000) * perKmRate.moto +
        (distanceTime.duration.value / 60) * perMinuteRate.moto
    ),
  };

  return fare;
};

const getOtp = (num) => {
  if (!num || num <= 0) {
    throw new ApiError(400, "Number of OTP digits must be greater than zero");
  }

  const otp = crypto
    .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
    .toString();
  return otp;
};

const createRideService = async (user, pickUp, destination, vehicleType) => {
  if (!user || !pickUp || !destination || !vehicleType) {
    throw new ApiError(400, "All fields are required");
  }

  const fare = await getFare(pickUp, destination);

  const ride = await Ride.create({
    user,
    pickUp,
    destination,
    vehicleType,
    fare: fare[vehicleType],
    otp: getOtp(6),
  });

  if (!ride) {
    throw new ApiError(500, "Ride not created ");
  }
  console.log(ride);

  return ride;
};

export { getFare, createRideService };
