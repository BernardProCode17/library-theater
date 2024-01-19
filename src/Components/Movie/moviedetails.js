import { useEffect, useState } from "react";
import api from "../Helper/api";
import { useParams } from "react-router-dom";
import videoFilter from "../Helper/movieTrailer";

function MovieDetails() {
  const [details, setDetails] = useState({})
  const [movieTrailer, setMovieTrailer] = useState([])

  const { id } = useParams();
  console.log(movieTrailer)

  useEffect(() => {
    api.getMovie(id)
      .then(data => {
        // console.log(data)
        setDetails(data);
        setMovieTrailer(data.videos.results)
      })
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
