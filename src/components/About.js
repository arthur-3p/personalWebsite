import React, { useState } from 'react';
import Sketch from 'react-p5';

//sleep async func for fadein/ fadeout
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
};

const creative = ['r', 'e', 'a', 't', 'i', 'v'];
const technologist = ['e','c','h','n','o','l','o','g','i','s'];
const specialising = ['p', 'e', 'c', 'i', 'a', 'l', 'i', 's', 'i', 'n'];
const audio = ['u', 'd', 'i'];
const visual = ['i', 's', 'u', 'a'];
const objects = ['b', 'j', 'e', 'c', 't'];
const experiences = ['x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];
const complete = "A Creative Technologist specialising in Audio or Audio-Visual objects and experiences.";
var strokeWeight = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//slot style word scrambler
function scramble(letterArray, first, last) {
    var stringer = [...letterArray];
    const length = stringer.length;

    var output = '';

    for(let i = 0; i < length; i++) {
        var index = getRandomInt(stringer.length);
        var letter = stringer[index];
        output = output.concat(letter);
        stringer.splice(index, 1);
    };

    var string = first + output + last;

    return string;

}

function About() {

    const [text, setText] = useState("A Creative Technologist specialising in Audio or Audio-Visual objects and experiences.")
    const [buttonText, setButtonText] = useState("Scramble");

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
    }

    //p5 background. invisible until unscrambled.
    const draw = p5 => {
        p5.background(255, 255, 255);
        p5.rotateX(p5.frameCount * 0.1);
        p5.noFill();
        p5.stroke(255);
        p5.strokeWeight(strokeWeight)

        for(let i = 0; i <40; i += 1) {
            var r = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 0, 100);
            var g = p5.map(i, 0, 50, 0, 200);
            var b = p5.map(p5.cos(p5.frameCoount), -1, 1, 250, 60);

            p5.stroke(r, g, b);

            p5.rotate(p5.frameCount / 50);

            p5.beginShape();
            for (let j = 0; j < 360; j += 25) {
                var rad = i * 10;
                var x = rad * p5.cos(j);
                var y = rad * p5.sin(j);
                var z = p5.sin(p5.frameCount *2 +i *5) *100;

                
                p5.vertex(x, y, z);
            }
            p5.endShape(p5.CLOSE);
        }
    }

    const windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
    
    async function spin() {
        console.log(strokeWeight);
        for(let i =0; i<15; i++){
            var scrambled = 'A';
            scrambled = scrambled.concat(' ', scramble(creative, 'C', 'e'));
            scrambled = scrambled.concat(' ', scramble(technologist, 'T', 't'));
            scrambled = scrambled.concat(' ', scramble(specialising, 's', 'g'), ' ', 'in');
            scrambled = scrambled.concat(' ', scramble(audio, 'A', 'o'), ' ', 'or');
            scrambled = scrambled.concat(' ', scramble(audio, 'A', 'o'), '-');
            scrambled = scrambled.concat(scramble(visual, 'V', 'l'));
            scrambled = scrambled.concat(' ', scramble(objects, 'o', 's'), ' and');
            scrambled = scrambled.concat(' ', scramble(experiences, 'e', 's'), '.');
            setText(scrambled);
            setButtonText("Unscramble?")
            await sleep(40);
        };
        //wrng for weighting, otherwise spin chances are too small to ever land a win.
        if(Math.floor(Math.random()*3) === 0 ){
             setText(complete);
             setButtonText("Scramble")
             strokeWeight = 1;
        };
    };

    return(
        <div className='aboutContainer'>
            <div className='p5sketch'>
                <Sketch setup={setup} draw={draw} windowResized={windowResized}/>
            </div>
            <div>
                <p1>{text}</p1>
            </div>
            <div>
            <button onClick={() => spin()}>{buttonText}</button>
            </div>
            <br />
            <div className='aboutText'>
                <p>
                Hello, I’m Arthur. 
                <br />
                <br />
                I create objects and experiences using technology, ranging from AR apps to multi-channel audio installations, using languages including JavaScript, C++, SuperCollider, Python and frameworks including React, JUCE, node.js and ANTLR.
                <br />
                <br />
                Have a look at my work, and feel free to contact me with questions or opportunities.
                </p>
                <br/>
            </div>
            <div className='links'>
                <a href='mailto: arthurwilson789@gmail.com'><img src='/email.png' className='emailImage' alt="email"/></a>
                <a href='https://www.instagram.com/thonhallion/'><img src='/instagram.png' className='emailImage' alt="instagram"/></a>
                <a href='https://www.linkedin.com/in/arthur-wilson-678bba219/'><img src='/linkedin-logo.png' className='emailImage' alt="linkedIn"/></a>
                <a href='https://bitbucket.org/arthurwilson789/'><img src='/bitbucket-logo.png' className='emailImage' alt="bitBucket"/></a>
            </div>
        </div>
    )
};

export default About;