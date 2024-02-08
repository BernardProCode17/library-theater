import { useEffect, useState } from "react";
import api from "../../Components/service/api";
import { useParams } from "react-router-dom";
import './movie.css'
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Favourites from "../../Components/service/favourites";

function Movie() {
  const [details, setDetails] = useState({})
  const [trailerKey, setTrailerKey] = useState();
  const { id } = useParams();
  const { title, overview, poster_path, popularity, release_date, runtime, status, genres, backdrop_path } = details || {};
  const backdrop = `https://image.tmdb.org/t/p/w500${backdrop_path}`
  console.log(backdrop)

  useEffect(() => {
    api.getMovie(id)
      .then(data => {
        setDetails(data)
        const trailerFilter = data.videos.results.filter((video) => video.type === 'Trailer'); // Filter the movie date video by trailer
        setTrailerKey(trailerFilter.map((video) => video.key)); // Set the movie video key to video player
      })

  }, [id])

  return (
    <>
      <VideoPlayer trailerKey={trailerKey} />
      <main className="movie-main" style={{ backgroundImage: `url(${backdrop})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <section className="movie-container">

          <h1>{title}</h1>
          <img src={`${api.apiImage}${poster_path}`} alt={title} />

          <p className="overview">{overview}</p>

          <div className="info-container">

            <div className="top-info">
              <p className="">{release_date}</p>
              <p className="">{runtime} mins</p>
            </div>

            <div className="info">
              <p className="">{popularity}</p>
              <p className="">{status}</p>
            </div>

            <div className="genre">
              <p className="genre-title">Genre: </p>
              {genres && genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
            </div>

            <Favourites movie={details} />

          </div>


        </section>
      </main>
    </>

  );
}

export default Movie;