import './Search.css'
import { Link } from "react-router-dom";
import api from "../../Components/service/api";
import excerpt from '../../Components/service/excerpt';
function SearchDisplay({ results }) {

   //auto scroll to the top when first loaded*****************************
   return (
      <main className='search-main'>
         <section className='Categories'>
            <h1 className=''>Search Results</h1>
            <div className='search-articles'>
               {results && results.map((result) => {
                  const { overview, title, poster_path, release_date } = result || [];
                  return (
                     <article key={result.id} className='movieArticle' >
                        <img src={`${api.apiImage}${poster_path}`} alt="" />
                        <h3>{excerpt(title, 10)}</h3>
                        <p className='overview'>{excerpt(overview, 100)}</p>
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