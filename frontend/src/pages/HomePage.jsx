import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowRight,
  faCheckCircle,
  faAppleWhole,
  faSun,
  faStar,
  faBook,
  faLeaf,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
  return (
    <>
      <div className="hero-section container">
        <div className="hero-section-text-container">
          <h1 className="hero-header">Building Bright Minds & Strong Futures</h1>
          <p className="hero-text">
            A safe, nuturing, and enriching home-based learning environment where children learn,
            grow, and thrive.
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
      <div className="why-choose-us-section container">
        <div className="why-choose-text-container">
          <h3 className="why-choose-sub-header green">WHY CHOOSE US</h3>
          <h2 className="why-choose-main-header">A Home Where Children Thrive</h2>
          <p className="why-choose-description">
            Every child deserves a safe, nuturing environment where they can grow, learn, and
            explore at thier own pace.
          </p>
          <div className="why-choose-grid-container">
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faHeart} />

              <h4 className="item-heading">Welcome Home Environment</h4>
              <p className="item-desc grey">
                A warm, home-like setting where your child feels safe, comfortable, and loved
                everyday.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faCheckCircle} />

              <h4 className="item-heading">Licensed & Certified</h4>
              <p className="item-desc grey">
                State of Maryland licensed family child care with over 200 hours of professional
                training.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faAppleWhole} />

              <h4 className="item-heading">Nutritious Meals Provided</h4>
              <p className="item-desc grey">
                Healthy breakfast, lunch and snacks prepared fresh daily for all children.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faSun} />

              <h4 className="item-heading">Daily Outdoor Play</h4>
              <p className="item-desc grey">
                Supervised outdoor activities that encourage physical development and exploration.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faStar} />

              <h4 className="item-heading">Individualized Attention</h4>
              <p className="item-desc grey">
                Small group size ensures each child receives personalized care and learning support.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faBook} />

              <h4 className="item-heading">Daily infant Report Cards</h4>
              <p className="item-desc grey">
                Parents of infants receive detailed daily reports on feeding and naps.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faLeaf} />

              <h4 className="item-heading">Learning Through Play</h4>
              <p className="item-desc grey">
                Age-appropriate activities including crafts, circle time, music, sensory
                exploration, and story time.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faClock} />

              <h4 className="item-heading">Flexible Hours</h4>
              <p className="item-desc grey">
                Open Monday through Friday, 7:30AM to 5:30PM to fit working families' schedules.
              </p>
            </div>
          </div>
          <div className="last-why-container">
            <div className="divide-heart-container">
              <FontAwesomeIcon className="pink lastwhyicon" icon={faHeart} />
            </div>
            <ul className="last-why-list">
              <li className="last-why-list-item">PLAY</li>
              <li className="last-why-list-item">
                <FontAwesomeIcon className="pink small" icon={faHeart} />
              </li>
              <li className="last-why-list-item">LEARN</li>
              <li className="last-why-list-item">
                <FontAwesomeIcon className="pink small" icon={faHeart} />
              </li>
              <li className="last-why-list-item">GROW</li>
              <li className="last-why-list-item">
                <FontAwesomeIcon className="pink small" icon={faHeart} />
              </li>
              <li className="last-why-list-item">BELONG</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
