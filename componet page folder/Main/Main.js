import './Main.css'
import { Routes, Route } from "react-router-dom";
import Listing from "../Listing/Listing";
// import Search from '../search/search';
// import SearchDisplay from '../search/searchDisplay';


function Main() {




  return (
    <main className="Main">

        <Routes>
          <Route path="/" element={<Listing />}></Route>          
        </Routes>
    </main>
  );
}

export default Main;
