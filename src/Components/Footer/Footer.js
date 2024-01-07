import logo from '../../logo images/logo.png';
import {Link } from 'react-router-dom';

function Footer(){

   return(
      <footer>
         <p>&copy;</p>
         <img src={logo} alt="library theater logo" width={150}/>

         <nav>
            <ul>
               <li><Link to="/main">Home</Link></li>

               <li><Link to="/about">About</Link></li>

               <li><Link to="/favourites">Favourites</Link></li>

               <li><a href='#popular'>Popular</a></li>

               <li><a href='#now-playing'>Now Playing</a></li>

               <li><a href='#upcoming'>Upcoming</a></li>

               <li><a href='#top-rated'>Top Rated</a></li>

            </ul>
         </nav>
      </footer>
   )
}
export default Footer;