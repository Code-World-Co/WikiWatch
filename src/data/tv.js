import axios from "axios";

const apiKey ='5cec1a15e2c219c4f08d84958efb00e7';

const links = {
  base: 'https://api.themoviedb.org/3/tv/',
  latest: 'https://api.themoviedb.org/3/tv/latest?language=en-US',
  popular: 'https://api.themoviedb.org/3/tv/popular?language=en-US',
  airing_today: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US',
  top_rated: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US',
  now_playing: 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US',
};

export async function getLatest() {
const response = await axios.get(links.latest, {
  params: {
    api_key: apiKey,
  },
});
const latestTv = {
  id: response.data.id,
  adult: response.data.adult,
  status: response.data.status,
  name: response.data.name,
  overview: response.data.overview,
  poster_path: response.data.poster_path,
  language: response.data.original_language,
  genres: response.data.genres,
};
return latestTv;
}

export async function getPopularTvs() {
  const response = await axios.get(links.popular, {
    params: {
      api_key: apiKey,
    },
  });
  const popularTvs = response.data.results.map((tv) => ({
    id: tv.id,
    poster_path: tv.poster_path,
    vote_average: tv.vote_average.toFixed(1) ,
  }));
  return popularTvs;
}

export async function getTopRatedTvs() {

  const response = await axios.get(links.top_rated, {
    params: {
      api_key: apiKey,
    },
  });
 
  const topRatedTvs  = response.data.results.map((tv) => ({
    id: tv.id,
    poster_path: tv.poster_path,
    vote_average: tv.vote_average.toFixed(1)
  }));
  return topRatedTvs;
}

export async function getAiringTodayTv() {
  const response = await axios.get(links.airing_today, {
    params: {
      api_key: apiKey,
    },
  });
  const tvAiringToday = response.data.results.map((tv) => ({
    id: tv.id,
    poster_path: tv.poster_path,
    vote_average: tv.vote_average.toFixed(1),
  }));
  return tvAiringToday;
}

export async function getNowPlayingTv() {

  const response = await axios.get(links.now_playing, {
    params: {
      api_key: apiKey,
    },
  });
  const nowPlayingTv = response.data.results.map((tv) => ({
    id: tv.id,
    poster_path: tv.poster_path,
    vote_average: tv.vote_average.toFixed(1),
  }));
  return nowPlayingTv;
}

export async function getInfoTv(id) {
  const response = await axios.get(`${links.base}${id}?api_key=${apiKey}&language=en-US`);
  const  infoTv = {
    id: response.data.id,
    adult: response.data.adult,
    status: response.data.status,
    name: response.data.name,
    overview: response.data.overview,
    poster_path: response.data.poster_path,
    popularity: response.data.popularity.toFixed(1),
    vote_average: response.data.vote_average.toFixed(1),
    vote_count: response.data.vote_average.toFixed(1),
    genres: response.data.genres,
    language: response.data.original_language,
  };
  return infoTv;
}

export async function getReviewsTv (id) {
  const response = await axios.get(`${links.base}${id}/reviews?api_key=${apiKey}&language=en-US&page=1`);
  const reviewsTv = response.data.results.map((review) => ({
    author : review.author,
    avatar_path : review.author_details.avatar_path,
    content : review.content,
    created_at : review.created_at,
    rating : review.author_details.rating,

  }));

  return reviewsTv;
}

export async function getSimilarTv(id) {
  const response = await axios.get(`${links.base}${id}/similar?api_key=${apiKey}&language=en-US&page=1`);
  const similarTv = response.data.results.map((movie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average.toFixed(1),
  }));
  return similarTv;
}

