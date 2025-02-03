import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApiError } from "./utils/ApiError.js";

const app = express();

app.use(
  cors({
    origin: "*",
    Credentials: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Aur Mazy ich oo");
});

import userRouter from "./routes/user.route.js";
import captainRouter from "./routes/captain.route.js";

app.use("/users", userRouter);
app.use("/captains", captainRouter);


app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.error,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});




export default app;
