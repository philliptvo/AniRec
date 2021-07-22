import React from 'react'
import {useParams} from "react-router-dom"

const AnimeDetail = ({anime}) => {
    const {animeId} = useParams()

    return(
        <div className="container mt-5">
            <h2>Anime detail</h2>
            <h2>{anime.title}</h2>
            <h4>{anime.animeType}</h4>
            <p>{anime.airedFrom} - {anime.airedTo}</p>
            <p>{anime.synopsis}</p>
        </div>
    )
}

export default AnimeDetail;
