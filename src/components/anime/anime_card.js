import React from 'react'
import {Link} from "react-router-dom";

const AnimeCard = ({anime}) => {
    return (
        <div className="col-3 ml-n2">
            <div className="card mt-5">
                <div className="card-body">
                    <Link to="/">anime Title</Link>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;