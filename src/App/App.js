import "./App.css";
import Main from "../Components/Main/Main.js";
import Header from "../Components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from "../Components/Listing/Listing.js";
import Movie from "../Components/Movie/movie.js";

{/*<Main /> */}
<Header />
function App() {
  
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Listing/>}></Route>
    <Route path="/movies/:id" element={<Movie/>}></Route>
  </Routes>
 </Router>
  );
}

export default App;
