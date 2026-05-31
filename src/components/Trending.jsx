import { useEffect, useState }
from "react";

import {
  fetchTrendingMovies
}
from "../services/tmdb";

function Trending() {

  const [movies, setMovies] =
    useState([]);
    const [showAll, setShowAll] =
  useState(false);

  useEffect(() => {

    async function loadTrending() {

      const results =
        await fetchTrendingMovies();

      setMovies(results);
    }

    loadTrending();

  }, []);

  return (

    <section className="trending">

      <div className="section-header">

        <h2>Trending Now</h2>

        <button
  className="view-more"

  onClick={() =>
    setShowAll(!showAll)
  }
>

  {
    showAll
    ? "Show Less ←"
    : "View More →"
  }

</button>

      </div>

      <div className="movie-row">

        {(showAll
  ? movies
  : movies.slice(0,6)
).map(movie => {

          return (

            <div
              className="movie-card"
              key={movie.id}
            >

              <img
                src={
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }

                alt={movie.title}
              />

              <h3>{movie.title}</h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Trending;