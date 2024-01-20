import "./App.css";
import './normalize_reset.css'

import { useState } from "react";
import Main from "../Components/Main/Main.js";
import Header from "../Components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "../Components/Movie/moviedetails.js";
import About from "../Components/about/about.js";
import Favourites from "../Components/favourites/favourites.js";
import Footer from "../Components/Footer/Footer.js";
import Categories from "../Components/categories/categories.js";
import SearchDisplay from "../Components/search/searchDisplay.js";

function App() {

  const [movieTrailer, setMovieTrailer] = useState([])
  const [searchresults, setSearchresults] = useState([]);
  const [movieID, setMovieID] = useState('')
  console.log(movieID)
  
  function movieIDSetter(paramID) {
    return setMovieID(paramID)
  }
  const receiveResults = (results) => {
    setSearchresults(results);
  }
  // console.log(searchresults)

  return (
    <Router>
      <Header receiveResults={receiveResults} movieTrailer={movieTrailer} movieID={movieID} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/" element={<Listing />}></Route> */}
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/moviedetails/:id" element={<MovieDetails movieTrailer={movieTrailer} setMovieTrailer={setMovieTrailer} movieIDSetter={movieIDSetter} />}></Route>
        <Route path="/categories/:listname" element={<Categories />}></Route>
        <Route path="/search" element={<SearchDisplay results={searchresults} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
