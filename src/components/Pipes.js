import React from 'react'

function Pipes() {
    return(
        <div className='pipesContainer'>
            <div style={{display: 'flex', flexWrap:'wrap'}}>
                <div style={{maxWidth: '600px',textAlign:'justify'}}><p><i>Conversations Through Copper Pipes</i> is a large audio sculpture consisting of 12 pieces of copper conduit which have been bent by hand to twist around each other. Through each pipe plays a separate sound work, each sound work formed of clips of audio from Zoom calls scraped from the internet. Each pipe represents a particular month between March 2020 and February 2021, with the composition played through each pipe only using audio from calls made during that month. These clips capture moments of attempted normality from those in conversation; a comment about livelihood during lockdown, or the weather, or the new mask requirements, or a eulogy at a funeral, or a baby’s gender reveal, or a wedding, or a music lesson, or a home pub quiz, or a work mates new girlfriend, or a developing drug habit, or a joke, or a tear, or an eating habit, or an acting class, or an English lesson for children, or a religious meeting, or a birthday. Through the act of twisting and contorting to listen in, this listener becomes a participant. And whilst voyeuristically listening in to somebody else’s conversation, never intended to be heard by their ears, they simultaneously see a form of their reflection in the polished copper, inviting them to wonder about their own experience."
            <br/>
            <br />
            Thousands of clips scraped from Vimeo using Python, organised using PHP and JS, granualr synth engine built with SuperCollider which runs off RaspberryPi.
            <br />
            </p>
            </div>
            </div>
            <div>
                <img className='projectImage' src='./pipes/menier.jpg' alt="project thumbnail"/>
                <img className='projectImage' src='./pipes/vertSide.jpg' alt="project thumbnail"/>
                <img className='projectImage' src='./pipes/frontPipes.jpg' alt="project thumbnail"/>
            </div>
            <div className='video' style={{maxWidth:'800px'}}>
                <iframe src="https://player.vimeo.com/video/562320598?h=1a8b57fc07" title="pipes"></iframe>
            </div>
        </div>
    );
}

export default Pipes;