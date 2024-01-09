import { useEffect } from "react";
import api from "../Helper/api";

function MovieDetails() {
  
// refetch the movies to get details information about the movie. 
useEffect ( ()=> {
const fetchMovie = api.getMovie(1);
console.log(fetchMovie);
},[])

  return (
    <section>
   
    </section>


  );
}

export default MovieDetails;
