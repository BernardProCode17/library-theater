import "./Header.css";
import DeskTopNav from "../Desktop Nav/Desktop_Nav";
import MobileNav from "../Mobile Nav/Mobile_Nav";
import { useEffect, useState } from "react";


function Header({ receiveResults }) {
  const [devicewidth, setDevicewidth] = useState(window.innerWidth >= 320)
  // changes the menu base on viewpoint size
  useEffect(() => {
    // get the broswer window width, which change the menu at 950px (laptop screen)
    function resize() {
      return setDevicewidth(window.innerWidth >= 950)
    };
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    };
  }, []);


  return (
    <header className="mainHeader">
      {devicewidth ? <DeskTopNav receiveResults={receiveResults} /> : <MobileNav receiveResults={receiveResults} />}
    </header>
  );
}

export default Header;
