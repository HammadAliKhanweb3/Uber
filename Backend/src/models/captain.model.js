import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const captainSchema = new Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: [true, "first name is required"],
        minlength: [3, "first name should contains at least 3 characters"],
        unique: true,
      },
      lastname: {
        type: String,
        minlength: [3, "last name should contains at least 3 characters "],
      },
    },
    email: {
      type: String,
      required: true,
      minlength: [3, "first name should contains at least 3 characters"],
      unique: true,
      trim: true,
      lowercase:true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "first name should contains at least 3 characters"],
      select: false,
    },
    socketId: {
      type: String,
    },
    status: {
      type: String,
      emum: ["active", "inActive"],
      default: "inActive",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
        minlength: [3, "Color must be at least 3 characters long"],
      },
      plate: {
        type: String,
        required: true,
        minlength: [3, "Plate must at least 3 characters long"],
      },
      capacity: {
        type: String,
        required: true,
        minlength: [1, "Capacity must be at least 1"],
      },
      vehicleType: {
        type: String,
        required: true,
        enum: ["car", "auto"],
      },
      location: {
        lat: {
          type: Number,
        },
        long: {
          type: Number,
        },
      },
    },
  },
  { timestamps: true }
);

captainSchema.methods.generateAccessToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
  return token;
};

captainSchema.methods.generateRefreshToken = function () {
  const token = jwt.sign(this._id, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

export const Captain = mongoose.model("Captain", captainSchema);
