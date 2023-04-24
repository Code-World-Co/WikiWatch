import { useState, useEffect } from 'react';
import { getLatestTv, getAiringTodayTv, getNowPlayingTv, getPopularTv, getTopRatedTv } from '../data/tv';
import { SectionMedia } from './sectionMedia';
import LatestTv from './LatesTv';
import { IsNotAdult } from './IsNotAdult';

export function Tv({isAdult}){
    const [dataLatestTv, setLatestTv] = useState({})
    const [dataAiringTodayTv, setAiringTodayTv] = useState([])
    const [dataNowPlayingTv, setNowPlayingTv] = useState([])
    const [dataPopularTv, setPopularTv] = useState([])
    const [dataTopRatedTv, setTopRatedTv] = useState([])

    useEffect(() => {
        (async () => {
            setLatestTv(await getLatestTv())
            setAiringTodayTv(await getAiringTodayTv())
            setNowPlayingTv(await getNowPlayingTv())
            setPopularTv(await getPopularTv())
            setTopRatedTv(await getTopRatedTv())
        })()
    }, []);

    return(
        <section className='Movie'>
            <IsNotAdult IsAdult={isAdult} isAdultMovie={dataLatestTv.adult}> <LatestTv {...dataLatestTv}/> </IsNotAdult>
            <SectionMedia IsAdult={isAdult} key='Airing Tv Series' title="Airing TV Series " category='Tv' media={dataAiringTodayTv}/>
            <SectionMedia IsAdult={isAdult} key='Playing Tv Series' title="Playing TV Series " category='Tv' media={dataNowPlayingTv}/>
            <SectionMedia IsAdult={isAdult} key='Popular TV Series' title="Popular TV Series " category='Tv' media={dataPopularTv}/>
            <SectionMedia IsAdult={isAdult} key='Top Rated TV Series' title="Top Rated TV Series " category='Tv' media={dataTopRatedTv}/>
        </section>
    )
}