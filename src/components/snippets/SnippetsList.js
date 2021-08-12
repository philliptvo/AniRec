import React, { useEffect, useState } from 'react';
import SnippetsCard from "./SnippetsCard";

import snippetsService from '../../services/snippets.service'
import {Link} from "react-router-dom";

const SnippetsList = () => {
    const [snippetsList, setSnippetsList] = useState([])

    useEffect(() => {
        snippetsService.findAllSnippets()
            .then(snippetsList => {
                setSnippetsList(snippetsList)
            })
    }, [])

    // const deleteAnimeHandler = (animeToDelete) => {
    //     animeService.deleteAnime(animeToDelete.animeId)
    //         .then(status =>
    //             setAnimeList(animeList => animeList.filter(anime => anime.animeId !== animeToDelete.animeId)))
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         }


    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-between">
                <h1>Snippets</h1>
                <Link to="/snippets/create">
                    <i className="fas fa-plus fa-2x btn btn-primary"/>
                </Link>
            </div>

            <div className="row">    
            {
            snippetsList != null &&
            snippetsList.map(x => ( 
                        <SnippetsCard
                             //key={x.snipId}
                             userSnippet={x}
                           // deleteHandler={deleteAnimeHandler}
                        />
            ))
            }
            </div>
        </div>
    )
   
}

export default SnippetsList
