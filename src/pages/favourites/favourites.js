import { useContext } from "react"
import MovieDisplay from "../../Components/Movie/moviedisplay"
import './favourites.css'
import Banner from "../../Components/Image Banner/Banner";
import favourites_page_header from '../../media/favourites_page_header.jpg'
import { GlobalContext } from "../../Context/GlobalContext";

function Favourites() {
   const h1 = 'Favourites';
   const alt = 'photo of a room with an old movie recorder from the early 1900\s'
   const favourites = useContext(GlobalContext)

   return (
      <>
         <Banner image={favourites_page_header} h1={h1} alt={alt} />
         <main className="fav-main">
            <section>
               <h2>Recent Favourites</h2>

               {favourites.favorites && favourites.favorites.length === 0 ?
                  <p>You currently don't have any favourites movies</p> :
                  favourites.favorites.map(movie => <MovieDisplay key={movie.id} movie={movie} />)
               }

            </section>

            {/* To be Worked on later ***********************    */}
            {/* <section>
               <h2>All Time Favourites</h2>
               <p>Pick you all time favourites movies</p>
            </section> */}
         </main>
      </>
   )
}
export default Favourites