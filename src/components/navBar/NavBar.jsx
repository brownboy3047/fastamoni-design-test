import { Link } from "react-router-dom";

//Assets
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import search from "../../assets/search.png";
import line from "../../assets/line.png";

//components
import MediaIcon from "../MediaIcon";

//style
import "./NavBar.css";

const links = [
  { name: "HOME", href: "/home" },
  { name: "SERVICES", href: "/service" },
  { name: "PAGES", href: "/pages" },
  { name: "CASE SHOP", href: "/shop" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTENT", href: "/content" },
];

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <h1>CreativeLogo</h1>
        <div className="nav-line">
          <img src={line} alt="" />
        </div>
      </div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <MediaIcon className="nav-icon">
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

      <div className="nav-search">
        <img className="nav-line" src={line} alt="line" />
        <img className="search" src={search} alt="search" />
        <img className="nav-line" src={line} alt="line" />
      </div>

      <div className="nav-help">
        <p>Need help?</p>
        <p>+2348000000000</p>
      </div>
    </nav>
  );
};

export default NavBar;
