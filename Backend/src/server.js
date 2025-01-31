import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const server = http.createServer(app);
const Port = process.env.Port;

connectDB()
  .then(() => {
    server.listen(Port || 8080, () => {
      console.log("Server is running at port 8080");
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed!!!", error);
  });
