import "./App.css";
import Main from "../Components/Main/Main.js";
import Header from "../Components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "../Components/Movie/moviedetails.js";

<Header />;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
