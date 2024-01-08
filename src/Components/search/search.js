import { useEffect, useState } from "react";
import api from '../Helper/api';
import "./search.css";

function Search() {


   const [searchTerm, setSearchTerm] = useState("");
   const [searchTermResults, setSearchTermResults] = useState('');
   console.log(api.apiSearch('books'))

   const searchingTerms = (e) => {
      setSearchTerm(e.target.value);
      console.log(searchTerm.value)
   };

   async function sendRequest(e) {
      e.preventDefault();
      
      //search api fetch works, not geting the the search terms
      const searchData = await api.apiSearch(searchTerm);
      setSearchTermResults(searchData)
   }



   return (
      <main>

         <form onSubmit={sendRequest} className="search-form">
            <label htmlFor="search-box"></label>
            <input
               type="search"
               name="search-box"
               id="search-box"
               placeholder="Search for movies"
               onChange={searchingTerms}
            />
            <input type="button" value="Search" />
         </form>

         {searchTermResults && searchTermResults.map((result) => (
            <article>
               <h2>{result.title}</h2>
               <p>{result.overview}</p>
            </article>
         ))}
      </main>

   )
}

export default Search;
