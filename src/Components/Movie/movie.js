import api from "../Helper/api";
import "./movie.css";
function Movie({ data }) {
  const {
    title,
    overview,
    poster_path,
    release_date,
    popularity,
    genre,
    credit,
  } = data || {};
  console.log(genre);

  return (
    <div>
      <article>
        <img src={`${api.apiImage}${poster_path}`} alt={title} />
        <h2>{title}</h2>
        <p>Description: {overview}</p>
        <p>Release Date: {release_date}</p>
        <p>Rating: {(popularity * 0.1).toFixed(1)}%.</p>
        <p>{genre}</p>
        
        
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
