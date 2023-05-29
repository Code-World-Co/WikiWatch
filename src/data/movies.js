import axios from "axios";

const apiKey ='5cec1a15e2c219c4f08d84958efb00e7';

const links = {
  base: 'https://api.themoviedb.org/3/movie/',
  latest: 'https://api.themoviedb.org/3/movie/latest?language=en-US',
  popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US',
  top_rated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US',
  upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US',
  now_playing: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US',
};

export async function getLatest() {
const response = await axios.get(links.latest, {
  params: {
    api_key: apiKey,
  },
});
const moviesLatest = {
  id: response.data.id,
  adult: response.data.adult,
  status: response.data.status,
  title: response.data.title,
  overview: response.data.overview,
  poster_path: response.data.poster_path,
  language: response.data.original_language,
  genres: response.data.genres,
};
return moviesLatest;
}

export async function getPopularMovies() {
  const response = await axios.get(links.popular, {
    params: {
      api_key: apiKey,
    },
  });
  const moviesPopular = response.data.results.map((movie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));
  return moviesPopular;
}

export async function getTopRatedMovies() {
  const response = await axios.get(links.top_rated, {
    params: {
      api_key: apiKey,
    },
  });
  const moviesTopRated = response.data.results.map((movie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    original_title: movie.original_title,
    title: movie.title,
  }));
  return moviesTopRated;
}

export async function getUpcomingMovies() {
  const response = await axios.get(links.upcoming, {
    params: {
      api_key: apiKey,
    },
  });
  const moviesUpcoming = response.data.results.map((movie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));
  return moviesUpcoming;
}

export async function getNowPlayingMovies() {
  const response = await axios.get(links.now_playing, {
    params: {
      api_key: apiKey,
    },
  });
  const moviesNowPlaying = response.data.results.map((movie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));
  return moviesNowPlaying;
}

export async function getInfoMovie(id) {
  const response = await axios.get(`${links.base}${id}?api_key=${apiKey}&language=en-US`);
  const movieInfo = {
    id: response.data.id,
    adult: response.data.adult,
    status: response.data.status,
    title: response.data.title,
    overview: response.data.overview,
    poster_path: response.data.poster_path,
    popularity: response.data.popularity,
    vote_average: response.data.vote_average,
    vote_count: response.data.vote_average,
    genres: response.data.genres,
  };
  return movieInfo;
}

export async function getReviewsMovie (id) {
  const response = await axios.get(`${links.base}${id}/reviews?api_key=${apiKey}&language=en-US&page=1`);
  const movieReviews = response.data.results.map((review) => ({
    author : review.author,
    avatar_path : review.author_details.avatar_path,
    content : review.content,
    created_at : review.created_at,
    rating : review.author_details.rating,
  }));
  console.log(movieReviews);
  return movieReviews;
}

export async function getSimilarMovies(id) {
  const response = await axios.get(`${links.base}${id}/similar?api_key=${apiKey}&language=en-US&page=1`);
  const similarMovies = response.data.results.map((movie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));
  return similarMovies;
}

export async function getVideos(id) {
  const response = await axios.get(`${links.base}${id}/videos?api_key=${apiKey}&language=en-US`);
  const videos = response.data.results.map((video) => ({
    id: video.id,
    key: video.key,
    name: video.name,
    site: video.site,
    type: video.type,
  }));
  return videos;
}