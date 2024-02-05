import './searchDisplay.css'
import { Link } from "react-router-dom";
import api from "../../Components/service/api";
import excerpt from '../../Components/service/excerpt';
function SearchDisplay({ results }) {

   //auto scroll to the top when first loaded*****************************
   return (
      <main className='search-main'>
         <section className='search-list'>
            <h2>Search Results</h2>
            <div className='search-articles'>
               {results && results.map((result) => {
                  const { overview, title, poster_path, release_date } = result || [];
                  return (
                     <article key={result.id}>
                        <img src={`${api.apiImage}${poster_path}`} alt="" />
                        <h3>{title}</h3>
                        <p>{excerpt(overview, 100)}</p>
                        <p>{release_date}</p>

                        <Link to={`/Movie/${result.id}`}>
                           More Info
                        </Link>
                     </article>
                  )
               })}
            </div>
         </section>
      </main>
   )
}

export default SearchDisplay;