import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
//import components
import { MediaCard } from "./mediaCard";
//import style
import "../style/MediaCard.css";
//import icons
import { CiGrid41} from "react-icons/ci";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function SectionMedia(props) {
    const [media, setMedia] = useState([])
    const [topleft, setTopleft] = useState(0)
    const [topright, setTopright] = useState(5)

    useEffect(() => {
        setMedia(props.media.slice(topleft, topright))
    }, [topleft, topright, props.media])

    const clickLeft = () => {
        if (topleft > 0) {
            setTopleft(topleft - 5)
            setTopright(topright - 5)
        }
    }

    const clickRight = () => {
        if (topright < props.media.length) {
            setTopleft(topleft + 5)
            setTopright(topright + 5)
        }
    }


    const onclick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className="sectionMedia">
            <header>
                <h1 className="title">{props.title}</h1>
            </header>

            
            <div className="linkContainer">
                <Link className="link" to="/all"><CiGrid41/>All</Link>
            </div>
                
            <section className="sectionMediaContent">
                <div className="mediaContainer">
                        {
                            media.map((medium) => {
                                return (
                        <Link key={medium.id} to={`/${props.category}/` + medium.id} onClick={onclick}>
                            <MediaCard media={medium} />
                        </Link>
                    )})
                    }
                </div>


                <div className="buttons">
                    <div className="buttonsContainer">
                            <button onClick={clickLeft} className="button"><MdOutlineKeyboardArrowLeft/></button>
                            <button onClick={clickRight} className="button"><MdOutlineKeyboardArrowRight/> </button>
                    </div>
                </div>

            </section>
            
        </section>
    )
}
