import { mongoose, Schema } from "mongoose";

const rideSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    captain: {
      type: Schema.Types.ObjectId,
      ref: "captain",
    },
    pickUp: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
    },
    fare: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    status: {
      type: String,
      emum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
      default: "pending",
    },
    PaymentId: {
      type: String,
    },
    orderId: {
      type: String,
    },
    signature: {
      type: String,
    },
    otp: {
      type: String,
      select: false,
   //   required: true,
    },
  },
  { timestamps: true }
);

export const Ride = mongoose.model("Ride", rideSchema);
