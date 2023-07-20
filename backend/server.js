import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import path from "path";
import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config(); // environment variables

connectDB(); // database connection

const app = express(); // app backend starts

app.use(express.json()); // express json data

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

// for simultaneous deployment of backend and frontend
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build"))); // frontend build folder

  app.get(
    "*",
    (req, res) =>
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")) // any route that is not api route
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running.."); // api route
  });
}

app.use(notFound); // not found middleware
app.use(errorHandler); // error handler middleware

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
