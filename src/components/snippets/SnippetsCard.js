import React from 'react'
import {Link} from "react-router-dom";


//handles what each card will look like

  const SnippetsCard = ({userSnippet}) => {
   const {snipId, snippet, anime:{animeId}, anime:{title} ,upvotes} = userSnippet

  
   console.log('anime :) : ', JSON.parse(JSON.stringify(userSnippet)))


  const styleObject = {
   "fontSize" : "18px",
    "height" : "auto",
    "width" : "80%",
    "border" : "3px solid rgba(0, 0, 0, 0.15)",
    "borderRadius" : "10px",
    "margin" : "auto",
    "overflow" : "auto",
    "position": "relative",
    "padding" : "10px"
    }


    return (

        <div className="card mt-5" style={{border:"none"}}>
           
        <div className="card-body"style={styleObject}>

            <div className="card-text"  style={{padding:"30px", textAlign:"center"}}>{snippet}</div>
            <div className="card-footer" style={{borderTop: "3px solid rgba(0, 0, 0, 0.15)", }}>
       
              <p style={{float:"left", padding:"10px"}}>  <Link to={`/anime/${animeId}`}>
                        {title}</Link></p> 
              <p style={{float:"right",padding:"10px"}}>Upvotes: { Math.floor(Math.random() * 10000) + 1}</p>
              
            </div>
        </div>
    </div>


    )
}

export default SnippetsCard;



