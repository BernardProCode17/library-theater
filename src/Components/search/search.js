import { useEffect, useState } from "react";
import api from '../Helper/api';
import "./search.css";

function Search() {


   const [searchTerm, setSearchTerm] = useState("");
   const [searchTermResults, setSearchTermResults] = useState([]);

   const searchingTerms = (e) => {
      setSearchTerm(e.target.value);
   };

   console.log(searchTerm);
   async function sendRequest(e) {
      e.preventDefault();
      const searchData = await api.apiSearch(searchTerm);
      console.log(searchData);
      setSearchTermResults(searchData)

   }
   // useEffect(() => {
   //    console.log(searchTermResults);
   // }, [searchTermResults]);


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

         {searchTermResults && searchTermResults.map((results) => (
            <article>
               <h2>{results.title}</h2>
               <p>{results.overview}</p>
            </article>
         ))}
      </main>

   )
}

export default Search;
