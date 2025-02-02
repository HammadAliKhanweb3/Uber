import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { blackListToken } from "../models/blackListToken.model.js";

const authUser = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("bearer ", "");
    if (!token) {
      res.status(402).json(new ApiError(401, "Empty Token", token));
    }
    const isBlacklist = await blackListToken.findOne({ token: token });
    console.log("Blacklisted Token:", isBlacklist);

    if (isBlacklist) {
      res.status(402).json(new ApiError(401, "user is Blacklisted", {}));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id);

    if (!user) {
      res.status(404).json(new ApiResponse(404, "User not found", {}));
    }
    req.user = user;

    return next();
  } catch (error) {
    throw new ApiError(404, error);
  }
});

export { authUser };
