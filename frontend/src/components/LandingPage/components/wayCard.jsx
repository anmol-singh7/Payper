import React from "react";
import "../LandingCss/waypaper.css"
const WayCard=(props)=>{

    return (
        <div className="wayCard">
            <div  style={{ marginRight:'2vw'}}>{props.info.logo}</div>
            <div>
              <div className="cardHeading">{props.info.heading}</div>
              <div className="cardText">{props.info.text}</div>
            </div>
        </div>
    )
}

export default WayCard;