import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../Helper/api";
import Movie from "../Movie/movie";
import './categories.css';


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
      <main className="categories">
         
         {displayList.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
         })}
      </main>
   )
}

export default Categories