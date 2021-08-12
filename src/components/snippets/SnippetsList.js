import React, { useEffect, useState , Component} from 'react';
import SnippetsCard from "./SnippetsCard";

import snippetsService from '../../services/snippets.service'
import {Link} from "react-router-dom";

const SnippetsList = () => {
    //// Empty array in useState
    const [snippetsList, setSnippetsList] = useState();
    // const[upvotesNum, setUpvotesNum] = useState();
 

    useEffect(() => {
        snippetsService.findAllSnippets()
            .then(res => {
                setSnippetsList(res)
            })
        }, [])

        // useEffect(() => {
        //     snippetsService.findAllUpvotes()
        //         .then(res => {
        //             setUpvotesNum(res)
        //         })
        //     }, [])
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
             <h1>Snippets Page</h1>
                <Link to="/snippets/create" >
                    <i className="fas fa-plus fa-2x btn btn-primary"/>
                </Link>
            </div>
         
                       { 
                    snippetsList != null &&
                    snippetsList.map(item => (
                        <SnippetsCard
                           key={item.snipId}
                           userSnippet={item}
                     />
                    ))
                }
            {/* </div> */}
        </div>
    )
   
}

export default SnippetsList;
