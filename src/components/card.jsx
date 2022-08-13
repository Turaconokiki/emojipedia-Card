import React from "react"
import emojipedia from "../emojipedia"


function Card (emojipedia){
    return(
         <dl className="dictionary">
        <div className="term">
           <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia.emoji}
            </span>
            <span>{emojipedia.name}</span>
          </dt>
          <dd>
           {emojipedia.meaning}
          </dd> 
        </div> 
       
      </dl> 
    )
}
export default Card