import "./Header.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Components/service/api";
import DeskTopNav from "../Desktop Nav/Desktop_Nav";
import MobileNav from "../Mobile Nav/Mobile_Nav";


function Header({ receiveResults, movieTrailer, movieID }) {
  const [headerVideo, setHeaderVideo] = useState(null);
  // const [videoID, setVideoID] = useState(headerVideo)
  const [videoMute, setVideoMute] = useState(true)
  const location = useLocation();

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
  // const trailerKey = () => {
  //   const findTrailer = movieTrailer.find((element) => element.key)
  //   return findTrailer ? findTrailer.key : undefined;
  // }

  // function idCheck() {
  //   let locationSplit = location.pathname.split('/').pop();
  //   let compare = null;

  //   if (locationSplit === movieID) {
  //     return compare = true;
  //   } else {
  //     return compare = false;
  //   }
  // }
  //tries attempt two 
  // useEffect(() => {

  //   if (location.pathname === '/') {
  //     setVideoID(headerVideo);
  //   } else if (movieTrailer && movieTrailer.length > 0) {
  //     const trailer = movieTrailer.find((video) => video.type === 'trailer');
  //     if (trailer) {
  //       setVideoID(trailer.key)
  //     }
  //   }
  // }, [location.pathname, headerVideo, movieTrailer]);
  //Tries Attemp three
  // useEffect(() => {

  //   if (location.pathname === '/') {
  //     setVideoID(headerVideo);
  //   } else {
  //     fetchMovieTrailer();
  //   }
  // }, [location.pathname, headerVideo])


  // const fetchMovieTrailer = async () => {
  //   const locationID = location.pathname.split('/')[2];

  //   const videoFetch = await fetch(`https://api.themoviedb.org/3/movie/${locationID}/videos?api_key=${api.apiKey}`)
  //   const videoResponse = await videoFetch.json();
  //   const trailer = videoResponse.results.find((video) => video.type === 'trailer');

  //   if (trailer) {
  //     setVideoID(trailer.key);
  //   } else {
  //     // fix this the handle error when video not found.
  //     console.log('Trailer Not Found')
  //   }
  // }
  const SVG = {

    mute: () => (

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg">
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
      </svg>
    ),

    unmute: () => (

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg fill">
        <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
      </svg>
    )

  }
  return (
    <header className="mainHeader">
      <MobileNav receiveResults={receiveResults} />
      {/* <DeskTopNav receiveResults={receiveResults} /> */}

      {/* {headerVideo && (
        <>

          <button type="button" className='muteButton' onClick={toggleMute}>{videoMute ? SVG.mute() : SVG.unmute()}</button>
          <div className="videoPlayer">
            <iframe
              title={headerVideo.title}
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${headerVideo}?autoplay=1&mute=${videoMute ? 1 : 0}&controls=0&loop=1&modestbranding}`}
              frameborder="0"
              allowFullScreen
              className="videoPlayer2"
            ></iframe>
          </div>
        </>
      )} */}

    </header>
  );
}

export default Header;
