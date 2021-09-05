//Home Page, from here every other component and sub-component is conditionally rendered.

import React, { useState } from "react";
import Work from "./Work.js";
import CV from "./CV.js";
import About from "./About.js";

const mountedStyle = {
    animation: "inAnimation 250ms ease-in"
};

const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
};

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  };

function Home() {

   const [state, setState] = useState(<About />);
   const [showDiv, setDiv] = useState(true);
   const [current, setCurrent] = useState(<About />);

   //handleclick on top menu. fade in fade out.
   async function handleClick(component){
       if(component.type !== current.type){
        setDiv(false);
        await sleep(250);
        setState(component);
        setDiv(true);
        setCurrent(component);
       } else return;
   };

    return(
        <div className='homeContainer'>
            <div className='header'>
                <div className='centre'>
                    <h1>Arthur Wilson</h1>
                    <hr/>
                    <button onClick={() => handleClick(<About />)}>About</button>
                    <button onClick={() => handleClick(<Work />)}>Work</button>
                    <button onClick={() => handleClick(<CV />)}>CV</button>
                </div>
            </div>
            <br/>
            {/* return the state component in this div. */}
            <div className='homeSwitcher' style={showDiv ? mountedStyle : unmountedStyle}>
                {state}
            </div>
        </div>
    )
}

export default Home;