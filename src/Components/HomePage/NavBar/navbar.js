import "./navbar.css";
import logo from './scrumster-logo-color-on-transparent.png';

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <a href="/logo">
          <img className="nav-logo" src={logo} alt="app logo"></img>
        </a>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="/home" className="nav-item-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/tools" className="nav-item-link">
              Tools
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
