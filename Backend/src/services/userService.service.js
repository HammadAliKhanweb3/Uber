import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const createdUser = await User.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  const user = await User.findById(createdUser._id);
  console.log("response from db:", user);

  return user;
};
