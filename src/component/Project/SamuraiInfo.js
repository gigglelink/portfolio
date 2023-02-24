import samuraiGIF from "./img/samurai.gif";
import x from "./img/x.png";
import "./About.css";

function SamuraiInfo(props) {
  return (
    <div className="about-overlay">
      <div className="about-box">
        <img
          className="about-close-btn"
          src={x}
          onClick={props.toggleAboutSamurai}
        />
        <div className="gif-box">
          <img className="gif" src={samuraiGIF} alt="project's gif" />
        </div>
        <p className="about-project-text">
          SAMURAI'S SURVIVAL is a simple game with only one goal: to survive.
          Dodging arrows and fighting enemies. It is my first python project. If
          you are to try it out: the attack have 4 frames and only the last 2
          frames actually count as hit - so hit early.
        </p>
        <a
          className="code-btn"
          href="https://github.com/gigglelink/pygame/blob/master/samurai's%20survival/python%20file/main.py"
          target="_blank"
        >
          Code():
        </a>
      </div>
    </div>
  );
}

export default SamuraiInfo;
