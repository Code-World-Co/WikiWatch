import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MediaCard } from "./mediaCard";
import "../style/MediaCard.css";
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function SectionMedia(props) {
  const [media, setMedia] = useState([]);
  const [topleft, setTopleft] = useState(0);
  const [topright, setTopright] = useState(5);
  const [cardsToShow, setCardsToShow] = useState(5);

  useEffect(() => {
    setMedia(props.media.slice(topleft, topright));
  }, [topleft, topright, props.media]);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let newCardsToShow = 5;

      if (screenWidth < 768) {
        newCardsToShow = 1;
      } else if (screenWidth < 1024) {
        newCardsToShow = 3;
      } else if (screenWidth < 1200) {
        newCardsToShow = 4;
      }

      setCardsToShow(newCardsToShow);
      setTopright(topleft + newCardsToShow);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [topleft]);

  const clickLeft = () => {
    if (topleft > 0) {
      setTopleft(topleft - cardsToShow);
      setTopright(topright - cardsToShow);
    }
  };

  const clickRight = () => {
    if (topright < props.media.length) {
      setTopleft(topleft + cardsToShow);
      setTopright(topright + cardsToShow);
    }
  };

  const onclick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="sectionMedia">
      <header>
        <h1 className="title">{props.title}</h1>
      </header>

      <div className="linkContainer">
        <Link className="link" to="/all">
          <CiGrid41 /> 
        </Link>
      </div>

      <section className="sectionMediaContent">
        <div className="mediaContainer">
          {media.map((medium) => {
            return (
              <Link key={medium.id} to={`/${props.category}/` + medium.id} onClick={onclick}>
                <MediaCard media={medium} />
              </Link>
            );
          })}
        </div>

        <div className="buttons">
          <div className="buttonsContainer">
            <button onClick={clickLeft} className="button">
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button onClick={clickRight} className="button">
              <MdOutlineKeyboardArrowRight />{" "}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
