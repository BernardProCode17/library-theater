import { useEffect, useState } from "react";
import api from "../Helper/api";
import { useParams } from "react-router-dom";
import videoFilter from "../Helper/movieTrailer.js";

function MovieDetails({ movieTrailer, setMovieTrailer }) {
  const [details, setDetails] = useState({})
  // const [movieTrailer, setMovieTrailer] = useState([])
  console.log(movieTrailer)
  const { id } = useParams();

  useEffect(() => {
    api.getMovie(id)
      .then(data => {
        setDetails(data);
        setMovieTrailer(data.videos.results)
      })
    return () => {
      setMovieTrailer([])
    }
  }, [id])
  const { title, overview, poster_path, popularity, release_date, runtime, status, genres } = details || {};

  /*
  useEffect( () => {
    api.apiMovieVideo(id)
    .then(data =>{
      
    })
  } ,[])
  */


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

export default MovieDetails;
