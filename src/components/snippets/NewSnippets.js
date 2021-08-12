import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import snippetsService from '../../services/snippets.service'
import userService from '../../services/user.service'

const NewSnippets = () => {
    //const {animeId} = useParams()

   const history = useHistory();

    // how to get anime title form animeId, also reviews aer probably better in a list format?
   // const history = useHistory()
    const [newSnippets, setSnippets] = useState({
        snippet:'',
        user: userService.getCurrentUser,
        anime:''
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setSnippets({
            ...newSnippets,
            [name] : value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newData = JSON.parse(JSON.stringify(newSnippets))
        if (newData.upvotes !== "") {
            newData["Upvotes"] = ['0.0']
        }
        if (newData.userName !== "") {
            newData["userName"] = ["anonymous"]
        }

            doCreate(newData)
      
    }

    const doCreate = (snippets) => {
        snippetsService.createSnippet(snippets)
            .then((newSnippet) => {
                history.push({
                    pathname: `/snippets/${newSnippet.snippetId}`
                })
            }).catch(err => {
                // TODO: Show error to user
                console.log(err)
            })
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




    return(
        <div className="container">
            <h1>{'Create A New Snippet' }</h1>
            <br/>

            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="row form-group">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Snippet</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => onChangeHandler(e)}
                            value={newSnippets.anime}
                            type="text" name="title" id="title" className="form-control"
                            placeholder="Anime title"
                            required />
                    </div>
                </div>
                <br/>

{/* current user or anonymous */}
                <div className="row form-group">
                    <label className="col-sm-2 col-form-label">Snippet</label>
                    <div className="col-sm-10">
                        <textarea onChange={(e) => onChangeHandler(e)}
                               value={newSnippets.snippet}
                               type="text" name="snippet" ng-model="snippet" id="snippet" className="form-control" maxLength="200"  placeholder="Write your snippet here" 
                                                              />
                            <div id="the-count" style={{float:"right", fontSize:" 0.875rem"}}>
                                
                                <span id="current">{newSnippets.snippet.length }</span>
                                <span id="maximum">/ 200</span>
                            </div>
                    </div>
                </div>
                <br/>

            </form> 
   {/* <button type="submit" className="btn btn-primary col-sm-12">{ "Create" }</button> */}
        <button class="done" className="btn btn-primary col-sm-12" onClick={() => { history.push("/snippets") }}>Create</button>
        </div>
    )
}

export default NewSnippets
