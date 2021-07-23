import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import animeService from '../../services/anime.service';

const AnimeDetail = () => {
    const { animeId } = useParams()
    const [anime, setAnime] = useState({});

    useEffect(() => {
        animeService.findAnimeById(animeId)
            .then((animeItem)=>
                setAnime(animeItem));
    }, [animeId]);

    const updateAnime = (animeId, animeToUpdate) => {
        animeService.updateAnime(animeId)
            .then(status => {
                setAnime(anime => anime.map(a => a.animeId !== anime? a : animeToUpdate))
            })
    }

    return(
        <div className="container mt-5">
            <h2>Anime Details</h2>
            <i onClick={() =>
                updateAnime(animeId,
                {
                title: '111',
                synopsis: 'lala',
                animeType:'TV',
                airedFrom:'2001,05,06',
                airedTo:'2021,05,06',
                numEpisodes:'3'})} className="fas fa-check fa-2x float-right btn"/>
            <h2>{anime.title}</h2>
            <h4>Media: {anime.animeType}</h4>
            <p>Aired: {anime.airedFrom ? `${anime.airedFrom[1]} ${anime.airedFrom[0]}` : '?'} to {anime.airedTo ? `${anime.airedTo[1]} ${anime.airedTo[0]}` : '?'}</p>
            <p>{anime.synopsis}</p>
        </div>
    )
}

export default AnimeDetail;
