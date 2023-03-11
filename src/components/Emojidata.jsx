import React from "react"


function Emoji(props){
    return(
            <div className="term">
                <dt>
                    <span className="emoji">{props.emoji}</span>
                    <span className="caption">{props.caption}</span>               
                </dt>
                <dd className="description">
                    {props.description}
                </dd>

            </div>
    )
}

export default Emoji;