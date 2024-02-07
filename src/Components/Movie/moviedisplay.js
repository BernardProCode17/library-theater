import "./moviedisplay.css";
import api from "../service/api";
import excerpt from "../service/excerpt"
import { Link } from "react-router-dom";
import Favourites from "../service/favourites";

function MovieDisplay({ movie, removeMovie}) {

  const { title, overview, poster_path, release_date, popularity, id } = movie || {};

  return (
    //<div className="article-container">

      <article className="MovieArticle">
        <img src={`${api.apiImage}${poster_path}`} alt={title} />

        <div className="MovieDetails">
          <h3>{excerpt(title, 10)}</h3> {/* the excerpt is to cut the titles short of they are to long and break the layout */}

          <div className="numberInfo visible">
            <p>Release Date:<br></br>{release_date}</p>
            <p>Rating: <br></br> {((popularity * 100) / 100).toFixed(1)}%</p>
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
    //</div>
  );
}

export default MovieDisplay;
