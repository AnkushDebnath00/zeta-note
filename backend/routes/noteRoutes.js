import express from "express";
import {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} from "../controllers/noteController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById) // public route
  .delete(protect, DeleteNote) // private route
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

export default router;
