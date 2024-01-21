import "./Header.css";
import logo from "../../logo images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Helper/api";
import Search from "../search/search";


function Header({ receiveResults, movieTrailer, movieID }) {
  const [headerVideo, setHeaderVideo] = useState(null);
  const [videoID, setVideoID] = useState(headerVideo)
  const [videoMute, setVideoMute] = useState(true)
  const location = useLocation();
  // const videoID = idCheck() ? trailerKey() : headerVideo;

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
      // console.log(videoData)
      // Find a trailer among the videos
      const trailer = videoData.results.find((video) => video.type === "Trailer");

      if (trailer) {
        setHeaderVideo(trailer.key);
      } else {
        console.log("Trailer not found");
      }
    }

    fetchRandomMovieTrailer();
  }, []);

  const toggleMute = (e) => {
    e.preventDefault();
    setVideoMute(!videoMute)
  }

  //Mute video without the controls option
  //skip to next video when video finish

  // Tries attemp one
  const trailerKey = () => {
    const findTrailer = movieTrailer.find((element) => element.key)
    return findTrailer ? findTrailer.key : undefined;
  }

  function idCheck() {
    let locationSplit = location.pathname.split('/').pop();
    let compare = null;

    if (locationSplit === movieID) {
      return compare = true;
    } else {
      return compare = false;
    }
  }
  //tries attempt two 
  useEffect(() => {

    if (location.pathname === '/') {
      setVideoID(headerVideo);
    } else if (movieTrailer && movieTrailer.length > 0) {
      const trailer = movieTrailer.find((video) => video.type === 'trailer');
      if (trailer) {
        setVideoID(trailer.key)
      }
    }
  }, [location.pathname, headerVideo, movieTrailer]);
  //Tries Attemp three
  useEffect(() => {

    if (location.pathname === '/') {
      setVideoID(headerVideo);
    } else {
      fetchMovieTrailer();
    }
  }, [location.pathname, headerVideo])


  const fetchMovieTrailer = async () => {
    const locationID = location.pathname.split('/')[2];
    // console.log(locationID)
    const videoFetch = await fetch(`https://api.themoviedb.org/3/movie/${locationID}/videos?api_key=${api.apiKey}`)
    const videoResponse = await videoFetch.json();
    const trailer = videoResponse.results.find((video) => video.type === 'trailer');

    if (trailer) {
      setVideoID(trailer.key);
    } else {
      // fix this the handle error when video not found.
      console.log('Trailer Not Found')
    }
  }

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
          <Search receiveResults={receiveResults} />
          <button type="button" onClick={toggleMute}>{videoMute ? 'Unmute' : 'Mute'}</button>
        </div>
      </nav>
      {headerVideo && (
        <iframe
          title={headerVideo.title}
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=${videoMute ? 1 : 0}&controls=0&loop=1}`}
          frameborder="0"
        ></iframe>
      )}

    </header>
  );
}

export default Header;
