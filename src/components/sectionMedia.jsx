import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
//import components
import { MediaCard } from "./mediaCard";
//import style
import "../style/MediaCard.css";
//import icons
import { CiStar,CiGrid41 } from "react-icons/ci";

export function SectionMedia(props){
    const [media, setMedia] = useState([])
    useEffect(() => {
        const allMedia = props.media.slice(0, 10)
        setMedia(allMedia)
    }, [props.media])

    const onclick = () => {
        window.scrollTo(0, 0)
    }

    return(
        <section className="sectionMedia">
            <header>
                <h1 className="title">{props.title}</h1>
                <Link className="link" to="/all"><CiGrid41/>  All</Link>
            </header>
            <div className="mediaContainer">
                {

                    media.map((medium) => {
                        return(
                            <Link key={medium.id} to={`/${props.category}/`+medium.id} onClick={onclick}>
                                <MediaCard  media={medium}/>
                            </Link>
                        )
                    })

                }
            </div>
        </section>
    )
}
