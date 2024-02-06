import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Components/service/api";
import './categories.css';
import MovieDisplay from "../../Components/Movie/moviedisplay";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import listName from "../../Components/service/listName";
// import Pages from '../../Components/pagesresults/Pages';

function Categories() {
   const { listname } = useParams();
   const listnameTLC = listname.toLowerCase();
   const [displayList, setDisplayList] = useState([])
   const [headerVideo, setHeaderVideo] = useState('');


   useEffect(() => {
      fetch(`${api.apiURL}${api.apiListing[listname]}`)
         .then(response => response.json())
         .then(data => {
            setDisplayList(data.results);
            // console.log(data)
            // setTotalPages(data.total_pages)
         });
   }, [listname]);

   useEffect(() => {
      async function fetchRandomMovieTrailer() {
         // Fetch a list of movies
         const response = await fetch(`https://api.themoviedb.org/3/movie/${listnameTLC}?api_key=${api.apiKey}`);
         const data = await response.json();

         // Select a random movie
         const movie = data.results[Math.floor(Math.random() * data.results.length)];

         //Fetch the videos for the selected movie
         const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api.apiKey}`);
         const videoData = await videoResponse.json();

         // Find a video with the type trailer from the movie
         const trailer = videoData.results.find((video) => video.type === "Trailer");

         // set the movie trailer key 
         if (trailer) {
            setHeaderVideo(trailer.key);
         } else {
            console.log("Trailer not found");
         }
      }

      fetchRandomMovieTrailer();
   }, [listname, listnameTLC]);
   
   return (
      <>
         {/* Video Trailer for the movie categories */}
         < VideoPlayer trailer={headerVideo} />

         {/* map over the movie cotegory pass the information to the movieDisplay component and render the list of movies */}
         <main className="categories">
            <h1>{listName(listname)}</h1>
            <button type="button" className="backButton">Back</button>
            <div className="main-articles">
            {displayList.map((movie, index) => {
               return <MovieDisplay key={index} movie={movie} />;
            })}
            </div>
         </main>
      </>
   )
}

export default Categories