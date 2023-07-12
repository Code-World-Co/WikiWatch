import { motion, AnimatePresence } from 'framer-motion';
import '../style/ElementHome.css'

const urlImg = 'https://image.tmdb.org/t/p/original'

const element = (positionClick) => { return {
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
    selectedElementResize:{
        boxShadow: '0px 0px 0px var(--color-effect-title), 0px 0px 0px var(--color-effect-title),0px 0px 0px var(--color-effect-title),0px 0px 0px var(--color-effect-title), 0px 0px 0px var(--color-effect-title), 0px 0px 0px var(--color-effect-title)',
        overflow : 'hidden',
    },
    initialElementHoverEffect:{
        opacity : 0,
    },
    initialElementHoverEffectResize:{
        x: positionClick ? '-100%' : '100%',
        opacity: 0
    },
    selectedElementHoverEffect :{
        opacity : 1,
    },
    selectedElementHoverEffectResize :{
        opacity : 1,
        x : '0',
    },
    exitElementHoverEffect :{
        opacity : 0
    },
    exitElementHoverEffectResize :{
        x: positionClick ? '100%' : '-100%',
        opacity : 0
    }
}
}

export const MovieElement = ({ poster_path, title, x, index, hover, reSize, positionClick }) => {

    return (
        <div className='box-element'>

            <motion.div variants={element(positionClick)} whileHover={() => hover(index)} className="movieElement" animate={x === index ? ['selectedElement', reSize ? 'selectedElementResize' : {} ] : ['effectElement', reSize ? {display: 'none'} : {display:'block'} ]} >
                <img className="movieElement-img loadingImg" loading="lazy" src={urlImg + poster_path} alt={title} />
                <motion.h3 animate={x === index ? {opacity : 1} : {}} className="movieElement-title">{title}</motion.h3>
            </motion.div>

            <AnimatePresence>
                {x === index &&
                <motion.div variants={element(positionClick)} initial={reSize ? 'initialElementHoverEffectResize' : 'initialElementHoverEffect'} animate={reSize ? 'selectedElementHoverEffectResize' : 'selectedElementHoverEffect'} exit={reSize ? 'exitElementHoverEffectResize' : 'exitElementHoverEffect'} className='imgBackground'>
                    <div className='topRightBackground Background'></div>
                    <img className='elementImgBackground' src={urlImg + poster_path} alt={title} />
                    <div className='bottomRightBackground Background'></div>
                </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}


export const TvElement = ({ poster_path, name, x, index, hover, reSize, positionClick }) => {

    return (
        <div>
            <motion.div variants={element(positionClick)} whileHover={() => hover(index)} className="movieElement" animate={x === index ? ['selectedElement', reSize ? 'selectedElementResize' : {} ] : ['effectElement', reSize ? {display: 'none'} : {display:'block'} ]}>
                <img className="tvElement-img loadingImg" loading="lazy" src={urlImg + poster_path} alt={name} />
                <motion.h3 animate={x === index ? {opacity: 1} : {}} className="tvElement-title">{name}</motion.h3>
            </motion.div>
            <AnimatePresence>
            {x === index &&
                <motion.div variants={element(positionClick)} initial={reSize ? 'initialElementHoverEffectResize' : 'initialElementHoverEffect'} animate={reSize ? 'selectedElementHoverEffectResize' : 'selectedElementHoverEffect'} exit={reSize ? 'exitElementHoverEffectResize' : 'exitElementHoverEffect'} className='imgBackground'>
                    <div className='topLeftBackground Background'></div>
                    <img className='elementImgBackground' src={urlImg + poster_path} alt={name} />
                    <div className='bottomLeftBackground Background'></div>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )

}