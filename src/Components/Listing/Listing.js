import "./Listing.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import api from "../Helper/api";
import Movie from "../Movie/movie";
import { MovieContext } from "../Helper/context";
import { Link, useNavigate } from "react-router-dom";

function Listing() {
  // need a function to display the listins in a section tag with the movie articles
  const [MovieListing, setMovieListing] = useState({});
  const [reRendersts, setReRendersts] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [displayCount, setDisplaycount] = useState(6)
  const { setContext } = useContext(MovieContext);
  const history = useNavigate();

  useEffect(() => {
    const listingApi = async () => {
      const responses = await Promise.all(
        Object.values(api.apiListing).map((links) =>
          axios.get(`${api.apiURL}${links}`)
        )
      );

      const data = Object.fromEntries(
        responses.map((responses, index) => [
          Object.keys(api.apiListing)[index],
          responses.data.results,
        ])
      );

      setMovieListing(data);
    };

    listingApi();
    window.scrollTo(0, 0);
  }, [reRendersts]);

  function reRender(list) {
    setSelectedSection((prevSection) => (prevSection === list ? null : list));
    setReRendersts(!reRendersts);
    setDisplaycount(MovieListing.length)
  }

  function back() {
    reRender(null);
    history(-1);
  }
  return (
    <>
      {selectedSection && <button onClick={back}>Back</button>}

      {Object.entries(MovieListing).map(([list, movies]) => (
        <section key={list.id} className="Listing">
          <div className="title-button">
          {(selectedSection === null || selectedSection === list) && (
            <h2>{list}</h2>
          )}

          {!selectedSection && (
            <button
              onClick={() => reRender(list)}
            >{`View More ${list}`}</button>
          )}
          </div>

            <div className="articles">
          {(selectedSection === null || selectedSection === list) &&
            movies.slice(0, displayCount).map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
        </section>
      ))}
    </>
  );
}
export default Listing;
