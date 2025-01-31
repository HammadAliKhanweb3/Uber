import Router from "express";
import { body } from "express-validator";
import { registerUser,loginUser } from "../controllers/user.controller.js";

const router = Router();

router.post(
  "/register-user",
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

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Mail"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be greater than 5 characters"),
  ],
  loginUser
);

export default router;
