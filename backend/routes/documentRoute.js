import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import { createDocument, viewDocuments } from "../controllers/documentController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.route("/uploads").post(protect, admin, upload.single("file"), createDocument);
router.route("/").get(viewDocuments);
export default router;
