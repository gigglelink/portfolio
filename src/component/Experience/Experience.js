import "./Experience.css";
import { RotatingLines } from "react-loader-spinner";

function Experience() {
  return (
    <div className="experience">
      <p className="experience-text">
        <a href="/#/ontact" className="btn">
          HIRE
        </a>{" "}
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
