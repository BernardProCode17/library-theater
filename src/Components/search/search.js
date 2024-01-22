import { useState } from "react";
import api from '../Helper/api';
import "./search.css";
import { useNavigate } from "react-router-dom";

function Search({ receiveResults }) {

   const navigate = useNavigate()
   const [searchTerm, setSearchTerm] = useState("");
   const [searchTermResults, setSearchTermResults] = useState([]);
  
   console.log(searchTermResults)

   const searchingTerms = (e) => {
      setSearchTerm(e.target.value);
   };

   async function sendRequest(e) {
      e.preventDefault();

      if (searchTerm.trim() !== '') {
         const searchData = await api.apiSearch(searchTerm)
         setSearchTermResults(searchData)
         receiveResults(searchData.results)
         navigate('/search'); //it can only navigate to the search page if the button is clicked
      }
   }

   return (

      <form onSubmit={sendRequest} className="search-form">
         <label htmlFor="search-box" className="search-box"></label>
         <input type="search" className="search-input" name="search-box" id="search-box" placeholder="Search for movies" onChange={searchingTerms} />
         <input type="submit" className="search-button" value="Search" />
      </form>


   )
}

export default Search;
