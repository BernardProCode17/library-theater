import './Header.css'
import logo from "../../logo images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../Helper/api';

function Header() {
  const[headerVideo, setHeaderVideo] = useState(null);

  useEffect(()=> {
    async function playVideo(){
      const headerMethod = await api.apiHeaderVideo();
      console.log(headerMethod)
      const releaseResult = headerMethod.result[0];
      const video = await api.apiHeaderVideo(releaseResult.id);
      console.log(video);
      setHeaderVideo(video.result[0]);
    }

    playVideo();
  }, []);

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

      <video src={headerVideo ? headerVideo.key : ''} autoPlay loop></video>
    </header>
  );
}

export default Header;
