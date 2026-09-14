import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A user must have a name."],
    trim: true,
  },
  email: {
    type: String,
    require: [true, "A user must have a email."],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "A user must have a password."],
  },
  passwordConfirm: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
