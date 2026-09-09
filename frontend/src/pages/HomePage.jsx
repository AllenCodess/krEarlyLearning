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
          <button className="hero-btn">Schedule A tour</button>
        </div>
        <div className="hero-img-container">
          <img className="hero-img" src="/frontend/public/images/heroimg.png" alt="" />
        </div>
      </div>
    </>
  );
};
