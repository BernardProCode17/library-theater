import "./Header.css";
import DeskTopNav from "../Desktop Nav/Desktop_Nav";
import MobileNav from "../Mobile Nav/Mobile_Nav";
import { useEffect, useState } from "react";


function Header({ receiveResults }) {
  const [devicewidth, setDevicewidth] = useState(window.innerWidth = 320)
  // if device width is greater then x amount of px then show the desktop nav menu else show the mobile menu

  useEffect(() => {
    function resize() {
      return setDevicewidth(window.innerWidth >= 1280)
    }
    window.addEventListener('resize', resize)
  })


  function navPxWidth() {
    if (window.innerWidth > 1280) {
      return <MobileNav receiveResults={receiveResults} />
    } else {
      return <DeskTopNav receiveResults={receiveResults} />
    }
  }
  return (
    <header className="mainHeader">
      {navPxWidth()}
      {/* <MobileNav receiveResults={receiveResults} />
      <DeskTopNav receiveResults={receiveResults} /> */}
    </header>
  );
}

export default Header;
