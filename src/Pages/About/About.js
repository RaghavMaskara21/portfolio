import React from 'react'
import './about.css'
import mypic from '../../images/mypic.jpg'
import { FaAngleRight } from 'react-icons/fa';
function About() {
  return (
    <div className='container about_section' id="About">
        <h2 class="abt_heading"><span>ABOUT</span></h2>
        <div className='container d-flex'>
            <div className='row'>            
            <div className='col-lg-4 divpic' >
                <img src={mypic} className="mypic" alt='raghav_maskara' ></img>
            </div>
            <div className='col-lg-8 fs-4'>
              <div>
                <h1 id="txt1">Software Developer</h1>
                {/* <p>I am a Software Developer based in India.</p> */}
                <p id='txt2'>
                Hello there, I'm Raghav Maskara, a Software Development Engineer with a BTech from the Indian Institute of Information Technology Surat, currently making strides at Stanverse Technologies in Bangalore. I specialize in backend development, leveraging skills in C++, Golang, Python, and JavaScript, alongside technologies like NodeJs, NestJs, and AWS. My projects, like the Hay Day Calculator, highlight my passion for creating user-centric solutions. With achievements in prestigious coding contests and a knack for innovation, I aim to explore, grow, and contribute to the tech world. Thanks for stopping by!
                </p>
                <p id='txt3'>
                I can't stop learning new things; the more, the better.
                </p>
                </div>


                {/* <div className='abtskills'>
                <div className='sk1'>React JS</div>
                <div className='sk2'>Node JS</div>
                <div className='sk3'>Express JS</div>
                <div className='sk4'>MongoDB</div>
                <div className='sk5'>HTML/CSS</div>
                </div> */}

                <div className='container fs-5'>
                <div className='row'>
                <div className='col-lg-6'>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Birthday:</strong> 24 January 2001</p>
                  </div>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Website:</strong> www.raghavmaskara.com </p>
                  </div>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> City:</strong> Bangalore, India</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Age:</strong> 23 </p>
                  </div>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Email:</strong> raghavmaskara@gmail.com</p>
                  </div>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Degree:</strong> ECE, B.Tech</p>
                  </div>  
                </div>
                </div>  
                </div>
            </div>    
            </div>
        
        </div>
    </div>
  )
}

export default About