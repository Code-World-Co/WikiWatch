import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import functions of movies.js
import { getInfoMovie } from "../data/movies";
import { getReviewsMovie } from "../data/movies";
import { getSimilarMovies } from "../data/movies";
import { getVideos } from "../data/movies";
//import style
import "../style/Movies.css";
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
//import icons
import { CiStar, CiRead, CiMedal } from 'react-icons/ci';
//import components
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
      <section className="latestMovie">
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
          <div className="titleContainer">
            <h1 className="title">{movie.title}</h1>
            {movie.adult ? (
              <span className="genre">+18</span>
            ) : (
              <span className="genre">Family</span>
            )}
          </div>

          {movie.overview === "" ? (
            <p className="">No description</p>
          ) : (
            <p className="description">{movie.overview}</p>
          )}

          <div className="notes">
            <div className="note">
              <CiRead className="icon" />
              <span className="text">
                <p>Popularity</p>
                {movie.popularity}
              </span>
            </div>
            <div className="note">
              <CiStar className="icon" />
              <span className="text">
                <p>Vote Averague</p>
                {movie.vote_average}
              </span>
            </div>
            <div className="note">
              <CiMedal className="icon" />
              <span className="text">
                <p>Vote Count</p>
                {movie.vote_count}
              </span>
            </div>
          </div>

          <section className="genresInfo">
            <h1>Geners</h1>
            <div className="genresContainer">
              {movie.genres?.map((genre) => {
                return (
                  <span key={movie.genres.indexOf(genre)} className="genre">
                    {genre.name}
                  </span>
                );
              })}
            </div>
          </section>
        </article>
      </section>


      <section className="videos">
        <h1 className="title">Videos</h1>
        <div className="videosContainer">
          {videos.map((video) => (
            <iframe
              key={videos.indexOf(video)}
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + video.key}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>

      <SectionMedia title="Similar Movies"  category='movie'  media={similarMovies} />

      <section>
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
