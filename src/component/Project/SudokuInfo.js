import sudokuGIF from "./img/sudoku.gif";
import x from "./img/x.png";
import "./About.css";

function SudokuInfo(props) {
  return (
    <div className="about-overlay">
      <div className="about-box">
        <img
          className="about-close-btn"
          src={x}
          onClick={props.toggleAboutSudoku}
        />
        <div className="gif-box">
          <img className="gif" src={sudokuGIF} alt="project's gif" />
        </div>
        <p className="about-project-text">
          SUDOKU SOLVER built to solve sudoku with Backtracking algorithm. You
          can insert your problem and run the program to see how the algorithm
          run. Sudoku solver created using backtracking algorithms for
          demonstration purposes so the program is not optimize, with harder
          sudoku problem it might take a long time or the program even stop
          responding.
        </p>
        <a
          className="code-btn"
          href="https://github.com/gigglelink/pygame/blob/master/Sudoku%20solver/python%20file/main.py"
          target="_blank"
        >
          Code():
        </a>
      </div>
    </div>
  );
}

export default SudokuInfo;
