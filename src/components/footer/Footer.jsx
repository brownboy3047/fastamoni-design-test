import { Link } from "react-router-dom";

//assets
import phone from "../../assets/phone-square.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

//components
import MediaIcon from "../MediaIcon";
import Button from "../button/Button";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>CreativeLogo</h3>
          <p>
            Welcome to our consultancy agency. Lore ipsum simply text amet cing
            elit simply text amet cing elit.
          </p>

          <p className="footer-line"></p>

          <div className="footer-phone">
            <img src={phone} alt="phone number" />
            <span>+234800000000000</span>
          </div>

          <div className="footer-email">
            <img src={email} alt="email" />
            <span>needhelp@company.com</span>
          </div>

          <div className="footer-location">
            <img src={location} alt="location" />
            <span>66 Broklyn Street New York, USA</span>
          </div>
        </div>

        <div className="footer-explore">
          <h3>EXPLORE</h3>

          <div className="footer-explore-con">
            <ul>
              <li>About</li>
              <li>Meet our Team</li>
              <li>Case studies</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>

            <ul>
              <li>Support</li>
              <li>Terms of use</li>
              <li>Privacy & Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div className="footer-news">
          <h3>NEWS LETTER</h3>

          <div className="footer-news-form">
            <label>Subscribe for latest articles and resources</label>
            <div className="footer-news-input">
              <input type="email" placeholder="Email Address" />
              <Button>REGISTER</Button>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-line-lower"></p>

      <div className="footer-lower">
        <p>© Copyright 2021 by Company</p>

        <MediaIcon className="footer-icon">
          <Link to="#">
            <img src={instagram} alt="instagram" />
          </Link>

          <Link to="#">
            <img src={linkedin} alt="linkedin" />
          </Link>

          <Link to="#">
            <img src={twitter} alt="twitter" />
          </Link>

          <Link to="#">
            <img src={facebook} alt="facebook" />
          </Link>
        </MediaIcon>
      </div>
    </footer>
  );
};

export default Footer;
