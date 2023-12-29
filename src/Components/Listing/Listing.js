import { useEffect, useState } from "react";
import axios from "axios";
import api from "../Helper/api";
import Movie from "../Movie/movie";

function Listing() {
  // need a function to display the listins in a section tag with the movie articles
  const [MovieListing, setMovieListing] = useState({});
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
      console.log(data);
    };

    listingApi();
  }, []);

  //when viewing the single listing page render the listing component with the listing listing
  return (
    <>
      {Object.entries(MovieListing).map(([list, movies]) => (
        <section key={list}>
          <h2>{list}</h2>

          {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
          ))}
        </section>
      ))}
    </>
  );
}
export default Listing;
