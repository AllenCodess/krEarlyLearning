import { useState } from "react";

export const DocumentUpload = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file); // must match upload.single("file")

    try {
      const res = await fetch("/api/v1/documents/uploads", {
        method: "POST",
        credentials: "include", // sends the admin auth cookie
        body: formData, // no Content-Type header
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Upload failed");

      setName("");
      setFile(null);
      e.target.reset(); // clears the file input in the DOM
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-post">
      <label className="admin-label">Document Name</label>
      <input
        className="admin-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="admin-label">File (PDF)</label>
      <input
        className="admin-input"
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="admin-btn">Upload Document</button>
    </form>
  );
};

export default DocumentUpload;
