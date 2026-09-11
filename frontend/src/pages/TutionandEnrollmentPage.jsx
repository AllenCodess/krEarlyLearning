import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./../components/Footer";

export const TuitionandEnrollment = () => {
  return (
    <>
      <div className="pre-program-section container">
        <div className="program-header">
          <h1 className="programheader green">Tuition & Enrollment</h1>
          <p className="subheaderone">Simple steps to join our nurturing learning community.</p>
          <p className="subheaderotwo">
            At KR Early Learning Academy, we offer quality care in a safe, loving, and enriching
            environment where children learn, grow, and thrive. Contact our center todat for current
            tuition rates and availability.
          </p>
        </div>
        <div className="program-cards-section">
          <div className="program-card">
            <img
              className="program-img"
              src="/public/images/infanttuition.png"
              alt="Toddler Program picture"
            />
            <div className="program-card-text-container">
              <p className="ages-program-pink">Infants & Toddlers</p>
              <h3 className="program-card-header green">Tution Options </h3>
              <p className="program-card-text">
                We offer flexible tuition options to meet th eneeds of your family. Our goal is to
                provide high-quality care that is accessible and supportive.
              </p>
              <ul className="program-card-list">
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Infant & Young Toddler $325/week
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Toddler & Preschool $275/week
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Full-time care available
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Part-time scheduling may be available
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Flexible care options to fit your family's needs
                </li>
              </ul>
            </div>
          </div>
          <div className="program-card">
            <img
              className="program-img"
              src="/public/images/tuitioninclude.png"
              alt="Toddler Program picture"
            />
            <div className="program-card-text-container">
              <p className="ages-program">WHAT'S INCLUDED</p>
              <h3 className="program-card-header green">What Tuition Includes</h3>
              <p className="program-card-text">
                Our tuition helps provide a rich and nuturing experience for every child. Each day
                is filled with opportunities to learn, explore, and grow.
              </p>
              <ul className="program-card-list">
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Age-appropriate curriculum and learning activities
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Caring and experienced teachers
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Safe and nuturing environment
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Daily communication with families
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check green" icon={faCheckSquare} />
                  Nutritious meals, snacks and classroom materials
                </li>
              </ul>
            </div>
          </div>
          <div className="program-card">
            <img
              className="program-img"
              src="/public/images/infanttuition.png"
              alt="Toddler Program picture"
            />
            <div className="program-card-text-container">
              <p className="ages-program-pink">GETTING STARTED</p>
              <h3 className="program-card-header green">Enrollment Requirements </h3>
              <p className="program-card-text">
                To ensure a smooth enrollment process, please have the following items ready. Our
                team is here to guide you every step of the way.
              </p>
              <ul className="program-card-list">
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Completed enrollment form
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Immunization records
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Emergency contact information
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Tour or family interview
                </li>
                <li className="program-list-items">
                  <FontAwesomeIcon className="program-check pink" icon={faCheckSquare} />
                  Registration fee and deposit required
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
