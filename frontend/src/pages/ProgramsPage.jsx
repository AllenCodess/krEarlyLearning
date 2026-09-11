import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./../components/Footer";

export const ProgramPage = () => {
  return (
    <>
      <div className="pre-program-section container">
        <div className="program-header">
          <h1 className="programheader green">Our Programs</h1>
          <p className="subheaderone">Nuturing every stage. Supporting every milestone.</p>
          <p className="subheaderotwo">
            At KR Early Learning Academy, we provide a safe, loving, and enriching environment where
            children learn, grow, and thrive. Each room is thoughtfully designed to meet the
            developmental needs of the children it serves.
          </p>
        </div>
        <div className="program-cards-section">
          <div className="program-card">
            <img
              className="program-img"
              src="/public/images/infants.png"
              alt="Toddler Program picture"
            />
            <div className="program-card-text-container">
              <p className="ages-program-pink">AGES 0-18 MONTHS</p>
              <h3 className="program-card-header green">Infant & Young Toddler Room</h3>
              <p className="program-card-text">
                A calm, cozy space designed for your baby's safety and comfort with soft lighting
                and soothing colors.
              </p>
              <ul className="program-card-list">
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Safe sleep environment following AAP guidelines
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Sensory play and tummy time activities
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Individual feeding and nap schedules
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Daily communication with parents
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Gentle music and early language exposure
                </li>
              </ul>
            </div>
          </div>
          <div className="program-card">
            <img
              className="program-img"
              src="/public/images/toddler.png"
              alt="Toddler Program picture"
            />
            <div className="program-card-text-container">
              <p className="ages-program">AGES 18 MONTHS-5 YEARS</p>
              <h3 className="program-card-header green">Toddler & Preschool Room</h3>
              <p className="program-card-text">
                A bright, stimulating space filled with learning stations, creative materials, and
                room to explore.
              </p>
              <ul className="program-card-list">
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  ABCs, numbers, shapes, and colors curriculum
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Strutured circle time and storytime
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Arts and crafts, creative expression
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Social skills and sharing practice
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Pre-K readiness and early writing
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="abouthr" />
        <Footer />
      </div>
    </>
  );
};
