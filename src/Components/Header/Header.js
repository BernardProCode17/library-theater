import logo from "../../logo images/library_theater_logos_transparent.png";
import { Link } from "react-router-dom";
function Header() {
//   const location = useLocation();

//   console.log(Location.pathname);
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo of library Theater company" />
        <ul>
          <li><Link to="/">Home</Link>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
