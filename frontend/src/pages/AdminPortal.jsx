import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsResults } from "../slices/postSlice";
import DocumentUpload from "../components/DocumentUpload";

const AdminPortal = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const { name } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/v1/announcements/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, subject, date, description }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Posts failed to send");
      dispatch(
        postsResults({
          title: data.title,
          subject: data.subject,
          date: data.date,
          description: data.description,
        }),
      );
      setTitle("");
      setSubject("");
      setDate("");
      setDescription("");
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="parent-portal-container container">
        <div className="parent-portal-header">
          <h1 className="pp-header">{`Welcome back! ${name}`}</h1>
        </div>
        <div className="parent-portal-content">
          <div className="pp-content-left">
            <h2 className="parent-portal-dashboard-header">Admin Portal</h2>
            <p>Update the announcement shown in the Parent Portal.</p>
          </div>
          <div className="pp-content-right">
            <div className="pp-content-right-header">
              <h1>Edit Announcement</h1>
            </div>
            <div className="announcement-container">
              <form onSubmit={handleSubmit} className="admin-post">
                <label className="admin-label">Title</label>
                <input
                  className="admin-input"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <label className="admin-label">Subject</label>
                <input
                  className="admin-input"
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  value={subject}
                />
                <label className="admin-label">Date</label>
                <input
                  className="admin-input "
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  value={date}
                />
                <label className="admin-label">Description</label>
                <textarea
                  className="admin-message"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
                <button className="admin-btn">Update Announcement</button>
              </form>
            </div>
            <div className="pp-content-right-header">
              <h1 className="upload-doc-header">Upload Document</h1>
            </div>
            <div className="announcement-container">
              <DocumentUpload />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortal;
