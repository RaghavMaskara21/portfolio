import React from 'react'
import './about.css'
import mypic from '../../images/mypic.jpg'
function About() {
  return (
    <div className='container about_section' id="About">
        <h2 class="abt_heading"><span>ABOUT</span></h2>
        <div className='container d-flex'>
            <div className='row'>            
            <div className='col-lg-4 divpic' >
                <img src={mypic} className="mypic" alt='raghav_maskara' ></img>
            </div>
            <div className='col-lg-8'>
                <p>
                Hello there, my name is Raghav Maskara and i love doing stuff for internet espacially open-source projects. My love for the development started when i was 14: i was playing a supercell game called Hayday and i wanted to automate repetitive things so i built a bot for the game (it's not fair i know 🙁). Now, i mainly develop MERN stack apps, i'm open to new opportunities.
                </p>
                <div className='abtskills'>
                <div className='sk1'>React JS</div>
                <div className='sk2'>Node JS</div>
                <div className='sk3'>Express JS</div>
                <div className='sk4'>MongoDB</div>
                <div className='sk5'>HTML/CSS</div>
                </div>
            </div>    
            </div>
        
        </div>
    </div>
  )
}

export default About