import { Router } from "express";
import {
  getAddressCordinates,
  getDistanceAndTime,
  getSuggestions,
} from "../controllers/map.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
import { query } from "express-validator";

const router = Router();

router
  .route("/get-cordinates")
  .get(
    query("address")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Address should be "),
    authUser,
    getAddressCordinates
  );

router
  .route("/get-distance-time")
  .get(
    query("origin")
      .isString()
      .isLength({ min: 3 }, query("destination"))
      .isString()
      .isLength({ min: 3 }, authUser, getDistanceAndTime),
    query("destination")
      .isString()
      .isLength({ min: 3 }, query("destination"))
      .isString()
      .isLength({ min: 3 }, authUser, getDistanceAndTime),
    authUser,
    getDistanceAndTime
  );

router
  .route("/get-suggestions")
  .get(
    query("input")
      .isString()
      .isLength({ min: 3 })
      .withMessage("input is required"),
    authUser,
    getSuggestions
  );
export default router;
