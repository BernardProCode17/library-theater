import { useState } from "react";
import api from '../Helper/api';
import "./search.css";
import { useNavigate } from "react-router-dom";

function Search({ receiveResults }) {

   const navigate = useNavigate
   const [searchTerm, setSearchTerm] = useState("");
   const [searchTermResults, setSearchTermResults] = useState([]);
   // console.log(api.apiSearch(searchTerm.results))

   console.log(searchTermResults)

   const searchingTerms = (e) => {
      setSearchTerm(e.target.value);
   };


   async function sendRequest(e) {
      e.preventDefault();

      const searchData = await api.apiSearch(searchTerm)
      console.log(searchData.results)
      setSearchTermResults(searchData)
      receiveResults(searchTermResults.results)
   }
   navigate('/search');

   return (

      <form onSubmit={sendRequest} className="search-form">
         <label htmlFor="search-box"></label>
         <input type="search" name="search-box" id="search-box" placeholder="Search for movies" onChange={searchingTerms} />
         <input type="submit" value="Search" />
      </form>


   )
}

export default Search;
