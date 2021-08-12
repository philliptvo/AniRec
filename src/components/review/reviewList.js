import React, { useEffect, useState } from 'react';
import ReviewCard from "./ReviewCard";

import reviewService from '../../services/review.service'
import {Link} from "react-router-dom";

const ReviewList = () => {
     const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        reviewService.findAllReviews()
            .then(reviewList => {
                setReviewList(reviewList)
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
                <h1>Reviews</h1>
                <Link to="/reviews/create">
                    <i className="fas fa-plus fa-2x btn btn-primary"/>
                </Link>
            </div>

            <div className="row">
                
               {
                    
                    reviewList.map(a => ( 
                         <ReviewCard
                              key={a.reviewId}
                              anime={a}
                             //deleteHandler={deleteAnimeHandler}
                        />
                      
                        )    )
                }
                
            </div>
        </div>
    )
   
}

export default ReviewList
