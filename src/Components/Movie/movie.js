import { useEffect, useState } from "react";
import api from "../Helper/api";
import "./movie.css";
import { useParams } from "react-router-dom";

function Movie({ movie, key }) {
  const {
    title,
    overview,
    poster_path,
    release_date,
    popularity,
    genre,
    credit,
  } = movie || {};
  const { id } = useParams();
  const [MovieDetail, setMovieDetails] = useState(null);

  useEffect(() =>{
    if (id){
      api.getMovie(id)
    }
  }, [id])

  return (
    <div>
      <article>
        <img src={`${api.apiImage}${poster_path}`} alt={title} />
        <h3>{title}</h3>
        <p>Description: {overview}</p>
        <p>Release Date: {release_date}</p>
        <p>Rating: {(popularity * 100 / 100 ).toFixed(1)}%</p>
        <p>{genre}</p>
        
        {/* <Link to={`/movie/${id}`}>
        More info
        </Link> */}
        
      </article>

      <section className="cast">
        {credit &&
          Array.isArray(credit.cast) &&
          credit.cast.slice(0, 10).map((person, index) => {
            return (
              <figure key={index}>
                <img
                  src={`${api.apiImage}${person.profile_path}`}
                  alt={person.name}
                />
                <p>Actor: {person.name}</p>
                <p>Character: {person.character}</p>
              </figure>
            );
          })}
      </section>
    </div>
  );
}

export default Movie;
