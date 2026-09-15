import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  signUp,
  deleteUser,
  findUser,
  findUsers,
  updateUser,
  login,
  logout,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/").get(protect, findUsers);
router.route("/:id").delete(deleteUser).patch(updateUser).get(findUser);

export default router;
