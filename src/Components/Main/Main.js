import './Main.css'
import { Routes, Route } from "react-router-dom";
import Listing from "../Listing/Listing";
import MovieDetails from "../Movie/moviedetails";
import { MovieContext } from "../Helper/context";
import { useState } from "react";
import Search from '../search/search';

function Main() {
  const [context, setContext] = useState(null);
  return (
    <main className="Main">
      <MovieContext.Provider value={{ context, setContext }}>
        <Routes>
          <Route path="*" element={<Listing />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </MovieContext.Provider>
    </main>
  );
}

export default Main;
