import { validationResult } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { createUser } from "../services/userService.service.js";

const registerUser = asyncHandler(async (req, res, next) => {
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
    password: hashedPassword
  });
  console.log("returned response in controller",user);

  const token = await user.generateAccessToken();
  return res
    .status(200)
    .json(
      new ApiResponse(200, "User registered successfully", { user, token })
    );
});

export { registerUser }
