import React from "react";
import "../LandingCss/Nav.css"

const NavButton=(props)=>{

    return (
        <div className="navbtn">
           {props.name}
        </div>
    )
};

export default NavButton;