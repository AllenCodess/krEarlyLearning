import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminPortal = () => {
  const [title, setTtile] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, subject, date, message);
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
                  onChange={(e) => setTtile(e.target.value)}
                />
                <label className="admin-label">Subject</label>
                <input
                  className="admin-input"
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                />
                <label className="admin-label">Date</label>
                <input
                  className="admin-input "
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                />
                <label className="admin-label">Message</label>
                <textarea
                  className="admin-message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className="admin-btn">Update Announcement</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortal;
