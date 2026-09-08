import { Link } from "react-router";

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
              <Link to={"/"}>Home</Link>
            </li>
            <li className="navbar-list-items">
              {" "}
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="navbar-list-items">
              <Link to={"/programs"}>Programs</Link>
            </li>
            <li className="navbar-list-items">
              <Link to={"/tuitionandenrollment"}>Tuition & Enrollment</Link>
            </li>
            <li className="navbar-list-items">
              <Link to={"/"}>Parent Portal</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
