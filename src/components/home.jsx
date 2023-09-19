//import style
import "../style/Home.css";
//import icons
import { useEffect, useState } from "react";
import video from "../assets/video/trailer.mp4";
import { MovieElement, TvElement } from "./ElementHome";
import { getTopRatedTv } from "../data/tv";
import { getTopRatedMovies } from "../data/movies";
import { useWindowSize, useMediaQuery } from "@uidotdev/usehooks";
import {AnimatePresence, motion} from 'framer-motion';
import { MdMovieFilter } from "react-icons/md";


export function Home() {
  const [selectedMediaType, setSelectedMediaType] = useState('movie');
  const [topRatedMedia, setTopRatedMedia] = useState([]);
  const [x, setX] = useState(0)
  const [positionClick, setPositionClick] = useState(true)
  let windowSize =  useMediaQuery('screen and (width <= 1150px)')

  useEffect(() => {
    (async () => {
      setX(0)
      const dataMovieOrTv = selectedMediaType === 'movie' ? await getTopRatedMovies() : await getTopRatedTv()
      setTopRatedMedia(dataMovieOrTv.slice(3, 8))
    })()
  },
    [selectedMediaType, windowSize ]);

  

  return (
    <main className="home">
      <div className="trailer">
        <div className="background"></div>
        <video className="video" loop={true} autoPlay={true} onError={() => console.error("error playing video")} src={video}></video>
      </div>

      <section className="homePage">
        <h1 className="title"><span className="firstWord-title title">WIKI</span> WATCH</h1>
        <h2>You will find the best information of movies and series</h2>
        <div className="nav"></div>
      </section>

      <section className="boxCard">
        <div className="boxText">
          <h2 className={`title-boxText ${selectedMediaType === 'movie' ? 'active' : 'effect'}`} onClick={() => setSelectedMediaType('movie')}>MOVIE</h2>
          <h2 className={`title-boxText ${selectedMediaType !== 'movie' ? 'active' : 'effect'}`} onClick={() => setSelectedMediaType('tv')}>TV SERIES</h2>
        </div>
        <motion.div className="boxMedia" style={windowSize ? {gridTemplateColumns:'1fr', gap : '0'} : {}}>
          {
            selectedMediaType === 'movie' ?
              topRatedMedia.map((movie, index) => <MovieElement key={movie.id} {...movie} reSize={windowSize} x={x} index={index} positionClick={positionClick} hover={(p) => setX(p)} />)
              :
              topRatedMedia.map((tv, index) => <TvElement key={tv.id} {...tv} reSize={windowSize} x={x} index={index} positionClick={positionClick} hover={(p) => setX(p)} />)
          }
        </motion.div>
    
      </section>

     <section className="information">

      <div className="text">
      You can find all informations about your favorite movies and series in this web site
      <ul>
        <li>Search for your favorite movies and series</li>
        <li>Find the best movies and series</li>
        <li>Reviews about yout favorite moves ans tv series</li>
      </ul>
      </div>

      <div className="image">
          <div className="fond">
             <MdMovieFilter className="icon"  />
             
          </div>
      </div>
    
     </section>
     
        <section className="prefooter">
          This Proyect is free and open source, you can find the code in my github
        </section>

    </main>
  );
}
