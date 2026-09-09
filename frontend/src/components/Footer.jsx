import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="footer-container container">
        <div className="footerone">
          <img className="kr-logo" src="/public/images/krlogo.png" alt="kr logo" />
          <h2 className="footer-header">Building Brighter Futures Together</h2>
          <p>
            A safe, nuturing, and enriching home-based learning environment where children learn,
            grow, and thrive.
          </p>
          <ul className="hero-list">
            <li className="hero-list-item green">LEARN</li>
            <li className="hero-list-item pink">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li className="hero-list-item green">GROW</li>
            <li className="hero-list-item pink">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li className="hero-list-item green">THRIVE</li>
          </ul>
        </div>
        <hr className="solid-line" />
        <div className="footertwo">
          <h2 className="footer-header"> Quick Links</h2>
          <ul className="footer-link-list">
            <li className="footer link-item">Home</li>
            <li className="footer link-item">About Us</li>
            <li className="footer link-item">Tuition & Enrollment</li>
            <li className="footer link-item">Parent Portal</li>
          </ul>
        </div>
        <hr className="solid-line" />
        <div className="footerthree">
          <h2 className="footer-header">Contact Us</h2>
          <div className="contact-footer-container">
            <div className="footer-location">
              <FontAwesomeIcon className="pink" icon={faLocationDot} />
              <p>123 Learning Lane, Northbrook, IL 60062</p>
            </div>
            <div className="footer-location">
              <FontAwesomeIcon className="green" icon={faPhone} />
              <p>(428) 876 7543</p>
            </div>
            <div className="footer-location">
              <FontAwesomeIcon className="pink" icon={faEnvelope} />
              <p>info@krearlylearning.com</p>
            </div>
            <div className="footer-location">
              <FontAwesomeIcon className="green" icon={faClock} />
              <p>Mon - Fri 7:30AM - 5:30PM</p>
            </div>
          </div>
        </div>
        <hr className="solid-line" />
        <div className="footerfour">
          <h2 className="footer-header">Stay Connected</h2>
          <ul className="footer-socials-list">
            <li className="social-list-item">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </li>
            <li className="social-list-item">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
