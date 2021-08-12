import React from 'react'
import {Link} from "react-router-dom";

//handles what each card will look like


// const ReviewCard = ({userReview, deleteHandler}) => {
    const ReviewCard = () => {
  //const {reviewid, score, review, username, title} = userReview

  const styleObject = {
   "font-size" : "18px",
    "height" : "auto",
    "width" : "80%",
    "border" : "3px solid rgba(0, 0, 0, 0.15)",
    "border-radius" : "10px",
    "margin" : "auto",
    "overflow" : "auto",
    "padding" : "10px"
    }

    const right = {
    "float":"right", 
    "list-style-type" : "none",
    "border-left" : "3px solid rgba(0, 0, 0, 0.15) "
    }

    return (

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
              {/* <li>{title}</li>
              <li>{username}</li>
              <li>Rating:{score}</li> */}
              <li>title</li>
              <li>username</li>
              <li>Rating:score</li> 
            </ul>
            <p className="card-text">this is where the review will go </p>
            {/* <p className="card-text">{review} </p> */}
            {/* <i onClick={() => {
                deleteHandler(userReview)
            }} className="fas fa-trash-alt btn btn-danger"/> */}
        </div>
    </div>


    )
}

export default ReviewCard;


