import React, { useEffect, useState } from 'react';
import AnimeCard from "./AnimeCard";

import animeService from '../../services/anime.service'
import {Link} from "react-router-dom";

const AnimeList = () => {
    const [animeList, setAnimeList] = useState([])

    useEffect(() => {
        animeService.findAllAnimes()
            .then(animeList => {
                setAnimeList(animeList)
            })
    }, [])

    const deleteAnime = (animeToDelete) => {
        animeService.deleteAnime(animeToDelete.animeId)
            .then(status =>
                setAnimeList(animeList => animeList.filter(anime => anime.animeId !== animeToDelete.animeId)))
            }


    return (
        <div className="container">
            <h1>Anime</h1>
            <Link to="/create-anime">
                <i className="fas fa-plus fa-2x float-right btn"/>
            </Link>

            <div className="row">
                {
                    animeList != null &&
                    animeList.map(a => (
                        <AnimeCard
                            key={a.animeId}
                            anime={a}
                            deleteAnime={deleteAnime}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default AnimeList;
