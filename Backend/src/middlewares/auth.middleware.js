import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { blackListToken } from "../models/blackListToken.model.js";
import { Captain } from "../models/captain.model.js";

const authUser = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Empty token");
    }
    const isBlacklist = await blackListToken.findOne({ token: token });

    if (isBlacklist) {
      throw new ApiError(401, "UnAuthorized User");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(400, "User not found");
    }
    req.user = user;

    return next();
  } catch (error) {
    throw new ApiError(404, error);
  }
});

const authCaptain = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(400, "Empty token");
    }

    const isBlacklistToken = await blackListToken.findOne({ token });
    console.log("BlackListed Captain", isBlacklistToken);
    if (isBlacklistToken) {
      throw new ApiError(400, "Unauthorized User");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const captain = await Captain.findById(decodedToken._id);
    if (!captain) {
      throw new ApiError(400, "Captain not found");
    }
    req.captain = captain;

    return next();
  } catch (error) {
    throw new ApiError(400, error);
  }
});

export { authUser, authCaptain };
