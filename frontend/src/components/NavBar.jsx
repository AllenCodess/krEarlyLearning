import { Link, NavLink } from "react-router";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-container container">
        <div className="navbar-left">
          <img src="/frontend/public/images/krlogo.png" className="kr-logo" alt="kr logo" />
        </div>
        <div className="navbar-right">
          <ul className="navbar-list">
            <li className="navbar-list-items">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "nav-links")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-list-items">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "nav-links")}
                to={"/about"}
              >
                About Us
              </NavLink>
            </li>
            <li className="navbar-list-items">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "nav-links")}
                to={"/programs"}
              >
                Programs
              </NavLink>
            </li>
            <li className="navbar-list-items">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "nav-links")}
                to={"/tuitionandenrollment"}
              >
                Tuition & Enrollment
              </NavLink>
            </li>
            <li className="navbar-list-items">
              <Link className="nav-links" to={"/"}>
                Parent Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
