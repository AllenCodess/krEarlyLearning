import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className="contact-container container">
        <div className="contact-left">
          <h2 className="contact-subheader">Contact Us</h2>
          <h1 className="contact-main-header">KR Early Learning Academy</h1>
          <p className="contact-desc">
            We’d love to hear from you! Families can reach out with any questions, schedule a tour,
            ask about enrollment, or learn more about our programs. At KR Early Learning Academy,
            we’re committed to providing a safe, loving, and enriching environment where infants,
            toddlers, and preschool children learn, grow, and thrive.
          </p>
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
          </div>
        </div>
        <div className="contact-right">
          <div className="form-container">
            <div className="form-header">
              <h1 className="form-heading">Send Us A Message</h1>
              <p className="form-text">We'll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
