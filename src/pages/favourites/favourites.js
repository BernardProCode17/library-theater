import { useEffect, useState } from "react"
import MovieDisplay from "../../Components/Movie/moviedisplay"
import api from "../../Components/service/api";

function Favourites() {
   const [recentMovies, setRecentMovies] = useState([]);

   useEffect(() => {
      const localStorageIds = JSON.parse(localStorage.getItem('MovieId')) || [];
      const getMovies = async () => {
         const moviesArray = await Promise.all(localStorageIds.map(id => api.getMovie(id)));
         setRecentMovies(moviesArray);
      }
      getMovies()
   }, [])

   console.log(recentMovies)

function removeMovie(id){
   setRecentMovies(recentMovies => recentMovies.filter(movie => movie.id !== id));
}

   return (
      <main>
         <h1>Favourites</h1>

         <section>
            <h2>Recent Favourites</h2>

            {recentMovies.length === 0 ? <p>You curently don't have any favourites movies </p> :
               recentMovies.map(movie => <MovieDisplay key={movie.id} movie={movie} removeMovie={removeMovie} />)
            }
            {/* <MovieDisplay movie={recentMovies}/> */}

         </section>

         <section>
            <h2>All Time Favourites</h2>
            <p>Pick you all time favourites movies</p>
         </section>
      </main>
   )
}
export default Favourites