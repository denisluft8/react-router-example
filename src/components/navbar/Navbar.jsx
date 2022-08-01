import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-li">
          <Link className="link" to="/">HOME</Link>
        </li>
        <li className="navbar-li">
          <Link className="link" to="/empresa">EMPRESA</Link>
        </li>
        <li className="navbar-li">
          <Link className="link" to="/contato">CONTATO</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
