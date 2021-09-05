import React from 'react'

function Autopia() {
    return(
        <div className='pipesContainer'>
            <div style={{display: 'flex', flexWrap:'wrap'}}>
                <div style={{maxWidth:"500px"}}>
                <h2>Template Based AI System for Computational Collaboration.</h2>
                </div>
                <br/>
                <div style={{maxWidth: '600px',textAlign:'justify'}}><p><i>Autopia</i> is an AI system designed to participate in collaborative live coding music performances using the Utopia software tool for SuperCollider. This form of human-AI collaboration allows us to explore the implications of mixed-initiative computational creativity from the perspective of live coding. The results of this are often emergent, chaotic, and surprising to performers and audience alike.
                <br />
                <br />
                Autopia is an ongoing research with project with N. Lorway and E. Powley, and has had findings published a number of times.</p>
                </div>
            </div>
            <div>
                <img className='projectImage' style={{height:"500px"}} src='./Autopia.jpg' alt="project thumbnail"/>
                <img className='projectImage' style={{height:"500px"}} src='./autopiaFeedback.jpg' alt="project thumbnail"/>
            </div>
            <div className='video' style={{maxWidth:'1100px'}}>
                <iframe src="https://player.vimeo.com/video/349044280?h=766117cc19" title="autopia"></iframe>
            </div>
        </div>
    );
}

export default Autopia;