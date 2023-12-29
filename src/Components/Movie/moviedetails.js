import { useContext } from "react";
import api from "../Helper/api";
import { MovieContext } from "../Helper/context";

function MovieDetails() {
   const context = useContext(MovieContext);

   console.log(context);
   if (!context) {
      return <p>Loading Movie...</p>;
   }


  return (
    <section>
      <h1>{context.title}</h1>
      <img src={`${api.apiImage}${context.poster_path}`} alt={context.title}
      />
    </section>


  );
}

export default MovieDetails;
