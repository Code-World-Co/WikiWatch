//import icons
import { CiStar } from "react-icons/ci";
//import images
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
export function MediaCard(props){
    return (
        <div className="card">
            <span><CiStar className="icon"/>  {props.media.vote_average}</span>
            <img src={
                props.media.poster_path == undefined
                ? cinePhoto
                : 'https://image.tmdb.org/t/p/original'+props.media.poster_path}/>
        </div>
    )
}

export function ReviewCard(props){
    return(
        <div className="reviewCard">
            <div className="review">
                <h1>{props.review.author}</h1>
                <p>{props.review.content}</p>
            </div>
        </div>
    )
}