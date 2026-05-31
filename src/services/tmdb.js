

const API_KEY =
  import.meta.env.VITE_TMDB_API_KEY;
  console.log(API_KEY);

export async function fetchMoviesByGenre(
  genreId,
  language
) {

  const response = await fetch(

    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&with_original_language=${language}&include_adult=false`

  );

  const data = await response.json();

  return data.results;
}
export async function fetchTrendingMovies() {

  const response = await fetch(

    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

  );

  const data = await response.json();

  return data.results;
}
export async function fetchMovieTrailer(
  movieId
) {

  const response = await fetch(

    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`

  );

  const data = await response.json();

  return data.results;
}
export async function searchMovies(
  query
) {

  const response = await fetch(

    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`

  );

  const data = await response.json();

  return data.results;
}
export async function fetchMovieProviders(
  movieId
) {

  const response = await fetch(

    `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`

  );

  const data = await response.json();

  return data.results;
}