import React from 'react'

function PeaceWallStories() {
    return(
        <div className='pipesContainer'>
            <div style={{display: 'flex', flexWrap:'wrap'}}>
                <div style={{maxWidth:"500px"}}>
                <h2>Interactive Sculpture Installed in Ireland, with accompanying AR app and website.</h2>
                </div>


                <div style={{maxWidth: '600px',textAlign:'justify'}}><p>
                Portraits of Loyalist and Nationalist people of all ages and colours, from all parts of the community presented side by side with no way of the viewer determining who is who, where they come from or what they do. With the assistance of virtual reality, the stories behind the faces come to life when viewed through a tablet.
                <br/>
                <br/>
                A survey in 2017 by the Belfast Interface Project identified 116 instances of “Security architecture and the defensive use of space” in Northern Ireland, 97 of which were in Belfast. These spaces or interface barriers are known locally as Peace Walls.  They are mostly made of concrete or wire fencing, but may be a gate or road closure barrier or a defensive structure. Over the past 50 years they have become part of everyday life for many people. In March 2021 a group of people who live, work or grew up near the Peace Walls were photographed and videoed telling stories of their experiences. The stories are extremely personal and varied, often even seeming contradictory as are the peoples life experiences and memories of the same streets often at the same time. The faces that make up this wall come to life on your mobile phone as they share their stories through the videos or in the AR app. Every story is personal, every story is different and together the stories make another kind of wall.
            <br/>
            <br/>
            Collaboration with Belfast based Artist Stephen Wilson for SkyTV.
            <br/>
            <br/>
            <a href="http://www.peacewallstories.com/">PeaceWallStories.com</a><br/>
            <a href="https://www.stephenwilsonphotography.com/">Stephen Wilson</a><br/>
            <a href="https://apps.apple.com/mn/app/peace-wall-stories/id1557786294">iOS App</a><br/>

            </p>
            </div>
            </div>
            <div>
                <img style={{width:"95%", height:"auto", maxWidth:"418px"}} className='projectImage' src='./PeaceWallStories1.jpg' alt="project thumbnail"/>
                <img style={{width:"95%", height:"auto", maxWidth:"418px"}} className='projectImage' src='./Pws2.jpg' alt="project thumbnail"/>
            </div>
            <div className='videoPws' style={{maxWidth:'1100px'}}>
            <iframe width="560" height="200" src="https://www.youtube.com/embed/WopzkeDL_xE" title="peacewallstories"></iframe>
            </div>
        </div>
    );
}

export default PeaceWallStories;