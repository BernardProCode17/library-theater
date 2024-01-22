import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../Components/Helper/api";
import MovieDisplay from "../../Components/Movie/moviedisplay";
import { Link } from "react-router-dom";

function HomePage() {
  // need a function to display the listins in a section tag with the movie articles
  const [MovieListing, setMovieListing] = useState({});
  const [selectedSection, setSelectedSection] = useState(null);
  const [displayCount, setDisplaycount] = useState(6)


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
          responses.data.results
        ])
      );

      setMovieListing(data);
    };

    listingApi();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>


      {Object.entries(MovieListing).map(([list, movies, index]) => {
        const listUrl = list.replace(" ", "_");
        return (
          <section key={index} id={list.id} className="Categories">

            <div className="title-button">
              {(selectedSection === null || selectedSection === list) && (
                <h2>{list}</h2>
              )}

              {!selectedSection && (
                <Link to={`/Categories/${listUrl}/`}>{list}</Link>
              )}
            </div>

            <div className="articles">
              {(selectedSection === null || selectedSection === list) &&
                movies.slice(0, displayCount).map((movie) => <MovieDisplay key={movie.id} movie={movie} />)}
            </div>

          </section>
        )
      })}
    </>
  );
}
export default HomePage;
