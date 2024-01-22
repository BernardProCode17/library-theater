import './normalize_reset.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header.js";
import HomePage from "../pages/home page/homepage";
import Movie from "../pages/movie/movie.js";
import About from "../pages/about/about.js";
import Favourites from "../pages/favourites/favourites.js";
import Categories from "../pages/categories/categories.js";
import SearchDisplay from "../pages/search/search.js";
import Footer from "../Components/Footer/Footer.js";

function App() {

  const [movieTrailer, setMovieTrailer] = useState([])
  const [searchresults, setSearchresults] = useState([]);
  const [movieID, setMovieID] = useState('')
  
  
  function movieIDSetter(paramID) {
    return setMovieID(paramID)
  }
  const receiveResults = (results) => {
    setSearchresults(results);
  }
console.log(receiveResults)
  return (
    <Router>
      <Header receiveResults={receiveResults} movieTrailer={movieTrailer} movieID={movieID} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/movie/:id" element={<Movie movieTrailer={movieTrailer} setMovieTrailer={setMovieTrailer} movieIDSetter={movieIDSetter} />}></Route>
        <Route path="/categories/:listname" element={<Categories />}></Route>
        <Route path="/search" element={<SearchDisplay results={searchresults} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
