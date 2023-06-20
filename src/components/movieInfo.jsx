import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import functions of movies.js
import { getInfoMovie } from "../data/movies";
import { getReviewsMovie } from "../data/movies";
import { getSimilarMovies } from "../data/movies";
import { getVideos } from "../data/movies";
//import style
import "../style/MediaInfo.css"
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
//import icons
import { CiStar, CiRead, CiMedal } from 'react-icons/ci';//import components
import { ReviewCard } from "./mediaCard";
import { SectionMedia } from "./sectionMedia";

export function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const movie = await getInfoMovie(id);
      setMovie(movie);
      const reviews = await getReviewsMovie(id);
      setReviews(reviews);
      const similarMovies = await getSimilarMovies(id);
      setSimilarMovies(similarMovies);
      const videos = await getVideos(id);
      setVideos(videos);
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
          <h1 className="title" >{movie.title}</h1>
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
        
        </section>
        
      </article>
        
      </section>


      

      <SectionMedia title="Similar Movies"  category='movie'  media={similarMovies} />

      <section className="reviews">
      <h1 className='title' >Reviews</h1>
      <div className="reviewsContainer">
        {
          reviews.length === 0 ?
          <h1>No reviews</h1> :
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
