import { CiInstagram } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container container-footer">
        <div className="footer-logo">
          <h1>Astro</h1>
          <div className="footer-text">
            <p>12312 Hai Phong,</p>
            <p> Vietnam</p>
            <p>+84 123 456 789</p>
          </div>
          <div className="footer-icon">
            <CiInstagram className="icon" />
            <LuFacebook className="icon" />
            <PiYoutubeLogoLight className="icon" />
          </div>
        </div>
        <div className="footer-page">
          <h3>Page</h3>
          <ul className="page-list">
            <li>
              <Link
                to={"/"}
                className={({ isActive }) => (isActive ? "active_link" : "")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/mens"}
                className={({ isActive }) => (isActive ? "active_link" : "")}
              >
                Men&apos;s
              </Link>
            </li>
            <li>
              <Link
                to={"/womens"}
                className={({ isActive }) => (isActive ? "active_link" : "")}
              >
                Women&apos;s
              </Link>
            </li>
            <li>
              <Link
                to={"/kids"}
                className={({ isActive }) => (isActive ? "active_link" : "")}
              >
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            Subscribe our newsletter to get more deals, new products and
            promotions
          </p>
          <div className="footer-input">
            <input type="text" placeholder="Your email" />
            <button>
              <IoIosArrowRoundForward className="arrow" />
            </button>
          </div>
        </div>
      </div>
      <hr className="footer-hr container" />
      <div className="footer-bottom container">
        <p>© 2023 Astro. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
