//import style
import "../style/Movies.css";
//import icons
import { CiStar, CiRead, CiMedal, CiPlay1, CiSettings } from 'react-icons/ci';
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
//import data

export default function LatestTv({poster_path, name, adult, overview,  genres = [],language}) {
  return (
    <section className="containerMedia">
    <section className="latestMovie">
      <div className="imageContainer">
        <img src={
            poster_path == undefined?
            cinePhoto : "https://image.tmdb.org/t/p/original" + poster_path }
        />
      </div>

      <article className="info">
        <header>
          <h1 className="title" >{name}</h1>
          <div className="subInfo">
          {adult ? 
           (<span className="adult">+18</span>) : (<span className="adult">Family</span>)
          }
          <span className="adult">{language}</span>

          </div>

        </header>
        <section className="content">
        {
         overview === "" ? 
         (<p className="">This content has no description</p>) :(<p className="description">{overview}</p>)
        }

        <div className="genresInfo">
          <h1 className="title">Geners</h1>
          <div className="genresContainer">
            {genres.length ? genres.map((genre) => {
              return (
                <span key={genres.indexOf(genre)} className="genre">
                  {genre.name}
                </span>
              );
            }) : <span className="genre">No Geners</span> }
          </div>
        </div>
        <div>
        
        </div>
        </section>

      </article>
    </section>
    </section>
  );
}
