//import components
import { useEffect, useState } from "react"
import { LatestMovie } from "./latestMovie"
import { SectionMedia } from "./sectionMedia"
import { IsNotAdult } from "./IsNotAdult"
//export functions Movies
import { getLatest ,getPopularMovies,getTopRatedMovies,getNowPlayingMovies,getUpcomingMovies } from "../data/movies"

export function Movies({isAdult}){

    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [latesMovie, setLatesMovie] = useState({})


    useEffect(() => {
        ( async () =>{
            const popularMovies = await getPopularMovies()
            const topRatedMovies = await getTopRatedMovies()
            const nowPlayingMovies = await getNowPlayingMovies()
            const upcomingMovies = await getUpcomingMovies()
            setPopularMovies(popularMovies)
            setTopRatedMovies(topRatedMovies)
            setNowPlayingMovies(nowPlayingMovies)
            setUpcomingMovies(upcomingMovies)
            setLatesMovie(await getLatest())
        })()
    }, [])

    return(
        <section className="movies">
            <IsNotAdult IsAdult={isAdult} isAdultMovie={latesMovie.adult}> <LatestMovie  latest={latesMovie} /> </IsNotAdult>
            <SectionMedia IsAdult={isAdult} key='Poplar Movies' title="Popular Movies" category='movie' media={popularMovies}/>
            <SectionMedia IsAdult={isAdult} key='Top Rated' title="Top Rated Movies" category='movie' media={topRatedMovies}/>
            <SectionMedia IsAdult={isAdult} key='Now Playing' title="Now Playing Movies" category='movie' media={nowPlayingMovies}/>
            <SectionMedia IsAdult={isAdult} key='Upcoming' title="Upcoming Movies" category='movie' media={upcomingMovies}/>
        </section>
    )
}
