import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

import animeService from '../../services/anime.service';

const AnimeDetail = () => {
    const { animeId } = useParams()
    const [anime, setAnime] = useState({});

    useEffect(() => {
        animeService.findAnimeById(animeId)
            .then((animeItem)=>
                setAnime(animeItem));
    }, [animeId]);

    return(
        <div className="container mt-5">
            <div className="d-flex flex-row justify-content-between">
                <h2>{anime.title}</h2>
                <Link to={`/anime/edit/${animeId}`}>
                    <i className="fas fa-edit fa-2x btn btn-secondary"/>
                </Link>
            </div>

            <h4>Media: {anime.animeType}</h4>
            <p>
                Aired: {anime.airedFrom ? `${String(anime.airedFrom[1]).padStart(2, '0')} ${anime.airedFrom[0]}` : '?'} to {anime.airedTo ? `${String(anime.airedTo[1]).padStart(2, '0')} ${anime.airedTo[0]}` : '?'}
            </p>
            <p>{anime.synopsis}</p>
        </div>
    )
}

export default AnimeDetail;
