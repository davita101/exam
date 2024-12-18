import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Make sure to import cors
import express from "express"; // Make sure to import express
import { connectDB } from "./db/connectDB.js";

import authRouters from "./routes/api.auth.js";
import groupRoutes from "./routes/api.groups.js"; // Correct import path
import studentRoutes from "./routes/api.students.js"; // Correct import path
import { authMiddleware } from "./middleware/authMiddleware.js";
import { groupMiddleware } from "./middleware/groupMiddleware.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());
// Enable CORS middleware
app.use(cors({
  origin: `${process.env.FRONT_URL}`, // Adjust the origin as needed
  credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRouters);
app.use("/api/groups", groupRoutes);
app.use("/api/groups/:groupId/students", authMiddleware, groupMiddleware, studentRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});