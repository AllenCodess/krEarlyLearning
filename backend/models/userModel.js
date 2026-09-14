import mongoose from "mongoose";

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
  password: {
    type: String,
    required: [true, "A user must have a password."],
  },
  passwordConfirm: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
