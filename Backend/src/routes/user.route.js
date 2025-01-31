import Router from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.controller.js";

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

export default router;
