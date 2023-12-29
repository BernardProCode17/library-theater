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
  const {setContext} = useContext(MovieContext)
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
  }

  function back() {
    reRender(null);
    history(-1);
  }
  return (
    <>
      {selectedSection && <button onClick={back}>Back</button>}
      {Object.entries(MovieListing).map(([list, movies]) => (
        <section key={list}>
          {(selectedSection === null || selectedSection === list) && (
            <h2>{list}</h2>
          )}

          {!selectedSection && (
            <button
              onClick={() => reRender(list)}
            >{`View More ${list}`}</button>
          )}

          {(selectedSection === null || selectedSection === list) &&
            movies.map((movie) => (
              <div onClick={()=> setContext(movie)}>
                <Movie key={movie.id} movie={movie} />
                <Link
                  to={`/moviedetails/${movie.id}`}>
                  <button>More Info</button>
                </Link>
              </div>
            ))}
        </section>
      ))}
    </>
  );
}
export default Listing;
