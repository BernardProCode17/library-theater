import './Main.css'
import { Routes, Route } from "react-router-dom";
import Listing from "../Listing/Listing";
import MovieDetails from "../Movie/moviedetails";
import { MovieContext } from "../Helper/context";
import { useState } from "react";


function Main() {





  const [context, setContext] = useState(null);
  return (
    <main className="Main">
      <MovieDetails />
      <MovieContext.Provider value={{ context, setContext }}>
        <Routes>
          <Route path="*" element={<Listing />}></Route>
        </Routes>
      </MovieContext.Provider>
    </main>
  );
}

export default Main;
