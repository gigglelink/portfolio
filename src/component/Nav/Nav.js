import "./Nav.css";

function Nav() {
  return (
    <div className="nav-box">
      <div className="nav">
        <a href="/" className="nav-link">
          About
        </a>
        <a href="/project" className="nav-link">
          Project
        </a>
        <a href="/experience" className="nav-link">
          Experience
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
