import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  createDocument,
  viewDocuments,
  deleteDocument,
} from "../controllers/documentController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.route("/uploads").post(protect, admin, upload.single("file"), createDocument);
router.route("/").get(viewDocuments);
router.route("/:id").delete(protect, admin, deleteDocument);
export default router;
