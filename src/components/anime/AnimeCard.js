import React from 'react'
import {Link} from "react-router-dom";

const AnimeCard = ({anime, deleteAnime}) => {
    // const {animeId, title, animeType} = anime

    return (
        <div className="col-3 ml-n2">
            <div className="card mt-5">
                <div className="card-body">
                    <div>
                        <Link to={`/anime`}>
                            <h5 className="card-title">title</h5>
                        </Link>
                        <i onClick={() => {
                            deleteAnime(anime)
                        }} className="fas fa-times btn btn-sm float-right"/>
                    </div>
                    <p className="card-text">animeType</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;
