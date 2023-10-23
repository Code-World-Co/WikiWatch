import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import functions of movies.js
import { getInfoTv,getSimilarTv,getReviewsTv } from "../data/tv";

//import style
import "../style/MediaInfo.css"
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
//import icons
import { CiStar, CiRead, CiMedal } from 'react-icons/ci';//import components
import { ReviewCard } from "./mediaCard";
import { SectionMedia } from "./sectionMedia";

export function TvInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    genres: [],
  });
  const [reviews, setReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movie = await getInfoTv(id);
      setMovie(movie);
      const reviews = await getReviewsTv(id);
      setReviews(reviews.slice(0, 2));
      const similarMovies = await getSimilarTv(id);
      setSimilarMovies(similarMovies);
      
    }
    fetchData();
  }, [id]);

  return (
    <main>
      <section className="MediaInfo">
        <div className="imageContainer">
          <img
            src={
              movie.poster_path == undefined
                ? cinePhoto
                : "https://image.tmdb.org/t/p/original" + movie.poster_path
            }
          />
        </div>

        <article className="info">
        <header>
          <h1 className="title" >{movie.name}</h1>
          <div className="subInfo">
          {movie.adult ? 
           (<span className="adult">+18</span>) : (<span className="adult">Family</span>)
          }
          <span className="adult">{movie.language}</span>
          
          </div>
          
        </header>
        <section className="content">
        {
         movie.overview === "" ? 
         (<p className="">This content has no description</p>) :(<p className="description">{movie.overview}</p>)
        }

       

        <div className="notes">
            <div className="note">
              <CiRead className="icon" />
              
                <p>Popularity</p>
                {movie.popularity}
              
            </div>
            <div className="note">
              <CiStar className="icon" />
              
                <p>Vote Averague</p>
                {movie.vote_average}
             
            </div>
            <div className="note">
              <CiMedal className="icon" />
              
                <p>Vote Count</p>
                {movie.vote_count}
             
            </div>
          </div>

          <div className="genresInfo">
          <h1 className="title">Geners</h1>
          <div className="genresContainer">
            {movie.genres.length ? movie.genres.map((genre) => {
              return (
                <span key={movie.genres.indexOf(genre)} className="genre">
                  {genre.name}
                </span>
              );
            }) : <span className="genre">No Geners</span> }
          </div>
        </div>
        
        </section>
        
      </article>
        
      </section>


      

      <SectionMedia title="Similar Tvs"  category='tv'  media={similarMovies} />

      <section className="reviews">
        <header><h1 className='title' >Reviews</h1></header>
      
      <div className="reviewsContainer">
        {
          reviews.length === 0 ?
          <h1>No reviews for this content :(</h1> :

          reviews.map((review) => (
            <ReviewCard key={reviews.indexOf(review)} review={review} />
          )
        )
        }
      </div>
      </section>
    </main>
  );
}
