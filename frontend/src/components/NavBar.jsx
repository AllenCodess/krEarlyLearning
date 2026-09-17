import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../slices/userSlice";

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <div className="navbar-container container ">
        <div className="navbar-left">
          <img src="/public/images/krlogo.png" className="kr-logo" alt="kr logo" />
        </div>
        <div className="navbar-right">
          <div className="hamburger-menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
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
                to={"/contact"}
              >
                Contact
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
              <Link className="nav-links" to={"/parentportal"}>
                Parent Portal
              </Link>
            </li>
            {isAuthenticated && (
              <li className="navbar-list-items">
                <button onClick={() => dispatch(logoutSuccess())} className=" logout-btn">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
