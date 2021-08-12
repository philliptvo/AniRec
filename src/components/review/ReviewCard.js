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

<div className="container" >
   
    <div className="d-flex flex-row justify-content-between">
                <h1>Reviews</h1>
                <Link to="/reviews/create">
                    <i className="fas fa-plus fa-2x btn btn-primary"/>
                </Link>
            </div>
    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
              <li>Cowboy Bebop</li>
              <li>edgewalker002</li>
              <li>Rating: 10.0</li> 
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
            <li>Kamisama hajimemashita</li>
            <li>shadowfirefly</li>
            <li>Rating: 8.5</li> 
            </ul>
            <p className="card-text" style={{overflow:"auto",
    padding: "10px"}}>I have seen the 1st season and was not disappointed. This anime genre is Shojou,
             which <br></br>of course focuses on romance, female leads and smooth animation. This Anime is more of a light hearted humor and romantic drama series. Do watch the 1st season
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Naruto</li>
            <li>MrAnimeCrunch</li>
            <li>Rating: 6.0</li> 
            </ul>
            <p className="card-text">To be honest, Naruto is the most overhyped show in existence. Everyone goes on and on and on about how great it is; and my expectations for this show was equally high. However, I was really, really let down. Really. This wasn't the best show ever, as I had thought it would be. Don't get me wrong, the show is enjoyable, but it's definitely not among the best shows out there.
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li> Made in Abyss</li>
            <li>IceAndCream_1</li>
            <li>Rating: 5.0</li> 
            </ul>
            <p className="card-text"> "If you gaze long into an abyss, the abyss also gazes into you." - Some anime bad guy, probably.

Well, I've gazed into this abyss long enough. I might get more enjoyment or value from staring at a literal black pit than watching another episode of this plodding, interminable slog of a manga adaptation.
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Haikyuu!! Second Season</li>
            <li>MrAnimeCrunch</li>
            <li>Rating: 6.0</li> 
            </ul>
            <p className="card-text"> As you probably already know, competitive spirit, teamwork, communication, and perseverance are all common themes that unite the sports genre as a whole. Therefore, to truly differentiate one show from other similar shows, scriptwriters need to engage the audience in a remarkably new and refreshing way.
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Jujutsu Kaisen</li>
            <li>AlexanderMaya</li>
            <li>Rating: 9.0</li> 
            </ul>
            <p className="card-text">Jujutsu kaisen has become really popular since its inception. Whether you are shonen fan or not, you are most likely going to enjoy this show. It offers more than an ordinary shonen.
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Monster</li>
            <li>LegendAqua</li>
            <li>Rating:9.5</li> 
            </ul>
            <p className="card-text"> Monster is an anime that I used to scoff at every time I saw high ratings for it. I was never really into long plot driven anime and I couldn't understand how so many people loved it, but seeing the ratings, I couldn't help but be interested.
            </p>
        </div>
    </div>

    <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
            <ul className="card-text"style={right}>
            <li>Fullmetal Alchemist: Brotherhood</li>
            <li>dragonwarrior123</li>
            <li>Rating:6.5</li> 
            </ul>
            <p className="card-text"> Fullmetal Alchemist: Brotherhood gets an immense amount of praise in the
             MAL community, is the #1 ranked show and is constantly referred to as a masterpiece and the greatest
              show ever created.However, I personally feel as though calling FMA:B a masterpiece and the champion 
               of all shows is a bit of a stretch.
            </p>
        </div>
    </div>




</div>

    )
}

export default ReviewCard;


