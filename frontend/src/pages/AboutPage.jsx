import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight, faBook, faUsers, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";
export const AboutPage = () => {
  return (
    <>
      <div className="about-section container">
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

      <div className="why-choose-us-section container">
        <div className="why-choose-text-container">
          <h3 className="why-choose-sub-header green">OUR MISSION</h3>
          <h2 className="why-choose-main-header">Nuturing Today for Brighter Tomorrows</h2>
          <p className="why-choose-description">
            To provide a safe, loving, and enriching home-based learning environment where children
            learn, grow, and thrive through play, exploration, and meaningful relationships.
          </p>
          <div className="why-choose-grid-container">
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faHeart} />

              <h4 className="item-heading">Safe & Loving Environment</h4>
              <p className="item-desc grey">
                A warm, home-like setting where your children feel secure, valued, and encoruaged to
                be themsleves.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faBook} />

              <h4 className="item-heading">Early Learning Foucs</h4>
              <p className="item-desc grey">
                Age-appropriate activities that build confidence, creativity, and a lifelong love of
                learning.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faUsers} />

              <h4 className="item-heading">Individualized Attention</h4>
              <p className="item-desc grey">
                Small group care that allows each child to receive the support they need to succeed.
              </p>
            </div>
            <div className="why-choose-grid-item">
              <FontAwesomeIcon className="green fonticonwhy" icon={faLeaf} />

              <h4 className="item-heading">Strong Foundations</h4>
              <p className="item-desc grey">
                We help children develop the social, emotional, cognitive, and physical skills for
                future success.
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
      <div className="our-story-section container">
        <div className="our-story-flex">
          <img src="/public/images/ourstory.png" className="our-story-img" alt="Our Story Image" />
          <div className="our-story-text-container">
            <h3 className="subheaderabout green">OUR STORY</h3>
            <h2 className="mainheaderabout green">A Passion for Children, A Brighter Community</h2>
            <p className="ourstorydesc">
              KR Early Learning Academy was founded with a simple vision. To create a nurturing,
              home-based learning environment where children feel loved, supported, and inspired to
              reach their full potential. With years of experience and a genuine passion for early
              childhood education, we are committed to making a positive difference in the lives of
              children and families in our community.
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
        <hr className="abouthr" />
        <Footer />
      </div>
    </>
  );
};
