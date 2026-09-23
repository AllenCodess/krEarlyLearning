import Documents from "../models/documentModel.js";
import cloudinary from "../cloudinaryConfig.js";

const uploadPDF = (buffer) =>
  new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "documents", resource_type: "image" }, (err, result) =>
        err ? reject(err) : resolve(result),
      )
      .end(buffer);
  });

export const createDocument = async (req, res) => {
  try {
    if (!req.file) throw new Error("No file uploaded");

    const result = await uploadPDF(req.file.buffer);
    const doc = await Documents.create({
      name: req.body.name,
      fileUrl: result.secure_url,
    });

    res.status(201).json({ status: "success", data: doc });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const viewDocuments = async (req, res) => {
  try {
    const docs = await Documents.find().sort({ createdAt: -1 });
    res.status(200).json({ status: "success", data: docs });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const doc = await Documents.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Document has been deleted." });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};
