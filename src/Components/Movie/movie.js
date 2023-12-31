import "./movie.css";
import api from "../Helper/api";
import "./movie.css";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { title, overview, poster_path, release_date, popularity, genre } =
    movie || {};

  return (
    <article className="MovieArticle">
      <img src={`${api.apiImage}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>Description: {overview}</p>

      <div className="numberInfo">
      <p>Release Date: {release_date}</p>
      <p>Rating: {((popularity * 100) / 100).toFixed(1)}%</p>
      <p>genre</p>
      </div>

      <Link to={`/moviedetails/${movie.id}`}>
        More Info
      </Link>
    </article>
  );
}

export default Movie;
