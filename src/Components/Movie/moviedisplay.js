import "./moviedisplay.css";
import api from "../Helper/api";
import { Link } from "react-router-dom";
import Favourites from "../Helper/favourites";

function MovieDisplay({ movie }) {

  const { title, overview, poster_path, release_date, popularity, id } = movie || {};

  return (
    <article className="MovieArticle">
      <img src={`${api.apiImage}${poster_path}`} alt={title} />

      <div className="MovieDetails">
        <h3>{title}</h3>

        <p className="description">Description: {overview}</p>
        
        <div className="numberInfo visible">
          <p>Release Date:<br></br>{release_date}</p>
          <p>Rating: <br></br> {((popularity * 100) / 100).toFixed(1)}%</p>
          <p>genre</p>
        </div>
        <Favourites id={movie.id} />
        <Link to={`/movie/${id}`}>
          More Info
        </Link>

      </div>

    </article>
  );
}

export default MovieDisplay;
