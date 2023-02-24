import "./Experience.css";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-scroll";

function Experience() {
  return (
    <div className="experience" id="experience">
      <p className="experience-text">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="btn"
        >
          HIRE
        </Link>{" "}
        <p>TO SEE YOUR NAME HERE</p>
      </p>
      <div className="empty-box">
        <RotatingLines
          strokeColor="#dee2e6"
          strokeWidth="5"
          animationDuration="1"
          width="96"
          visible={true}
        />
      </div>
    </div>
  );
}

export default Experience;
