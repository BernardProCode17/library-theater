import "./App.css";
import Main from "../Components/Main/Main.js";
import Header from "../Components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "../Components/Movie/moviedetails.js";
import About from "../Components/about/about.js";
import Favourites from "../Components/favourites/favourites.js";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
