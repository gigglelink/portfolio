import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="nav-box">
      <div className="nav">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          href="/#/"
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          duration={500}
          href="/#/project"
          className="nav-link"
        >
          Project
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          href="/#/experience"
          className="nav-link"
        >
          Experience
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          href="/#/contact"
          className="nav-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
