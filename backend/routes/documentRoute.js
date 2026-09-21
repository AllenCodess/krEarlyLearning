import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/uploads").post(protect, admin);

export default router;
