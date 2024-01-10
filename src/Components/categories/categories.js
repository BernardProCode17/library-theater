import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../Helper/api";
import Movie from "../Movie/movie";


function Categories() {
   const [displayList, setDisplayList] = useState([])
   const { listname } = useParams();

   useEffect(() => {

      fetch(`${api.apiURL}${api.apiListing[listname]}`)
         .then(response => response.json())
         .then(data => {setDisplayList(data.results)
         });
   }, []);

   console.log(displayList)
   return (
      <main>
         {displayList.map((movielist, index) => {
            return <Movie key={index} movies={movielist} />;
         })}
      </main>
   )
}

export default Categories