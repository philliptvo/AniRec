import React, {useEffect, useState} from 'react';
import AnimeCard from "./anime_card";
import animeService from '../../services/anime_service'

const Anime = () => {
    const [animes, setAnime] = useState([])

    useEffect(() => {
        animeService.findAllAnimes()
            .then(animeItem => {
                setAnime(animeItem)
            })
    }, [])
    return (
        <div className="container">
            <h1>Anime</h1>
            <div className="row">
                <AnimeCard/>
                {
                    animes &&
                    animes.map(anime => <AnimeCard anime={anime}/>)
                }
            </div>
        </div>
    )

}

export default Anime;