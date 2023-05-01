import "../style/Alert.css"
import video from "/src/assets/video/trailer.mp4";
import { motion } from "framer-motion"
import { useState } from "react";

export const AlertHome = ({ alertNoAdult, alertAdult }) => {
    const [optionHover, setOptionHover] = useState(null)

    return (
        <div className="alert">
            <div className="trailer">
                <motion.div
                initial={{backgroundColor : '#00000099'}}
                animate={{ backgroundImage : optionHover === null ? 'linear-gradient(0deg, #041026 0%, #ffffff00 100%)' : optionHover === 'adult' ? 'linear-gradient(0deg, rgba(41, 1, 78, 0.952) 0%, rgba(255,255,255,0) 100%)' : 'linear-gradient(0deg, rgba(0,44,45,0.9303318739605217) 0%, rgba(255,255,255,0) 100%)'}}
                transition={{duration : 0.5}} className="background"></motion.div>
                <video className="video"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                    src={video}
                    onError={() => console.error("error playing video")}
                >
                </video>
            </div>
            <motion.div className="alert-box"
                animate={{width: '500px'}} transition={{ duration: 1.5 }}>
                <h1>Explicit content warning</h1>
                <p>This website contains explicit content for those over 18 years of age. complete the following form to access the content.</p>
                <p>please, confirm if you are of legal age</p>
                <div className="alert-box-button">
                    <motion.button className="button" whileHover={() => setOptionHover('adult')} onClick={alertAdult}>I'm an adult</motion.button>
                    <motion.button className="button" whileHover={() => setOptionHover('minor')} onClick={alertNoAdult}>I'm a minor</motion.button>
                </div>
            </motion.div>
        </div>
    )
}