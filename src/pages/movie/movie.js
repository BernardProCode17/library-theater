import { useEffect, useState } from "react";
import api from "../../Components/service/api";
import { useParams } from "react-router-dom";
import './movie.css'
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Favourites from "../../Components/service/favourites";
// import DateFormate from "../../Components/service/dateFormat";

function Movie() {
  const [details, setDetails] = useState({})
  const [trailerKey, setTrailerKey] = useState();
 
  const { id } = useParams();

  useEffect(() => {
    api.getMovie(id)
      .then(data => {
        console.log(data)
        setDetails(data); // get the movie data dettails      
        const trailerFilter = data.videos.results.filter((video) => video.type === 'Trailer'); // Filter the movie date video by trailer
        setTrailerKey(trailerFilter.map((video) => video.key)); // Set the movie video key to video player
      })

  }, [id])

  const { title, overview, poster_path, popularity, release_date, runtime, status, genres } = details || {};
  return (
    <main className="movie-main">
      <section>
        <VideoPlayer trailerKey={trailerKey} />

        <h1>{title}</h1>
        <img src={`${api.apiImage}${poster_path}`} alt={title} />

        <div className="top-info">
          <p className="">{release_date}</p>
          <p className="">{runtime} mins</p>
        </div>

        <p className="overview">{overview}</p>

        <div className="info">
          <p className="">{popularity}</p>
          <p className="">{status}</p>
        </div>

        <div className="genre">
          <p className="genre-title">Genre: </p>
          {genres && genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
        </div>

        <Favourites Movie={details} />

      </section>
    </main>

  );
}

export default Movie;