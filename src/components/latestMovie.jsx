//import style
import "../style/Movies.css";
//import icons
import { CiStar, CiRead, CiMedal } from 'react-icons/ci';
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";


export function LatestMovie({latest, latest : {genres = []}}) {
  //info of the latest movie
  return (
    <section className="containerMedia">
    <section className="latestMovie">
      <div className="imageContainer">
        <img src={
            latest.poster_path == undefined?
            cinePhoto : "https://image.tmdb.org/t/p/original" + latest.poster_path }
        />
      </div>

      <article className="info">
        <header>
          <h1 className="title" >{latest.title}</h1>
          <div className="subInfo">
          {latest.adult ? 
           (<span className="adult">+18</span>) : (<span className="adult">Family</span>)
          }
          <span className="adult">{latest.language}</span>

          </div>

        </header>
        <section className="content">
        {
         latest.overview === "" ? 
         (<p className="">This content has no description</p>) :(<p className="description">{latest.overview}</p>)
        }

        <div className="genresInfo">
          <h1 className="title">Geners</h1>
          <div className="genresContainer">
            {genres.length ? latest.genres.map((genre) => {
              return (
                <span key={latest.genres.indexOf(genre)} className="genre">
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
