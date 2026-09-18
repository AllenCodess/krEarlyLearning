import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  let token;
  try {
    token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: "fail", message: "You are not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ status: "fail", message: error.message });
  }
};

export const admin = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({ status: "fail", message: "You are not admin" });
    }
    next();
  } catch (error) {
    res.status(401).json({ status: "fail", message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ status: "fail", message: "User gone" });

    res.json({ _id: user._id, name: user.name, email: user.email, role: user.role });
  } catch (error) {
    res.status(401).json({ status: "fail", message: error.message });
  }
};
