import { useState } from "react";
import api from '../Helper/api';
import "./search.css";

function Search({ ReceiveResults }) {


   const [searchTerm, setSearchTerm] = useState("");
   const [searchTermResults, setSearchTermResults] = useState('');
   // console.log(api.apiSearch(searchTerm))

   console.log(searchTermResults)
   const searchingTerms = (e) => {
      setSearchTerm(e.target.value);
   };


   async function sendRequest(e) {
      e.preventDefault();
      // console.log('request')
      const searchData = await api.apiSearch(searchTerm)
      console.log(searchData.results)
      setSearchTermResults(searchData.results)
   }
   ReceiveResults(searchTermResults)

   return (

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


   )
}

export default Search;
