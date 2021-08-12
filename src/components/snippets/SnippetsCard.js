import React from 'react'
import {Link} from "react-router-dom";


//handles what each card will look like

  const SnippetsCard = ({userSnippet}) => {
  const {snipId, snippet, anime} = userSnippet

  const styleObject = {
   "font-size" : "18px",
    "height" : "auto",
    "width" : "80%",
    "border" : "3px solid rgba(0, 0, 0, 0.15)",
    "border-radius" : "10px",
    "margin" : "auto",
    "overflow" : "auto",
    "position": "relative",
    "padding" : "10px"
    }


    return (

        <div className="card mt-5" style={{border:"none"}}>
        <div className="card-body"style={styleObject}>
        {/* <div>
                        <Link to={`/snippets/${snipId}`}>
                            <h5 className="card-title">{anime}</h5>
                        </Link>
                    </div> */}
            <div className="card-text" style={{padding:"30px", textAlign:"center"}}>{snippet}</div>
            <div className="card-footer" style={{borderTop: "3px solid rgba(0, 0, 0, 0.15)", }}>
       
            <p style={{float:"left", padding:"10px"}}>{snipId}</p> 
              {/* <p style={{float:"right",padding:"10px"}}>{upvotes}</p> */}
              
            </div>
        </div>
    </div>


    )
}

export default SnippetsCard;



