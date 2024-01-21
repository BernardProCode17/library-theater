import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../src/Components/Helper/api";
import Movie from "../../src/Components/Movie/moviedisplay";
import './categories.css';
import MovieDisplay from "../../src/Components/Movie/moviedisplay";


function Categories() {
   const [displayList, setDisplayList] = useState([])
   const { listname } = useParams();

   useEffect(() => {

      fetch(`${api.apiURL}${api.apiListing[listname]}`)
         .then(response => response.json())
         .then(data => {
            setDisplayList(data.results)
         });
   }, []);

   console.log(displayList)
   return (
      <main className="categories">

         {displayList.map((movie, index) => {
            return <MovieDisplay key={index} movie={movie} />;
         })}
      </main>
   )
}

export default Categories