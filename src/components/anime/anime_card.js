import React from 'react'
import {Link} from "react-router-dom";

const AnimeCard = ({anime}) => {
    return (
        <div className="container mt-5">
            <div className="card mt-5">
                <div className="card-body">
                    <Link to={`/anime/${anime.animeId}`} anime={anime}>
                        <h5>222</h5>
                        {/*<h5 className="card-title">{anime.title}</h5>*/}
                    </Link>
                    <p className="card-text">{anime.episodes}</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;