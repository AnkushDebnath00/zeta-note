import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser); // public route
router.post("/login", authUser); // public route
router.route("/profile").post(protect, updateUserProfile); // private route

export default router;
