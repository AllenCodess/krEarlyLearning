import { Announcements } from "../components/Announcements";
import { Documents } from "../components/Documents";
import { useState } from "react";
import { useSelector } from "react-redux";

export const ParentPortal = () => {
  const [annoucement, setAnnouncement] = useState(false);
  const [document, setDocument] = useState(false);
  const { name } = useSelector((state) => state.user);

  return (
    <>
      <div className="parent-portal-container container">
        <div className="parent-portal-header">
          <h1 className="pp-header">Parent Portal</h1>
          <p className="pp-desc">Stay informed, connected, and part of our learning community.</p>
        </div>
        <div className="parent-portal-content">
          <div className="pp-content-left">
            <h2 className="parent-portal-dashboard-header">Dashboard</h2>
            <p>
              Quick access to announcements, documents, and important updates from KR Early
              Learning.
            </p>
          </div>
          <div className="pp-content-right">
            <div className="pp-content-right-header">
              <h1>{`Welcome back! ${name}`}</h1>
              <p>Here's what's new at KR Early Learning.</p>
            </div>
            <div className="pp-content-right-btn">
              <button className="pp-btn" onClick={() => setAnnouncement(!annoucement)}>
                Announcements
              </button>
              <button className="pp-btn" onClick={() => setDocument(!document)}>
                Documents
              </button>
            </div>
            {annoucement && <Announcements />}
            {document && <Documents />}
          </div>
        </div>
      </div>
    </>
  );
};
