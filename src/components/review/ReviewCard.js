import React from 'react'
import {Link} from "react-router-dom";

//handles what each card will look like


// const ReviewCard = ({userReview, deleteHandler}) => {
    const ReviewCard = () => {
//   const {reviewid, score, review, username, title} = userReview

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

    //     <div className="card mt-5" style={{border:"none"}}>
    //     <div className="card-body"style={styleObject}>
    //         <ul className="card-text"style={right}>
    //           {/* <li>{title}</li>
    //           <li>{username}</li>
    //           <li>Rating:{score}</li> */}
   
    //         {/* <p className="card-text">{review} </p> */}
    //         {/* <i onClick={() => {
    //             deleteHandler(userReview)
    //         }} className="fas fa-trash-alt btn btn-danger"/> */}
    //     </div>
    // </div>

<div>
    <h1> Reviews</h1>
    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
              <li>Cowboy Bebop</li>
              <li>edgewalker002</li>
              <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        So. Unbelievably. Amazing.<br></br> 
             The story and style is so different and unique from what you might usually think of when the 
             word anime comes to mind. The characters and this anime as a whole are so memorable that it’ll 
             leave you feeling nostalgic each time you think of it.
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Cowboy Bebop</li>
            <li>MrAnimeCrunch</li>
            <li>Rating:10.0</li> 
            </ul>
            <p className="card-text">        feeef
            </p>
        </div>
    </div>




</div>

    )
}

export default ReviewCard;


