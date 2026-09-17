import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";

import { createPost } from "../controllers/announcementController.js";

const router = express.Router();

router.route("/").post(createPost);

export default router;
