import "./HeroSection.css";
import cv from "./CV.pdf";
import PythonIcon from "./icon/python.svg";
import JavaIcon from "./icon/java.svg";
import ReactIcon from "./icon/react.svg";
import JavascriptIcon from "./icon/javascript.svg";
import CssIcon from "./icon/css.svg";
import HtmlIcon from "./icon/html.svg";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div className="hero-section" id="hero">
      <div className="main-cont">
        <span className="added-text">Hi! I am </span>
        <h1 className="name-text">Duy Linh VU</h1>
        <span className="added-text">And I'm a </span>
        <h1 className="job-text">Backend Developer</h1>
        <p className="about-text">I solve problems in the back...</p>
        <div className="call-to-action">
          <a className="cv-btn" href={cv} target="_blank">
            Resume
          </a>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="contact-btn"
          >
            Email me
          </Link>
        </div>
      </div>
      <div className="cube-cont">
        <div className="cube-spinner">
          <div className="cube-face face1">
            <img className="cube-icon" src={PythonIcon} alt="icon" />
          </div>
          <div className="cube-face face2">
            <img className="cube-icon" src={JavaIcon} alt="icon" />
          </div>
          <div className="cube-face face3">
            <img className="cube-icon" src={ReactIcon} alt="icon" />
          </div>
          <div className="cube-face face4">
            <img className="cube-icon" src={JavascriptIcon} alt="icon" />
          </div>
          <div className="cube-face face5">
            <img className="cube-icon" src={CssIcon} alt="icon" />
          </div>
          <div className="cube-face face6">
            <img className="cube-icon" src={HtmlIcon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
