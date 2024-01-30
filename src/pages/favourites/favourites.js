import { useEffect, useState } from "react"
import MovieDisplay from "../../Components/Movie/moviedisplay"
import api from "../../Components/service/api";
import './favourites.css'
import Banner from "../../Components/Image Banner/Banner";

import favourites_page_header from '../../media/favourites_page_header.jpg'

function Favourites() {
   const [recentMovies, setRecentMovies] = useState([]);
   const h1 = 'Favourites';
   const alt = 'photo of a room with an old movie recorder from the early 1900\s'


   useEffect(() => {
      const localStorageIds = JSON.parse(localStorage.getItem('MovieId')) || [];
      const getMovies = async () => {
         const moviesArray = await Promise.all(localStorageIds.map(id => api.getMovie(id)));
         setRecentMovies(moviesArray);
      }
      getMovies()
   }, [])

   function removeMovie(id) {
      setRecentMovies(recentMovies => recentMovies.filter(movie => movie.id !== id));
   }

   return (
      <>
      <Banner image={favourites_page_header} h1={h1} alt={alt}/>
         <main className="fav-main">
            <h1>Favourites</h1>

            <section>
               <h2>Recent Favourites</h2>
               {recentMovies.length === 0 ? <p>You curently don't have any favourites movies </p> :
                  recentMovies.map(movie => <MovieDisplay key={movie.id} movie={movie} removeMovie={removeMovie} />)
               }
            </section>

            <section>
               <h2>All Time Favourites</h2>
               <p>Pick you all time favourites movies</p>
            </section>
         </main>
      </>
   )
}
export default Favourites