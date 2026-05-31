import { useEffect, useState } from "react";


import TrailerModal from "./TrailerModal";

import {
  fetchMoviesByGenre,
  searchMovies,
  fetchMovieTrailer,
  fetchMovieProviders
}
from "../services/tmdb";

const genreMap = {
  Action: 28,
  Comedy: 35,
  Drama: 18,
  "Feel-Good": 10751,
  Thriller: 53,
  "Sci-Fi": 878,
  Horror: 27,
  Sports: 99
};

function Recommendations({
  genre,
  searchTerm,
    language
}) {

  const [movies, setMovies] =useState([]);
  const [trailerKey, setTrailerKey] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [providers, setProviders] = useState({});

  useEffect(() => {

  async function loadMovies() {

    let results = [];

    if (searchTerm.trim()) {

      results =
        await searchMovies(
          searchTerm
        );

    }

    else if (genre) {

      const genreId =
        genreMap[genre];

      results =
        await fetchMoviesByGenre(
          genreId,
          language
        );
    }

    setMovies(results);
    const providerData = {};

for (const movie of results) {

  const providerResults =
    await fetchMovieProviders(
      movie.id
    );

  const indiaProviders =
    providerResults.IN;

  if (
    indiaProviders &&
    indiaProviders.flatrate
  ) {

    providerData[movie.id] =
      indiaProviders.flatrate;
  }
}

setProviders(providerData);
  }

  loadMovies();

}, [genre, language, searchTerm]);

if (!genre && !searchTerm)
  return null;

  
async function openTrailer(movieId) {

  const videos =
    await fetchMovieTrailer(movieId);

  const trailer =
    videos.find(video =>
      video.type === "Trailer"
    );

  if (trailer) {

    setTrailerKey(trailer.key);

    setShowModal(true);
  }
}

  return (
    <section className="recommendations">

      <h2>
        Recommended {genre} Movies
      </h2>

      <div className="recommendation-grid">

        {movies.map(movie => {

          return (
            <div
  className="recommend-card"
  key={movie.id}
>

  <div className="card-inner">

    {/* FRONT */}

    <div className="card-front">

      <img
        src={
          movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Image"
        }

        alt={movie.title}
      />

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <p className="rating">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
      </div>

    </div>

    {/* BACK */}

    <div className="card-back">

      <h3>{movie.title}</h3>

      <p>
        {
          movie.overview
          ? movie.overview.slice(0,150)
          : "No description available."
        }
      </p>

      <span>
        Release:
        {movie.release_date}
      </span>
      <div className="ott-tags">

  {
    providers[movie.id]
    ? (
        providers[movie.id]
        .slice(0,3)
        .map(provider => (

          <span
            key={provider.provider_id}
          >
            {provider.provider_name}
          </span>
        ))
      )
    : (
        <span>
          Streaming info unavailable
        </span>
      )
  }

</div>
      <button
  className="watch-btn"

  onClick={() => {

    window.open(

      `https://www.google.com/search?q=${movie.title}+watch+online`,

      "_blank"
    );
  }}
>

  Watch Now

</button>
<button
  className="trailer-btn"

  onClick={() =>
    openTrailer(movie.id)
  }
>

  Watch Trailer

</button>

    </div>

  </div>

</div>
          );
        })}

      </div>
{
  showModal && (

    <TrailerModal

      trailerKey={trailerKey}

      closeModal={() =>
        setShowModal(false)
      }
    />
  )
}
    </section>
  );
}

export default Recommendations;