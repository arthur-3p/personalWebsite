import React from 'react'

function Shellophone() {
    return(
        <div className='pipesContainer'>
        <div style={{display: 'flex', flexWrap:'wrap'}}>
            <div style={{maxWidth:"500px"}}>
            <h2>A bespoke, interactive listening device, consisting of a cast, hollow shell, a speaker and a 1970’s GPO telephone rotary dial.</h2>
            </div>
            <div style={{maxWidth: '600px',textAlign:'justify'}}><p>
            The ‘Shelephone’ was created to allow listeners to consider their self, by experiencing recordings of the sea as well as a stream of externalised, internal thoughts and questions, vocalised by a representation of their ‘self’ - a reflexive of one’s own consciousness.
        <br/>
        Inspired by the J.G Ballard tale <i>Prisoner of the Coral Deep</i> and concealed hearing devices of the 19th Century, 'aurolese phones' and 'acoustic headbands'.
        <br/>
        A collaboration between Susan Atwill and Arthur Wilson.
        <br/>
        Developed for and showcased at IRCAM Centre Pompidou, Paris March 2020 
        </p>
        </div>
        </div>
        <div>
            <img className='projectImage' src='./Shellophone1.jpg' alt="project thumbnail"/>
            <img className='projectImage' src='./ShellTest.jpg' alt="project thumbnail"/>
            <img className='projectImage' src='./shello3.jpg' alt="project thumbnail"/>
        </div>
    </div>
    );
}

export default Shellophone;