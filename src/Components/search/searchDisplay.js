import './searchDisplay.css'
import { Link } from "react-router-dom";
import api from "../Helper/api";

function SearchDisplay({ results }) {
   console.log(results)

   return (
      <section className="search-section">
         <h1 className="h1">Search Result</h1>
         {results && results.map((result) => {
            const { overview, title, poster_path, release_date } = result || [];
            return(
            <article key={result.id}>
               <img src={`${api.apiImage}${poster_path}`} alt="" />
               <h3>{title}</h3>
               <p>{overview}</p>
               <p>{release_date}</p>

               <Link to={`/moviedetails/${result.id}`}>
                  More Info
               </Link>
            </article>
            )
         })}
      </section>
   )
}

export default SearchDisplay;