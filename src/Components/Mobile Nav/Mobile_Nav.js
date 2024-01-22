import { Link } from "react-router-dom";
import { useState } from 'react'
import logo from '../../logo images/logo.png'
import Search from "../search/search";
import './Mobile_Nav.css';


function MobileNav({receiveResults}) {
   const [menuState, setMenuState] = useState(false);
 

   function menuToggle() {
      setMenuState(!menuState);
   }



   return (
      <div>
         <div className="logo-menu">

            <Link to="/">
               <img src={logo} className="mobile-logo" alt="Logo of library Theater company" />
            </Link>
            <button onClick={menuToggle} className="menu_svg">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
               </svg>
            </button>
         </div>

         <nav className={`mobileNav ${menuState ? 'mobileNavShow' : ''}`} >
            <div className="links-search">
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/favourites">Favourites</Link></li>
               </ul>
               <Search receiveResults={receiveResults} />
            </div>
         </nav>
      </div>
   )
}
export default MobileNav;


