import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../Components/service/api";
import MovieDisplay from "../../Components/Movie/moviedisplay";
import { Link } from "react-router-dom";

function HomePage() {
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
        let evenAmtMovie = movies.length;
        if(evenAmtMovie % 2 !== 0){
          evenAmtMovie -= 2;
        }
        return (
          <section key={index} id={list.id} className="Categories">

            <div className="title-button">
              <h2>{list}</h2>

              <Link to={`/Categories/${listUrl}/`}>{list}</Link>
            </div>

            <div className="articles">
              {movies.slice(0, Math.min(4, evenAmtMovie)).map((movie) =>
                <MovieDisplay key={movie.id} movie={movie} />)
              }
            </div>
          </section>
        )
      })}
    </>
  );
}
export default HomePage;
