import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";

import { createPost, viewPost } from "../controllers/announcementController.js";

const router = express.Router();

router.route("/").post(protect, admin, createPost).get(protect, viewPost);

export default router;
