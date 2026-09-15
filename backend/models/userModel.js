import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A user must have a email."],
    unique: true,
  },
  role: {
    type: String,
    enum: ["parent", "admin"],
    default: "parent",
  },
  password: {
    type: String,
    required: [true, "A user must have a password."],
    minlength: [8, "Password must be atleast 8 characters"],
  },
  passwordConfirm: {
    type: String,
    required: true,
    select: false,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
