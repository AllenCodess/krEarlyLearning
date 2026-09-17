import Posts from "../models/announcementModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, subject, date, description } = req.body;

    const newPost = await Posts.create({
      title,
      subject,
      date,
      description,
    });

    res.status(201).json({ status: "success", data: newPost });
  } catch (error) {
    res.status(400).json({ status: "success", message: error.message });
  }
};
