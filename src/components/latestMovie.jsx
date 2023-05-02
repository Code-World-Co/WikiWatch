//import style
import "../style/Movies.css";
//import icons
import { CiStar, CiRead, CiMedal } from 'react-icons/ci';
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";


export function LatestMovie({latest, latest : {genres = []}}) {
  //info of the latest movie

  return (
    <section className="latestMovie">
      <div className="imageContainer">
        <img
          src={
            latest.poster_path == undefined
              ? cinePhoto
              : "https://image.tmdb.org/t/p/original" + latest.poster_path
          }
        />
      </div>

      <article className="info">
        <header><h1>NEW MOVIE!</h1></header>

        <div className="titleContainer">
          <h1 className="title">{latest.title}</h1>
          {latest.adult ? (
            <span className="genre">+18</span>
          ) : (
            <span className="genre">Family</span>
          )}
        </div>

        {latest.overview === "" ? (
          <p className="">No description</p>
        ) : (
          <p className="description">{latest.overview}</p>
        )}

        <div className="notes">
          <div className="note">
            <CiRead className="icon" />
            <span className="text">
              <p>Popularity</p>
              {latest.popularity}
            </span>
          </div>
          <div className="note">
            <CiStar className="icon" />
            <span className="text">
              <p>Vote Averague</p>
              {latest.vote_average}
            </span>
          </div>
          <div className="note">
            <CiMedal className="icon" />
            <span className="text">
              <p>Vote Count</p>
              {latest.vote_count}
            </span>
          </div>
        </div>

        <section className="genresInfo">
          <h1>Geners</h1>
          <div className="genresContainer">
            {genres.length ? latest.genres.map((genre) => {
              return (
                <span key={latest.genres.indexOf(genre)} className="genre">
                  {genre.name}
                </span>
              );
            }) : <span className="genre">No Geners</span> }
          </div>
        </section>
      </article>
    </section>
  );
}
