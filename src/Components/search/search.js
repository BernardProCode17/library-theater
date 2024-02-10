import './search.css'
import { useEffect, useState } from "react";
import api from '../../Components/service/api';
import { useNavigate } from "react-router-dom";

function Search({ receiveResults }) {

   const navigate = useNavigate()
   const [searchTerm, setSearchTerm] = useState("");
   const [searchTermResults, setSearchTermResults] = useState([]);

   // gets the letter pressed 
   const searchingTerms = (e) => {
      setSearchTerm(e.target.value);
   };

   // clears the search bar once items searched 
   const clearSearch = () => {
      setSearchTerm('');
   };

   // API request for the search term
   async function sendRequest(e) {
      e.preventDefault();

      // only returns movies with images
      if (searchTerm.trim() !== '') {
         const searchData = await api.apiSearch(searchTerm)
         const datawithImages = searchData.results.filter(movie => movie.poster_path)
         setSearchTermResults(datawithImages)
         navigate('/search'); //it can only navigate to the search page if the button is clicked
         clearSearch();
      }
   };

   useEffect(() => {
      // Get the search results and pass it back up to the app component for the for the search display component 
      if (searchTermResults) {
         receiveResults(searchTermResults)
      }
   }, [searchTermResults])

   return (
      // Search form the movie search
      <form onSubmit={sendRequest} className="search-form">
         <label htmlFor="search-box" className="search-box"></label>
         <input type="search" className="search-input" name="search-box" id="search-box" placeholder="Search" onChange={searchingTerms} value={searchTerm} />
         <input type="submit" className="search-button" value="Search" />
      </form>
   )
}

export default Search;
