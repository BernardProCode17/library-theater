import "./Header.css";
import logo from "../../logo images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Helper/api";
import Search from "../search/search";

function Header() {
  const [headerVideo, setHeaderVideo] = useState(null);

  useEffect(() => {
    async function fetchRandomMovieTrailer() {
      // Fetch a list of movies
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api.apiKey}`
      );
      const data = await response.json();

      // Select a random movie
      const movie =
        data.results[Math.floor(Math.random() * data.results.length)];

      //Fetch the videos for the selected movie
      const videoResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api.apiKey}`
      );
      const videoData = await videoResponse.json();

      // Find a trailer among the videos
      const trailer = videoData.results.find(
        (video) => video.type === "Trailer"
      );

      if (trailer) {
        setHeaderVideo(trailer.key); // Set the key of the trailer as the header video
      } else {
        console.log("Trailer not found");
      }
    }

    fetchRandomMovieTrailer();
  }, []);

  //Mute video without the controls option
  //skip to next video when video finish
  return (
    <header className="mainHeader">
      <nav className="Nav">
        <Link to="/">
          <img src={logo} alt="Logo of library Theater company" />
        </Link>
        <div className="links-search">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
          </ul>
          <Search />
        </div>
      </nav>
      {/* {headerVideo && (
        <iframe 
          title={headerVideo.title}
          width='100%'
          height= '100%'
          src={`https://www.youtube.com/embed/${headerVideo}?autoplay=1&mute=1`} 
          frameborder="0"
          allow='gyroscope; loop'
        ></iframe>
      )} */}
    </header>
  );
}

export default Header;
