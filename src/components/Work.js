// a short list of buttons, which expand/contract the project explanation div through the css properties.
import React, { useState} from 'react';
import Pipes from './Pipes.js';
import Shellophone from './Shellophone.js';
import Music from './Music.js';
import Scorch from './Scorch.js';
import Autopia from './Autopia.js';
import PeaceWallStories from './PeaceWallStories.js';

const closeStyle = {
  display: "none"
};

const openStyle = {
    display: "block",
    width: "100%"
};


function Work() {
    
    const [content, setContent] = useState("");

    return(
        <div>
            <h1>Work</h1>
            <div className="table2">
                <div>
                    <button onClick={() => {content === "pipes" ? setContent("") : setContent("pipes")}}><h2>Conversations Through Copper Pipes</h2></button>
                    <div style={content === "pipes" ? openStyle : closeStyle}><Pipes /></div>
                </div>
                <div className="table">
                    <button  onClick={() => {content === "peacewallstories" ? setContent("") : setContent("peacewallstories")}}><h2>PeaceWall Stories</h2></button>
                    <div  style={content === "peacewallstories" ? openStyle : closeStyle}><PeaceWallStories /></div>
                </div>
                <div className="table">
                    <button onClick={() => {content === "scorch" ? setContent("") : setContent("scorch")}}><h2>Scorch</h2></button>
                    <div style={content === "scorch" ? openStyle : closeStyle}><Scorch /></div>
                </div>
                <div className="table">
                    <button onClick={() => {content === "autopia" ? setContent("") : setContent("autopia")}}><h2>Autopia</h2></button>
                    <div style={content === "autopia" ? openStyle : closeStyle}><Autopia /></div>
                </div>
                <div className="table">
                    <button  onClick={() => {content === "shellophone" ? setContent("") : setContent("shellophone")}}><h2>The Conch-iousness Shellophone</h2></button>
                    <div  style={content === "shellophone" ? openStyle : closeStyle}><Shellophone /></div>
                </div>
                <div className="table">
                    <button  onClick={() => {content === "music" ? setContent("") : setContent("music")}}><h2>Music</h2></button>
                    <div  style={content === "music" ? openStyle : closeStyle}><Music /></div>
                </div>
            </div>
        </div>
    );
}

export default Work;