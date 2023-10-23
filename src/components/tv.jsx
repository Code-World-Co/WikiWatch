import { useState, useEffect } from 'react';
import { getLatest, getAiringTodayTv,  getPopularTvs, getTopRatedTvs, getNowPlayingTv } from '../data/tv';
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
            setLatestTv(await getLatest())
            setAiringTodayTv(await getAiringTodayTv())
            setNowPlayingTv(await getNowPlayingTv())
            setPopularTv(await getPopularTvs())
            setTopRatedTv(await getTopRatedTvs())
        })()
    }, []);

    return(
        <section className='Movie'>
            <IsNotAdult IsAdult={isAdult} isAdultMovie={dataLatestTv.adult}> <LatestTv {...dataLatestTv}/> </IsNotAdult>
            <SectionMedia IsAdult={isAdult} key='Airing Tv Series' title="Airing TV Series " category='tv' media={dataAiringTodayTv}/>
            <SectionMedia IsAdult={isAdult} key='Playing Tv Series' title="Playing TV Series " category='tv' media={dataNowPlayingTv}/>
            <SectionMedia IsAdult={isAdult} key='Popular TV Series' title="Popular TV Series " category='tv' media={dataPopularTv}/>
            <SectionMedia IsAdult={isAdult} key='Top Rated TV Series' title="Top Rated TV Series " category='tv' media={dataTopRatedTv}/>
        </section>
    )
}