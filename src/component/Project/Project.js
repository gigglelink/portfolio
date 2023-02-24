import "./Project.css";
import { useState } from "react";
import sudokuPic from "./img/sudokupic.png";
import samuraiPic from "./img/samuraipic.png";
import SamuraiInfo from "./SamuraiInfo";
import SudokuInfo from "./SudokuInfo";
import PythonIcon from "./icon/python.svg";

function Project() {
  const [aboutSamurai, setAboutSamurai] = useState(false);

  function toggleAboutSamurai() {
    setAboutSamurai(!aboutSamurai);
  }

  const [aboutSudoku, setAboutSudoku] = useState(false);

  function toggleAboutSudoku() {
    setAboutSudoku(!aboutSudoku);
  }

  return (
    <div className="project">
      {aboutSamurai && <SamuraiInfo toggleAboutSamurai={toggleAboutSamurai} />}
      {aboutSudoku && <SudokuInfo toggleAboutSudoku={toggleAboutSudoku} />}
      <div className="project-box">
        <div className="pic-box">
          <img
            className="project-img"
            src={sudokuPic}
            alt="project's image"
          ></img>
        </div>
        <div className="project-description">
          <p className="project-head">SUDOKU SOLVER</p>
          <p className="project-text">
            A Program built to solve sudoku with Backtracking algorithm. You can
            insert your problem and run the program to see how the algorithm
            run.
          </p>
          <div className="project-button-box">
            <img className="work-icon" src={PythonIcon} alt="Python" />
            <a className="project-button" onClick={toggleAboutSudoku}>
              About
            </a>
            <a
              href="https://github.com/gigglelink/pygame/tree/master/Sudoku%20solver"
              target="_blank"
              className="project-button"
            >
              Link
            </a>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="pic-box">
          <img
            className="project-img"
            src={samuraiPic}
            alt="project's image"
          ></img>
        </div>
        <div className="project-description">
          <p className="project-head">SAMURAI'S SURVIVAL</p>
          <p className="project-text">
            A Simple game with only one goal: to survive. Dodging arrows and
            fighting enemies, how long can you last?
          </p>
          <div className="project-button-box">
            <img className="work-icon" src={PythonIcon} alt="Python" />
            <a className="project-button" onClick={toggleAboutSamurai}>
              About
            </a>
            <a
              href="https://github.com/gigglelink/pygame/tree/master/samurai's%20survival"
              target="_blank"
              className="project-button"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
