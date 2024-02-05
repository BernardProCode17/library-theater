import "./Header.css";
import DeskTopNav from "../Desktop Nav/Desktop_Nav";
import MobileNav from "../Mobile Nav/Mobile_Nav";
import { useEffect, useState } from "react";


function Header({ receiveResults }) {
  const [devicewidth, setDevicewidth] = useState(window.innerWidth >= 320)

  useEffect(() => {

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
