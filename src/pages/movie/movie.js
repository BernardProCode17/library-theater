import './movie.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Components/service/api";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Favourites from "../../Components/service/favourites";
import BackButton from "../../Components/Back Button/BackButton";
import percentage from "../../Components/service/percentage";

function Movie() {
  const [details, setDetails] = useState({})
  const [trailerKey, setTrailerKey] = useState();
  const { id } = useParams();
  const { title, overview, poster_path, vote_average, release_date, runtime, status, genres, backdrop_path } = details || {};
  const backdrop = `https://image.tmdb.org/t/p/w500${backdrop_path}`
  
  useEffect(() => {
    api.getMovie(id)
    .then(data => {
        setDetails(data)
        const trailerFilter = data.videos.results.filter((video) => video.type === 'Trailer'); // Filter the movie date video by trailer
        setTrailerKey(trailerFilter.map((video) => video.key)); // Set the movie video key to video player
      })

  }, [id])


//   async function DateFormate(date) {
//     console.log(date)
 
//     if (!date) {
//        console.error('Date is undefined')
//     }
 
//     const split = date.split('-')
//     console.log(split)
 
//     const toNumber = split.map((str) => Number(str))
//     console.log(toNumber);
 
//     const newDate = new Date(toNumber)
//     console.log(newDate)
 
//     const formatte = newDate.toLocaleDateString('en-US',
//        { month: 'long', day: 'numeric', year: 'numeric' });
//     console.log(formatte)
 
//     return formatte;
//  }


  return (
    <>
      <VideoPlayer trailerKey={trailerKey} />
      <main className="movie-main" style={{ backgroundImage: `url(${backdrop})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', width: '100%' }}>
        <section className="movie-container">

          <BackButton />

          <h1>{title}</h1>
          <img src={`${api.apiImage}${poster_path}`} alt={title} />

          <p className="overview">{overview}</p>

          <div className="info-container">

            <div className="top-info">
              {/* <p className="">{DateFormate(release_date)}</p> */}
              <p className="">{release_date}</p>
              <p className="">{runtime} mins</p>
            </div>

            <div className="info">
              <p className="">{percentage(vote_average)}</p>
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