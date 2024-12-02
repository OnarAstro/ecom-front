import "./Hero.css";

import hero from "./../../assets/Hero.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <img src={hero} alt="" />
      </div>
      <div className="hero-text">
        <h1>Bring the warmth.</h1>
        <div className="hero-p">
          <p>Everyone needs a good winter jacket.</p>
          <p>Find yours with our collection and more.</p>
        </div>
        <button>Shopping Now</button>
      </div>
    </div>
  );
};

export default Hero;
