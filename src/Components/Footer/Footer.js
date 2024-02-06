import './Footer.css';
import logo from '../../media/logo.png';
import { Link } from 'react-router-dom';

function Footer() {

   return (
      <footer className='footer'>

         <div className='logo'>
            <Link to="/">
               <img src={logo} alt="library theater logo" width={150} className='footer-logo' />
            </Link>
         </div>

         <nav className='footer-nav'>

            <div className='footer-page-nav'>
               <ul>
                  <li><Link to="/">Home</Link></li>

                  <li><Link to="/about">About</Link></li>

                  <li><Link to="/favourites">Favourites</Link></li>
               </ul>
            </div>

            <div className='footer-categories-nav'>
               <h3>Categories </h3>
               <ul>
                  <li><Link to='/categories/Popular/'>Popular</Link></li>

                  <li><Link to='/categories/Now_Playing/'>Now Playing</Link></li>

                  <li><Link to='/categories/Upcoming/'>Upcoming</Link></li>

                  <li><Link to='/categories/Top_Rated'>Top Rated</Link></li>
               </ul>
            </div>

         </nav>
         <span className='copyright'><p> <span>2023</span> <span>&copy;</span></p></span>

      </footer >
   )
}
export default Footer;