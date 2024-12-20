import express from "express";
import configs from "./configs/configs.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import flatRoutes from "./routes/flat.router.js";
import userRoutes from "./routes/user.router.js";
import authRoutes from "./routes/auth.router.js";
import logsRoutes from "./routes/logs.router.js";
import messageRoutes from "./routes/message.router.js";
import logger from "./utils/logger.js";

const app = express();
dotenv.config();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/flats", flatRoutes);
app.use("/messages", messageRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/logs", logsRoutes);

app.listen(configs.PORT, () => {
  logger.info(`Server running on port ${configs.PORT}`);
});
