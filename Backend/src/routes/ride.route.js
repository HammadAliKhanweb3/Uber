import Router from "express";
import { body } from "express-validator";
import { createRide } from "../controllers/ride.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/create")
  .post(
    authUser,
    body("pickup")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid pickup address"),
    body("destination")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid destination address"),
    body("vehicleType")
      .isString()
      .isIn(["auto", "car", "moto"])
      .withMessage("Invalid vehicle type"),
    createRide
  );

export default router;
