import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import animeService from '../../services/anime.service'

const EditAnime = () => {
    const {animeId} = useParams()
    const isAddMode = !animeId

    const history = useHistory()
    const [newAnime, setAnime] = useState({
        title: '',
        synopsis: '',
        animeType:'',
        airedFrom:'',
        airedTo:'',
        numEpisodes:''
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setAnime({
            ...newAnime,
            [name] : value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newData = JSON.parse(JSON.stringify(newAnime))
        if (newData.airedFrom !== "") {
            const fromDate = new Date(newData.airedFrom)
            newData["airedFrom"] = [fromDate.getUTCFullYear(), fromDate.getUTCMonth() + 1, 1]
        }
        if (newData.airedTo !== "") {
            const toDate = new Date(newData.airedTo)
            newData["airedTo"] = [toDate.getUTCFullYear(), toDate.getUTCMonth() + 1, 1]
        }

        isAddMode ? doCreate(newData) : doUpdate(newData)
    }

    const doCreate = (anime) => {
        animeService.createAnime(anime)
            .then((newAnime) => {
                history.push({
                    pathname: `/anime/${newAnime.animeId}`
                })
            }).catch(err => {
                // TODO: Show error to user
                console.log(err)
            })
    }

    const doUpdate = (anime) => {
        animeService.updateAnime(animeId, anime)
            .then((_) => {
                history.goBack()
            }).catch(err => {
                // TODO: Show error to user
                console.log(err)
            })
    }

    useEffect(() => {
        if (!isAddMode) {
            animeService.findAnimeById(animeId).then(anime => {
                const {airedFrom, airedTo} = anime
                if (airedFrom) {
                    anime['airedFrom'] = `${String(airedFrom[0]).padStart(2, '0')}-${String(airedFrom[1]).padStart(2, '0')}`
                }
                if (airedTo) {
                    anime['airedTo'] = `${String(airedTo[0]).padStart(2, '0')}-${String(airedTo[1]).padStart(2, '0')}`
                }

                setAnime(anime)
            })
        } else {
            setAnime({...newAnime, animeType: 'TV'})
        }
    }, [])

    return(
        <div className="container">
            <h1>{isAddMode ? 'Create Anime' : 'Update Anime'}</h1>
            <br/>

            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="row form-group">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => onChangeHandler(e)}
                            value={newAnime.title}
                            type="text" name="title" id="title" className="form-control"
                            placeholder="Anime title"
                            required />
                    </div>
                </div>
                <br/>

                <div className="row form-group">
                    <label htmlFor="synopsis" className="col-sm-2 col-form-label">Synopsis</label>
                    <div className="col-sm-10">
                        <textarea onChange={(e) => onChangeHandler(e)}
                               value={newAnime.synopsis}
                               rows={5}
                                  name="synopsis" id="synopsis" className="form-control"
                               placeholder="A brief synopsis..."/>
                    </div>
                </div>
                <br/>

                <div className="row form-group">
                    <label htmlFor="airedfrom" className="col-sm-2 col-form-label">Aired From</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {onChangeHandler(e)}}
                               value={newAnime.airedFrom}
                               className="form-control"
                               type="month" id="airedFrom" name="airedFrom"/>
                    </div>
                </div>
                <br/>

                <div className="row form-group">
                    <label htmlFor="airedto" className="col-sm-2 col-form-label">Aired To</label>
                    <div className="col-sm-10">
                        <input
                            onChange={(e) => onChangeHandler(e)}
                               value={newAnime.airedTo}
                               className="form-control"
                               type="month" id="airedTo" name="airedTo"/>
                    </div>
                </div>
                <br/>

                <div className="row form-group">
                    <label htmlFor="animetype" className="col-sm-2 col-form-label">Anime Type</label>
                    <div className="col-sm-10">
                        <select onChange={(e) => onChangeHandler(e)}
                            value={newAnime.animeType}
                            className="form-control"
                            name="animeType" id="animeType">
                            <option value="TV">TV</option>
                            <option value="MOVIE">Movie</option>
                            <option value="OVA">OVA</option>
                        </select>
                    </div>
                </div>
                <br/>

                <div className="row form-group">
                    <label htmlFor="numEpisodes" className="col-sm-2 col-form-label">Episodes Number</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => onChangeHandler(e)}
                            value={newAnime.numEpisodes}
                            type="text" name="numEpisodes" id="numEpisodes" className="form-control"
                            placeholder="Total number of episodes"
                            required />
                    </div>
                </div>
                <br/>

                <button type="submit" className="btn btn-primary col-sm-12">{isAddMode ? "Create" : "Save"}</button>
            </form>
        </div>
    )
}

export default EditAnime
