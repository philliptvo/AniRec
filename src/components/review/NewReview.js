import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import reviewService from '../../services/review.service'

const NewReview = () => {
    //const {animeId} = useParams()
  

    // how to get anime title form animeId, also reviews aer probably better in a list format?
   // const history = useHistory()
    const [newReview, setReview] = useState({
        anime:'',
        userName:'',
        score: ''
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setReview({
            ...newReview,
            [name] : value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newData = JSON.parse(JSON.stringify(newReview))
        if (newData.score !== "") {
            newData["score"] = ['0.0']
        }
        if (newData.userName !== "") {
            newData["userNAme"] = ["anonymous"]
        }

      
    }

    // // need to add it to review list
    // const doCreate = (review) => {
    //     reviewService.createReview(review)
    //         .then((newReview) => {
    //             push({
    //                 pathname: `/reviews`
    //             })
    //         }).catch(err => {
    //             // TODO: Show error to user
    //             console.log(err)
    //         })
    // }

    // const doUpdate = (anime) => {
    //     animeService.updateAnime(animeId, anime)
    //         .then((_) => {
    //             history.goBack()
    //         }).catch(err => {
    //             // TODO: Show error to user
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     if (!isAddMode) {
    //         reviewService.findAnimeById(animeId).then(anime => {
    //             const {airedFrom, airedTo} = anime
    //             if (airedFrom) {
    //                 anime['airedFrom'] = `${String(airedFrom[0]).padStart(2, '0')}-${String(airedFrom[1]).padStart(2, '0')}`
    //             }
    //             if (airedTo) {
    //                 anime['airedTo'] = `${String(airedTo[0]).padStart(2, '0')}-${String(airedTo[1]).padStart(2, '0')}`
    //             }

    //             setAnime(anime)
    //         })
    //     } else {
    //         setAnime({...newAnime, animeType: 'TV'})
    //     }
    // }, [])

    return(
        <div className="container">
            <h1>{'Create New Review' }</h1>
            <br/>

            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="row form-group">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => onChangeHandler(e)}
                            value={newReview.anime}
                            type="text" name="title" id="title" className="form-control"
                            placeholder="Anime title"
                            required />
                    </div>
                </div>
                <br/>

{/* current user or anonymous */}
                <div className="row form-group">
                    <label className="col-sm-2 col-form-label">Score</label>
                    <div className="col-sm-10">
                        <textarea onChange={(e) => onChangeHandler(e)}
                               value={newReview.score}
                                name="score" id="score" className="form-control"
                               />
                    </div>
                </div>
                <br/>

</form> 
{/* trying to make a toggle button, but need to get current users username */}
                <div className="row form-group">
                <div class="switch">
                    <label>
                        UserName
                        <input type="checkbox" checked></input>
                        <span class="lever"></span> Anonymous
                    </label>
                    
                    <input onClick={(e) => {onChangeHandler(e)}}
                            value={newReview.userName}
                            className="form-control"
                            type="decimal" id="score" name="score"/>
                </div>
                <br/>

                
                <button type="submit" className="btn btn-primary col-sm-12">{ "Create" }</button>
         
        </div>
        </div>
    )
}

export default NewReview
