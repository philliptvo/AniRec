import React from 'react'
import {Link} from "react-router-dom";

const AnimeCard = ({anime, deleteHandler}) => {
    const {animeId, title, animeType} = anime

    console.log('anime :) : ', JSON.parse(JSON.stringify(anime)))

    return (
        <div className="col-3 ml-n2">
            <div className="card mt-5">
                <div className="card-body">
                    <div>
                        <Link to={`/anime/${animeId}`}>
                            <h5 className="card-title">{title}</h5>
                        </Link>
                    </div>
                    <p className="card-text">{animeType}</p>
                    <i onClick={() => {
                        deleteHandler(anime)
                    }} className="fas fa-trash-alt btn btn-danger"/>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;
