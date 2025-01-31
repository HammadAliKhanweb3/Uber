import express from "express";
import cors from "cors";

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

app.get("/", (req, res) => {
  res.send("G karan janab");
});

import userRouter from "./routes/user.route.js";
app.use("/users", userRouter);

export default app;
