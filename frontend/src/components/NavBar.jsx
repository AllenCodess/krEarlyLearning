export const NavBar = () => {
  return (
    <>
      <div className="navbar-container container">
        <div className="navbar-left">
          <img src="/frontend/public/images/krlogo.png" className="kr-logo" alt="kr logo" />
        </div>
        <div className="navbar-right">
          <ul className="navbar-list">
            <li className="navbar-list-items">Home</li>
            <li className="navbar-list-items">About Us</li>
            <li className="navbar-list-items">Programs</li>
            <li className="navbar-list-items">Tuition & Enrollment</li>
            <li className="navbar-list-items">Parent Portal</li>
          </ul>
        </div>
      </div>
    </>
  );
};
