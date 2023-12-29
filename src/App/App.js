import "./App.css";
import { useState } from "react";
// import { currentYear } from "../Components/Helper/Year.js";
import Movie from "../Components/Movie/movie.js";
import Fetch from "../Components/Helper/fetch.js";
import api from "../Components/Helper/api.js";
function App() {
  const [apiData, setApiData] = useState();
  Fetch(setApiData);

  return (
    <div className="App">
      <h1>React Movie</h1>
      <Movie data={apiData} />
    </div>
  );
}

export default App;
