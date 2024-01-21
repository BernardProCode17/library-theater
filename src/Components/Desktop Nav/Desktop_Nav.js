import logo from "../../logo images/logo.png";
import { Link } from "react-router-dom";
import Search from "../search/search";



function DeskTopNav(receiveResults) {

   return (
      <nav className="Nav">
         <Link to="/">
            <img src={logo} alt="Logo of library Theater company" />
         </Link>
         <div className="links-search">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/favourites">Favourites</Link></li>
            </ul>
            <button style={{ width: '3.5rem' }}>&#9776;</button>
            <Search receiveResults={receiveResults} />
         </div>
      </nav>
   )
}
export default DeskTopNav