import express from "express";

import {
  signUp,
  deleteUser,
  findUser,
  findUsers,
  updateUser,
  login,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/").get(findUsers);
router.route("/:id").delete(deleteUser).patch(updateUser).get(findUser);

export default router;
