import React, { useEffect, useState } from 'react';
import AnimeCard from "./AnimeCard";

import animeService from '../../services/anime.service'

const AnimeList = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        animeService.findAllAnimes()
            .then(animeList => {
                setAnime(animeList)
            })
    }, [])

    return (
        <div className="container">
            <h1>Anime</h1>
            <div className="row">
                {
                    anime.length > 0 &&
                    anime.map(a => (
                        <AnimeCard key={a.animeId} anime={a}/>
                    ))
                }
            </div>
        </div>
    )

}

export default AnimeList;
