import React, { useEffect, useState } from 'react';
import AnimeCard from "./AnimeCard";

import animeService from '../../services/anime.service'

// class AnimeList extends React.Component{
//     state = {
//         animeList: []
//     }
//
//     componentDidMount = () =>
//         animeService.findAllAnimes()
//             .then(animeList =>this.setState({animeList}))
//
//     deleteAnime = (animeToDelete) => {
//         animeService.deleteAnime(animeToDelete.animeId)
//             .then(status => {
//                 this.setState((prevState) => ({
//                     ...prevState,
//                     animeList: prevState.animeList.filter
//                     (anime => anime !== animeToDelete)
//                 }))
//             })
//     }
// }
const AnimeList = () => {
    const [animeList, setAnimeList] = useState([])

    useEffect(() => {
        animeService.findAllAnimes()
            .then(animeList => {
                setAnimeList(animeList)
            })
    }, [])

    const deleteAnime = (animeToDelete) => {
        animeService.deleteAnime(animeToDelete.animeId)
            .then(status =>
                setAnimeList(animeList => animeList.filter(anime => anime.animeId !== animeToDelete.animeId)))
            }

    return (
        <div className="container">
            <h1>Anime</h1>
            <div className="row">
                {
                    animeList != null &&
                    animeList.map(a => (
                        <AnimeCard
                            key={a.animeId}
                            anime={a}
                            deleteAnime={deleteAnime}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default AnimeList;
