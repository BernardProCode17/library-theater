import { useEffect, useState } from "react";
import api from "../../Components/service/api";
import { useParams } from "react-router-dom";
import './movie.css'
function Movie({ movieTrailer, setMovieTrailer, movieIDSetter }) {
  const [details, setDetails] = useState({})
  const { id } = useParams();
 
  // movieIDSetter(id)

  useEffect(() => {
    api.getMovie(id)
      .then(data => {
        setDetails(data);
        //setMovieTrailer(videoFilter(data.videos.results))
      })
    return () => {
      //setMovieTrailer([])
    }
  }, [id])
  
  const { title, overview, poster_path, popularity, release_date, runtime, status, genres } = details || {};

  return (

    <main className="movie-main">
      <section>

        <h1>{title}</h1>
        <img src={`${api.apiImage}${poster_path}`} alt={title} />

        {/* <video >
          <source src={videoFilter(movieTrailer)} />
        </video> */}

        <div className="top-info">
        <p className="">{release_date}</p>
        <p className="">{runtime} mins</p>
        </div>

        <p className="overview">{overview}</p>

        <div className="info">
        <p className="">{popularity}</p>
        <p className="">{status}</p>
        </div>
          <p className="genre-title">Genre</p>
        {genres && genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
      </section>
    </main>

  );
}

export default Movie;