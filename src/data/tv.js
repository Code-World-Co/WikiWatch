import axios from 'axios';


export const getLatestTv  = async () => {
  const { data} = await axios.get('https://api.themoviedb.org/3/tv/latest?api_key=5cec1a15e2c219c4f08d84958efb00e7&language=en-US')

  const {id, adult, status, name, overview, poster_path, popularity, vote_average, vote_count, genres, number_of_seasons} = data

  return { id, adult, status, name, overview, poster_path, popularity, vote_average, vote_count, genres, number_of_seasons, status }
}

export const getAiringTodayTv = async () => {

  const { data } = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=5cec1a15e2c219c4f08d84958efb00e7&language=en-US')

  return data.results.map((tv) => {
    const {id, poster_path, vote_average} = tv
    return {id, poster_path, vote_average}
  })

}

export const getNowPlayingTv = async () => {

  const { data } = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=5cec1a15e2c219c4f08d84958efb00e7&language=en-US')

  return data.results.map((tv) => {
    const {id, poster_path, vote_average} = tv
    return {id, poster_path, vote_average}
  })

}

export const getPopularTv = async () => {

  const { data } = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=5cec1a15e2c219c4f08d84958efb00e7&language=en-US')

  return data.results.map((tv) => {
    const {id, poster_path, vote_average} = tv
    return {id, poster_path, vote_average}
  })
}

export const getTopRatedTv = async () => {

  const { data } = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5cec1a15e2c219c4f08d84958efb00e7&language=en-US')

  return data.results.map((tv) => {
    const {id, poster_path, vote_average, original_name} = tv
    return {id, poster_path, vote_average, original_name}
  })
}


export const getDetailsTv = async (idTv) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${idTv}?api_key=5cec1a15e2c219c4f08d84958efb00e7&language=en-US`)

  const {id, adult, status, name, overview, poster_path, popularity, vote_average, vote_count, genres, number_of_seasons} = data

  return { id, adult, status, name, overview, poster_path, popularity, vote_average, vote_count, genres, number_of_seasons, status }
}

