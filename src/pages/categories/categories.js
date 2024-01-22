import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Components/Helper/api";
import Movie from "../../pages/movie/movie";
import './categories.css';


function Categories({movieIDSetter}) {
   const [displayList, setDisplayList] = useState([])
   const { listname } = useParams();
   console.log(movieIDSetter())
   console.log(displayList)
   useEffect(() => {

      fetch(`${api.apiURL}${api.apiListing[listname]}`)
         .then(response => response.json())
         .then(data => {
            setDisplayList(data.results)
         });
   }, []);

   return (
      <main className="categories">

         {displayList.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
         })}
      </main>
   )
}

export default Categories