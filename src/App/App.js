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
import { GlobalProvider } from '../Context/GlobalContext.js';


function App() {
  // Receive the search result from the search component in the header
  const [searchresults, setSearchresults] = useState([]);

  const receiveResults = (results) => {
    setSearchresults(results);
  }

  return (
    <Router basename="/library-theater">
      <GlobalProvider>
        <Header receiveResults={receiveResults} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
          <Route path="/categories/:listname" element={<Categories />}></Route>
          <Route path="/search" element={<SearchDisplay results={searchresults} />}></Route>{/* displays the search result as a page */}
        </Routes>
        <Footer />
      </GlobalProvider>
    </Router>
  );
}

export default App;
