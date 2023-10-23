//import style
import "../style/Home.css";
//import icons
import { useEffect, useState } from "react";
import video from "../assets/video/trailer.mp4";
import { MovieElement, TvElement } from "./ElementHome";
import { getTopRatedTvs } from "../data/tv";
import { getTopRatedMovies } from "../data/movies";
import { useWindowSize, useMediaQuery } from "@uidotdev/usehooks";
import {AnimatePresence, motion} from 'framer-motion';
import { MdLocalMovies, MdMovieFilter } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { SlControlEnd } from "react-icons/sl";
import { SiSteelseries } from "react-icons/si";

export function Home() {
  const [selectedMediaType, setSelectedMediaType] = useState('movie');
  const [topRatedMedia, setTopRatedMedia] = useState([]);
  const [x, setX] = useState(0)
  const [positionClick, setPositionClick] = useState(true)
  let windowSize =  useMediaQuery('screen and (width <= 1150px)')

  useEffect(() => {
    (async () => {
      setX(0)
      const dataMovieOrTv = selectedMediaType === 'movie' ? await getTopRatedMovies() : await getTopRatedTvs()
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
        <div className="nav">
          <a className="link" href="https://github.com/Code-World-Co/WikiWatch">
            <AiFillGithub className="icon"/>
          </a>
        </div>
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

  
      
    </main>
  );
}
