//import style
import "../style/Home.css";
//import icons
import { useEffect, useState } from "react";
import video from "../assets/video/trailer.mp4";
import { MovieElement, TvElement } from "./ElementHome";
import { getTopRatedTv } from "../data/tv";
import { getTopRatedMovies } from "../data/movies";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function Home() {
  const [selectedMediaType, setSelectedMediaType] = useState('movie');
  const [topRatedMedia, setTopRatedMedia] = useState([]);
  const [x, setX] = useState(0)

  useEffect(() => {
    (async () => {
      setX(0)
      const dataMovieOrTv = selectedMediaType === 'movie' ? await getTopRatedMovies() : await getTopRatedTv()
      setTopRatedMedia(dataMovieOrTv.slice(14, 19))
    })()
  },
    [selectedMediaType]);

  const handleClickLeft = () => {
    if (x > 0) {
      setX(x - 1)
    }

  }

  const handleClickRight = () => {
    if (x < topRatedMedia.length - 1) {
      setX(x + 1)
    }
  }

  return (
    <main className="home">
      <div className="trailer">
        <div className="background"></div>
        <video className="video" loop={true} autoPlay={true} onError={() => console.error("error playing video")} src={video}></video>
      </div>

      <section className="homePage">
        <h1 className="title"><span className="firstWord-title title">WATCH</span> WIKI</h1>
        <h2>You will find the best information of movies and series</h2>
      </section>

      <section className="boxCard">
        <div className="boxText">
          <h2 className={`title-boxText ${selectedMediaType === 'movie' ? 'active' : 'effect'}`} onClick={() => setSelectedMediaType('movie')}>MOVIE</h2>
          <h2 className={`title-boxText ${selectedMediaType !== 'movie' ? 'active' : 'effect'}`} onClick={() => setSelectedMediaType('tv')}>TV SERIES</h2>
        </div>
        <div className="boxMedia">
          {
            selectedMediaType === 'movie' ?
              topRatedMedia.map((movie, index) => <MovieElement key={movie.id} {...movie} x={x} index={index} hover={(p) => setX(p)} />)
              :
              topRatedMedia.map((tv, index) => <TvElement key={tv.id} {...tv} x={x} index={index} hover={(p) => setX(p)} />)
          }
        </div>
        <div className="boxButton">
          <MdOutlineKeyboardArrowLeft onClick={handleClickLeft} className="button" />
          <MdOutlineKeyboardArrowRight onClick={handleClickRight} className="button" />
        </div>
      </section>

    </main>
  );
}
