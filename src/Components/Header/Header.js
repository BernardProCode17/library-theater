import './Header.css'
import logo from "../../logo images/logo.png";
import { Link } from "react-router-dom";
function Header() {

  return (
    <header className="mainHeader">
      <nav className='Nav'>

        <Link to='/'>
        <img src={logo} alt="Logo of library Theater company" />
        </Link>

        <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/favourites'>Favourites</Link></li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
