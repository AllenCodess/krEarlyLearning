import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({ status: "success", token, data: { user: newUser } });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const findUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: "success", result: users.length, data: { users } });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const findUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(200).json({ status: "success", message: `The user ${user.name} has been deleted.` });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(user);
    res.status(200).json({ status: "success", message: `The user ${user.name} has been updated.` });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};
