import React from "react";
import classes from "./topbar.module.css"

const Topbar = () =>{
    return(
        <header>
            <nav className = {classes.Topbar}>
                <img src="https://i.dlpng.com/static/png/6739216_preview.png" alt="Amazon Logo"/>
            </nav> 
        </header>
    );
}

export default Topbar;
