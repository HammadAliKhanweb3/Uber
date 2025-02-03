import asyncHandler from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";
import { Captain } from "../models/captain.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createCaptain } from "../services/captainService.service.js";
import { blackListToken } from "../models/blackListToken.model.js";

const registerCaptain = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(400, "Provide Valid Information", {
      erros: errors.array(),
    });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadExist = await Captain.findOne({ email });

  if (isCaptainAlreadExist) {
    throw new ApiError(400, "Captain Already Exists");
  }

  const hashedPassword = await Captain.hashPassword(password);

  const captain = await createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = await captain.generateAccessToken();

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        captain,
        token,
      },
      "Captain Registered Successfully"
    )
  );
});

const loginCaptain = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(400, { errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await Captain.findOne({ email }).select("+password");

  if (!captain) {
    throw new ApiError(400, "Invalid Email or Password");
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(400, "Invalid Email or Password");
  }
  const loggedInCaptain = await Captain.findById(captain._id);

  const token = await loggedInCaptain.generateAccessToken();

  const options = {
    httpsOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json(
      new ApiResponse(200, { loggedInCaptain }, "User loggedIn Successsfully")
    );
});

const getCaptainProfile = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.captain, "User Profile Fetched Successfully"));
});

const logoutCaptain = asyncHandler(async (req, res) => {
  const token =
    req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
  const blackList = await blackListToken.create({ token });

  return res
    .status(200)
    .clearCookie("token")
    .json(new ApiResponse(200, {}, "User loggedOut Successfully"));
});

export { registerCaptain, loginCaptain, logoutCaptain, getCaptainProfile };
