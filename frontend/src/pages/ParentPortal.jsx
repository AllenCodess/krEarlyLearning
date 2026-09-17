import { Announcements } from "../components/Announcements";

export const ParentPortal = () => {
  return (
    <>
      <div className="parent-portal-container container">
        <div className="parent-portal-header">
          <h1 className="pp-header">Parent Portal</h1>
          <p className="pp-desc">Stay informed, connected, and part of our learning community.</p>
        </div>
        <div className="parent-portal-content">
          <div className="pp-content-left">
            <h2>Dashboard</h2>
            <p>
              Quick access to announcements, documents, and important updates from KR Early
              Learning.
            </p>
          </div>
          <div className="pp-content-right">
            <div className="pp-content-right-header">
              <h1>Welcome back, Sarah</h1>
              <p>Here's what's new at KR Early Learning.</p>
            </div>
            <div className="pp-content-right-btn">
              <button className="pp-btn">Announcements</button>
              <button className="pp-btn">Documents</button>
            </div>
            <Announcements />
          </div>
        </div>
      </div>
    </>
  );
};
