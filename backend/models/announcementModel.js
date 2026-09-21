import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A announcement must have a title."],
    trim: true,
  },
  subject: { type: String, required: [true, "A announcement must have a subject."] },
  date: {
    type: String,
    required: [true, "A announcement must have a date."],
  },
  description: {
    type: String,
    required: [true, "A announcement must have a description."],
  },
  timeStamps: true,
});

const Posts = mongoose.model("posts", announcementSchema);

export default Posts;
