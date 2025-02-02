import Router from "express";
import { body } from "express-validator";
import {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/register-user")
  .post(
    [
      body("email").isEmail().withMessage("Invalid Mail"),
      body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("Full name must be greater than 3 characters"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be greater than 3 characters"),
    ],
    registerUser
  );

router
  .route("/login")
  .post(
    [
      body("email").isEmail().withMessage("Invalid Mail"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be greater than 5 characters"),
    ],
    loginUser
  );

router.route("/profile").get(authUser, getUserProfile);

router.route("/logout").get(authUser, logoutUser);

export default router;
