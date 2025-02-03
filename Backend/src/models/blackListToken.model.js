import mongoose, { Schema } from "mongoose";

const blacListTokenShema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, //24 hours in seconds
  },
});

export const  blackListToken = mongoose.model(
  "blackListToken",
  blacListTokenShema
);
