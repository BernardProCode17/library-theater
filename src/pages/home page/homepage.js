import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../Components/service/api";
import MovieDisplay from "../../Components/Movie/moviedisplay";
import { Link } from "react-router-dom";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

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

  const [headerVideo, setHeaderVideo] = useState('');
  useEffect(() => {
    async function fetchRandomMovieTrailer() {
      // Fetch a list of movies
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api.apiKey}`);
      const data = await response.json();
      
      // Select a random movie
      const movie = data.results[Math.floor(Math.random() * data.results.length)];

      //Fetch the videos for the selected movie
      const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api.apiKey}`);
      const videoData = await videoResponse.json();

      const trailer = videoData.results.find((video) => video.type === "Trailer");

      if (trailer) {
        setHeaderVideo(trailer.key);
      } else {
        console.log("Trailer not found");
      }
    }

    fetchRandomMovieTrailer();
  }, []);

  return (
    <>
      <VideoPlayer trailer={headerVideo} />
      <main>
        {Object.entries(MovieListing).map(([list, movies, index]) => {
          const listUrl = list.replace(" ", "_");
          let evenAmtMovie = movies.length;
          if (evenAmtMovie % 2 !== 0) {
            evenAmtMovie -= 2;
          }
          return (
            <section key={index} id={list.id} className="Categories">

              <div className="title-button">
                <h2>{list}</h2>

                <Link to={`/Categories/${listUrl}/`}>{list}</Link>
              </div>

              <div className="articles">
                {movies.slice(0, evenAmtMovie).map((movie) =>
                  <MovieDisplay key={movie.id} movie={movie} />)
                }
              </div>
            </section>
          )
        })}
      </main>

    </>
  );
}
export default HomePage;
