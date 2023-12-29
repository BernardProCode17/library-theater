// import { useEffect, useState } from "react";
import api from "../Helper/api";
import "./movie.css";
import { useParams } from "react-router-dom";

function Movie({ movie}) {
  const {
    title,
    overview,
    poster_path,
    release_date,
    popularity,
    genre,
  } = movie || {};
  


  return (
    <div>

      <article>

        <img src={`${api.apiImage}${poster_path}`} alt={title} />
        <h3>{title}</h3>
        <p>Description: {overview}</p>
        <p>Release Date: {release_date}</p>
        <p>Rating: {(popularity * 100 / 100 ).toFixed(1)}%</p>
        <p>{genre}</p>

      </article>

    </div>
  );
}

export default Movie;
