import './DesktopNav.css'
import logo from "../../media/logo.png";
import { Link } from "react-router-dom";
import Search from "../search/search";



function DeskTopNav({ receiveResults }) {

   return (
      <section className='desktop-menu'>
         {/* logo with link the to home page */}
         <Link to="/">
            <img src={logo} alt="Logo of library Theater company" />
         </Link>

         {/* container for the nav links and the search bar */}
         <div className="links-search">

            <nav className="Nav">
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/favourites">Favourites</Link></li>
               </ul>
            </nav>

            <Search receiveResults={receiveResults} />
            {/* search bar component, refer to the component in the component folder */}

         </div>
      </section>
   )
}
export default DeskTopNav