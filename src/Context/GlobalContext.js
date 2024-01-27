import { createContext, useEffect, useState } from "react";
import api from '../Components/service/api';


export const GlobalContext = createContext();


export function VideoPlayerHeader() {
   const [headerVideo, setHeaderVideo] = useState();
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

   return headerVideo;
}

