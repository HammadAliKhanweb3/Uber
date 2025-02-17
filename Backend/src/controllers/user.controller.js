import { validationResult } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { createUser } from "../services/userService.service.js";
import { blackListToken } from "../models/blackListToken.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((err) => err.msg)
      .join(", ");
    throw new ApiError(400, errorMessages);
  }
  const { fullname, email, password } = req.body;

  const hashedPassword = await User.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = await user.generateAccessToken();
  return res
    .status(200)
    .json(
      new ApiResponse(200, "User registered successfully", { user, token })
    );
});

const loginUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((err) => err.msg)
      .join(", ");
    throw new ApiError(400, errorMessages);
  }
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(401, "Please provide email and password");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json(new ApiResponse(400, "Invalid password", {}));
  }
  const token = await user.generateAccessToken();
  console.log(token);
  console.log(user);
  
  return res
    .status(200)
    .cookie("token", token)
    .json(new ApiResponse(200, { user, token },"User logged in successfully"));
});

const getUserProfile = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, "User fetched Successfully", req.user));
});

const logoutUser = asyncHandler(async (req, res) => {
  const token =
    req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unathorized User");
  }

  const BlackList = await blackListToken.create({ token: token });

  res
    .status(200)
    .clearCookie("token")
    .json(200, "User logged out successfully", {});
});

export { registerUser, loginUser, getUserProfile, logoutUser };
