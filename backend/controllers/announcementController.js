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

export const viewPost = async (req, res) => {
  try {
    const posts = (await Posts.find()).toSorted({ created: -1 });
    res.status(200).json({ status: "success", data: posts });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};
