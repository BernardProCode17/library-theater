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

  // this page is already requesting trailer data, so there is no new data fetching
  // required
  // the trailer data, could be removed from App.js and brought down in to 
  // this component, there is no longer a need to feed that state up and into
  // the <Header/>
  
  const { title, overview, poster_path, popularity, release_date, runtime, status, genres } = details || {};
// you may have to tinker here, but we would find the right spot for the <Player/>
// component to be rendered here, passing in the 
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