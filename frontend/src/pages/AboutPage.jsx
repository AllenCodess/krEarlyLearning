import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight, faBook, faLeaf } from "@fortawesome/free-solid-svg-icons";
export const AboutPage = () => {
  return (
    <>
      <div className="hero-section container">
        <div className="hero-section-text-container">
          <h1 className="hero-header">About Us</h1>
          <p className="hero-text">More than childcare. A place to learn, grow and belong.</p>
          <p className="hero-subtext">
            At KR Early Learning Academy, we believe every child is capable, unique, and full of
            potential. Our mission is to provide a safe, nuturing, and enriching home based learning
            environment where children build the foundation for bright futures.
          </p>
          <button className="hero-btn">
            Schedule a Tour <FontAwesomeIcon className="hero-arrow" icon={faArrowRight} />
          </button>
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
      </div>
    </>
  );
};
