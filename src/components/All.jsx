import React from "react";
import { Link, useParams } from "react-router-dom";
import { MediaCard } from "./mediaCard";
import "../style/all.css";
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
export function All() {
  const { category, media } = useParams();
  const mediaList = JSON.parse(decodeURIComponent(media));
  
  const onclick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <section className="allContainer">

      <div className="mediacontainer">

        {mediaList.map((medium) => {
            return (
              <Link key={medium.id} to={`/${category}/` + medium.id} onClick={onclick}>
                <MediaCard media={medium} />
              </Link>
            );
          })}
      </div>
    </section>
  );
}

