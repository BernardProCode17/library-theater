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

   return (
      <main>
         <h1>Favourites</h1>

         <section>
            <h2>Recent Favourites</h2>

            {recentMovies.length === 0 ? <p>You curently don't have any favourites movies </p> :
            recentMovies.map(movie => <MovieDisplay movie={movie}/>)
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