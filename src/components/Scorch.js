import React from 'react'

function Scorch() {
        return(
            <div className='pipesContainer'>
                <div style={{display: 'flex', flexWrap:'wrap'}}>
                    <div style={{maxWidth: "500px"}}>
                    <h2>Experimental Domain Specific programming language and Environment.</h2></div>
                    <div style={{maxWidth: '600px',textAlign:'justify'}}><p><i>Scorch is the mark left after the flames, what is left when the object is burnt and removed.</i>
                    <br />
                    <br />
                    Scorch is a new computer language and programming environment focused on making sound. Using an experimental syntax and language structure, Scorch sits as an object oriented programming language within existing Digital Audio Workstations by integrating as a supported midi plug-in, in it’s custom  IDE. Scorch spits out midi values, which the user creates through simple, clear and obvious code. Scorch challenges current approaches to creative coding, which uses existing frameworks and languages, which inherently adopts their complexities. Scorch circumvents this by focusing on lowering the barrier, and opening creative coding to musicians and creatives.
                    <br />
                    <br />
                    Currently in development with N. Lorway and E. Powley, available late 2021.</p>
                    </div>
                </div>
                <div>
                    <img className='projectImage' style={{height: "600px"}} src='./Scorch.jpg' alt="project thumbnail"/>
                </div>
            </div>
        );
}

export default Scorch;