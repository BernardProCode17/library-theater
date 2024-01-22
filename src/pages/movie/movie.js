import { useEffect, useState } from "react";
import api from "../../Components/Helper/api.js";
import { useParams } from "react-router-dom";
import videoFilter from "../../Components/Helper/movieTrailer.js";

function Movie({ movieTrailer, setMovieTrailer, movieIDSetter }) {
  const [details, setDetails] = useState({})
  const { id } = useParams();
 
  movieIDSetter(id)

  useEffect(() => {
    api.getMovie(id)
      .then(data => {
        setDetails(data);
        setMovieTrailer(videoFilter(data.videos.results))
      })
    return () => {
      setMovieTrailer([])
    }
  }, [id])
  
  const { title, overview, poster_path, popularity, release_date, runtime, status, genres } = details || {};

  return (

    <main>
      <section>

        <h2>{title}</h2>
        <img src={`${api.apiImage}${poster_path}`} alt={title} />

        <video >
          <source src={videoFilter(movieTrailer)} />
        </video>

        <p>{overview}</p>
        <p>{popularity}</p>
        <p>{release_date}</p>
        <p>{runtime} mins</p>
        <p>{status}</p>
        {genres && genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
      </section>
    </main>

  );
}

export default Movie;