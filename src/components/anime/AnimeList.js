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

    const deleteAnimeHandler = (animeToDelete) => {
        animeService.deleteAnime(animeToDelete.animeId)
            .then(status =>
                setAnimeList(animeList => animeList.filter(anime => anime.animeId !== animeToDelete.animeId)))
            .catch(err => {
                console.log(err)
            })
            }


    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <h1>Anime</h1>
                <Link to="/anime/create">
                    <i className="fas fa-plus fa-2x btn btn-primary"/>
                </Link>
            </div>

            <div className="row">
                {
                    animeList != null &&
                    animeList.map(a => (
                        <AnimeCard
                            key={a.animeId}
                            anime={a}
                            deleteHandler={deleteAnimeHandler}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default AnimeList;
