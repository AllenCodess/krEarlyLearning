import express from "express";

import {
  signUp,
  deleteUser,
  findUser,
  findUsers,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(signUp).get(findUsers);
router.route("/:id").delete(deleteUser).patch(updateUser).get(findUser);

export default router;
