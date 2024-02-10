import "./moviedisplay.css";
import api from "../service/api";
import excerpt from "../service/excerpt"
import { Link } from "react-router-dom";
import Favourites from "../service/favourites";
import percentage from "../service/percentage";
import DateFormate from "../service/dateFormat";

function MovieDisplay({ movie }) {

  const { title, overview, poster_path, release_date, vote_average, id } = movie || {};

  // Movies display component used to display the list of movie for the home page, listing pages and the favourites pages 

  return (
    <>
      <article className="MovieArticle">
        <img src={`${api.apiImage}${poster_path}`} alt={title} />

        <div className="MovieDetails">
          <h3>{title}</h3>

          <div className="numberInfo visible">
            <p>Release Date:<br></br>{DateFormate(release_date)}</p>
            <p>Rating: <br></br> {percentage(vote_average)}</p>
          </div>
          <p className="description">{excerpt(overview, 120)}</p>
          <div className="fav-link-buttons">

            <Favourites movie={movie} />
            <Link to={`/movie/${id}`}>
              More Info
            </Link>
          </div>

        </div>

      </article>
    </>
  );
}

export default MovieDisplay;
