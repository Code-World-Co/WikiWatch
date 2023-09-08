//import style
import "../style/Home.css";
//import icons
import { useEffect, useState } from "react";
import video from "../assets/video/trailer.mp4";
import { MovieElement, TvElement } from "./ElementHome";
import { getTopRatedTv } from "../data/tv";
import { getTopRatedMovies } from "../data/movies";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useWindowSize, useMediaQuery } from "@uidotdev/usehooks";
import {AnimatePresence, motion} from 'framer-motion';

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

  const handleClickLeft = () => {
    setPositionClick(true)
    if (x > 0) {
      setX(x - 1)
    }else if (x === 0){
      setX(4)
    }

  }

  const handleClickRight = () => {
    setPositionClick(false)
    if (x < topRatedMedia.length - 1) {
      setX(x + 1)
    }else if (x === topRatedMedia.length - 1){
      setX(0)
    }
  }

  return (
    <main className="home">
      <div className="trailer">
        <div className="background"></div>
        <video className="video" loop={true} autoPlay={true} onError={() => console.error("error playing video")} src={video}></video>
      </div>

      <section className="homePage">
        <h1 className="title"><span className="firstWord-title title">WIKI</span> WATCH</h1>
        <h2>You will find the best information of movies and series</h2>
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
        <div className="boxButton">
          <MdOutlineKeyboardArrowLeft onClick={handleClickLeft} className="button" />
          <MdOutlineKeyboardArrowRight onClick={handleClickRight} className="button" />
        </div>
      </section>

    </main>
  );
}
