import React, { useEffect, useState , Component} from 'react';
import SnippetsCard from "./SnippetsCard";

import snippetsService from '../../services/snippets.service'
import {Link} from "react-router-dom";

const SnippetsList = () => {
    //// Empty array in useState
    const [snippetsList, setSnippetsList] = useState();
 

    useEffect(() => {
        snippetsService.findAllSnippets()
            .then(res => {
                setSnippetsList(res)
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
        <div>
            <h1>Snippets Page</h1>
             {/* <div className="d-flex flex-row justify-content-between"> 
                
                <Link to="/snippets/create">
                    <i className="fas fa-plus fa-2x btn btn-primary"/>
                </Link>
            </div> */}
            {/* <div className="SnippetsCard">  */}
                {/* { 
                    snippetsList != null &&
                    snippetsList.map(item => (
                        <SnippetsCard
                           key={item.snipId}
                           userSnippet={item}
                     />
                    ))
                } */}
                       { 
                    snippetsList != null &&
                    snippetsList.map(item => (
                        <SnippetsCard
                           key={item.snipId}
                           userSnippet={item}
                        //    userId={item.snipId}
                        //    snippet={item.snippet}
                        //    user={[item.user]}
                        //    anime={item.anime}

                     />
                    ))
                }
            {/* </div> */}
        </div>
    )
   
}

export default SnippetsList;
