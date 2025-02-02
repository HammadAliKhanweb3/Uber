import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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
import { cookie } from "express-validator";

app.use("/users", userRouter);

export default app;
