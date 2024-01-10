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
            // console.log(responses.data)

      setMovieListing(data);
    };

    listingApi();
    window.scrollTo(0, 0);
  }, []);

  console.log(MovieListing)

  return (
    <>
     

      {Object.entries(MovieListing).map(([list, movies, index]) => {
        const listUrl = list.replace(" ", "_");
        return (
        <section key={index} id={list.id} className="Listing">
         
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
            movies.slice(0, displayCount).map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
        
        </section>
      )})}
    </>
  );
}
export default Listing;
