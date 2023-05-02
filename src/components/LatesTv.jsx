//import style
import "../style/Movies.css";
//import icons
import { CiStar, CiRead, CiMedal, CiPlay1, CiSettings } from 'react-icons/ci';
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
//import data

export default function LatestTv({poster_path, name, adult, overview, popularity, vote_average, vote_count, genres = [], number_of_seasons, status}) {

  console.log(genres)

  return (
    <section className="latestMovie">
      <div className="imageContainer">
        <img
          src={
            poster_path == undefined
              ? cinePhoto
              : "https://image.tmdb.org/t/p/original" + poster_path
          }
        />
      </div>

      <article className="info">
        <header><h1>NEW TV SERIES!</h1></header>

        <div className="titleContainer">
          <h1 className="title">{name}</h1>
          {adult ? (
            <span className="genre">+18</span>
          ) : (
            <span className="genre">Family</span>
          )}
        </div>

        {overview === "" ? (
          <p className="">No description</p>
        ) : (
          <p className="description">{overview}</p>
        )}

        <div className="notes">
          <div className="note">
            <CiRead className="icon" />
            <span className="text">
              <p>Popularity</p>
              {popularity}
            </span>
          </div>
          <div className="note">
            <CiStar className="icon" />
            <span className="text">
              <p>Vote Averague</p>
              {vote_average}
            </span>
          </div>
          <div className="note">
            <CiMedal className="icon" />
            <span className="text">
              <p>Vote Count</p>
              {vote_count}
            </span>
          </div>
          <div className="note">
            <CiPlay1 className="icon" />
            <span className="text">
              <p>Number of seasons</p>
              {number_of_seasons}
            </span>
          </div>
          <div className="note">
            <CiSettings className="icon" />
            <span className="text">
              <p>status: </p>
              {status}
            </span>
          </div>
        </div>

        <section className="genresInfo">
          <h1>Geners</h1>
          <div className="genresContainer">
            {!genres ? genres?.map((genre) => {
              return (
                <span key={genres.indexOf(genre)} href={genre} className="genre">
                  {genre.name}
                </span>
              );
            })
            :
            <span className="genre">No Geners</span>}
          </div>
        </section>
      </article>
    </section>
  );
}
