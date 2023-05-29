import { motion, AnimatePresence } from 'framer-motion';
import '../style/ElementHome.css'

const urlImg = 'https://image.tmdb.org/t/p/original'

const variable = {
    effectElement : {opacity : 1, transition : {
        duration: 0.5,
        ease: 'linear',
    }},
    selectedElement: {
        opacity: 1,
        scale: 1,
        y : '-10%',
        boxShadow: '1px 1px 0px var(--color-effect-title), 2px 2px 0px var(--color-effect-title),3px 3px 0px var(--color-effect-title),4px 4px 0px var(--color-effect-title), 5px 5px 0px var(--color-effect-title), 6px 6px 0px var(--color-effect-title)',
        transition: {
          duration: 0.3,
          ease: 'linear'
        }
      },
    selectedTitle : {
        opacity: 1,
        scale: 2,
    },
    initialElementHoverEffect:{
        opacity : 0,
    },
    selectedElementHoverEffect :{
        opacity : 1,
    }
    ,
    exitElementHoverEffect :{
        opacity : 0
    }
}

export const MovieElement = ({ poster_path, title, x, index, hover }) => {

    return (
        <div>
            <motion.div id={index} variants={variable} whileHover={() => hover(index)} className="movieElement" animate={x === index ? 'selectedElement' : 'effectElement'} >
                <img className="movieElement-img loadingImg" loading="lazy" src={urlImg + poster_path} alt={title} />
                <motion.h3 animate={x === index ? 'selectedTitle' : { opacity: 0 }} className="movieElement-title">{title}</motion.h3>
            </motion.div>
            <AnimatePresence>
                {x === index &&
                <motion.div id={poster_path} variants={variable} initial='initialElementHoverEffect' animate='selectedElementHoverEffect' exit='exitElementHoverEffect' className='imgBackground'>
                    <div className='topRightBackground Background'></div>
                    <img className='elementImgBackground' src={urlImg + poster_path} alt={title} />
                    <div className='bottomRightBackground Background'></div>
                </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}


export const TvElement = ({ poster_path, name, x, index, hover }) => {

    return (
        <div>
            <motion.div id={index} variants={variable} whileHover={() => hover(index)} className="tvElement" animate={x === index ? 'selectedElement' : 'effectElement'}>
                <img className="tvElement-img loadingImg" loading="lazy" src={urlImg + poster_path} alt={name} />
                <motion.h3 animate={x === index ? 'selectedTitle' : { opacity: 0 }} className="tvElement-title">{name}</motion.h3>
            </motion.div>
            <AnimatePresence>
            {x === index &&
                <motion.div id={index} variants={variable} initial='initialElementHoverEffect' animate='selectedElementHoverEffect' exit='exitElementHoverEffect' className='imgBackground'>
                    <div className='topLeftBackground Background'></div>
                    <img className='elementImgBackground' src={urlImg + poster_path} alt={name} />
                    <div className='bottomLeftBackground Background'></div>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )

}