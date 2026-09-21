import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "A document must have a name."] },
    fileUrl: { type: String, required: true }, // Cloudinary URL
  },
  { timestamps: true },
);

const Docs = mongoose.model("documents", documentSchema);
export default Docs;
