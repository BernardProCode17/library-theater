import { useContext } from "react";
import api from "../Helper/api";
import { MovieContext } from "../Helper/context";
import { useParams } from "react-router-dom";

function MovieDetails() {
  
// refetch the movies to get details information about the movie. 

const {id} = useParams();





  return (
    <section>
      {/* <h1>{}</h1> */}
      {/* <img src={} alt={}/> */}
    </section>


  );
}

export default MovieDetails;
