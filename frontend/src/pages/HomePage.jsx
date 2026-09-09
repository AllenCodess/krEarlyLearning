import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
  return (
    <>
      <div className="hero-section container">
        <div className="hero-section-text-container">
          <h1 className="hero-header">Building Bright Minds & Strong Futures</h1>
          <p className="hero-text">
            A safe, nuturing, and enriching home-based learning environment where childeren learn,
            grow, and thrive.
          </p>
          <button className="hero-btn">
            Schedule a Tour <FontAwesomeIcon className="hero-arrow" icon={faArrowRight} />
          </button>
          <ul className="hero-list">
            <li className="hero-list-item">LEARN</li>
            <li className="hero-list-item pink">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li className="hero-list-item">LEARN</li>
            <li className="hero-list-item pink">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li className="hero-list-item">LEARN</li>
          </ul>
        </div>
      </div>
    </>
  );
};
