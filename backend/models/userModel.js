import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

// Hash password before saving to DB
userSchema.pre("save", async function () {
  // Only run function if password is modified
  if (!this.isModified("password")) return;
  // hash the password with 10 salt
  this.password = await bcrypt.hash(this.password, 10);
  // Delete passwordConfirm field before it reaches DB
  this.passwordConfirm = undefined;
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
