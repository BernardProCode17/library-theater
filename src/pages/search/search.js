import './Search.css'
import { Link } from "react-router-dom";
import api from "../../Components/service/api";
import excerpt from '../../Components/service/excerpt';

function SearchDisplay({ results }) {

   return (
      <main className='search-main'>
         <section className='categories'>
            <h1 className=''>Search Results</h1>
            <div className='search-articles'>

               {/* search results from the search component in the header, pass to the search display from the app component  */}

               {results && results.map((result) => {
                  const { overview, title, poster_path, release_date } = result || [];
                  return (
                     <article key={result.id} className='movieArticle' >
                        <img src={`${api.apiImage}${poster_path}`} alt="" />
                        <h3>{title}</h3>
                        <p className='overview'>{excerpt(overview, 100)}</p>{/* excerpt function to shorten text */}
                        <p className='year'>{release_date}</p>

                        <Link className='link' to={`/Movie/${result.id}`}>
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