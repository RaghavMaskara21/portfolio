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
                <h1 id="txt1">Software Development Engineer</h1>
                <p id='txt2'>
                Hello! I'm Raghav Maskara, a Software Development Engineer at Stanverse Technologies in Bangalore. With a BTech in Electronics and Communication Engineering from IIIT Surat (CGPA: 9.17), I specialize in backend development and have made significant contributions to large-scale applications.
                </p>
                <p id='txt3'>
                At STAN, I've led the development of key features like Communities (30M+ users), Payment Gateway integration, and innovative gaming features. My technical expertise spans across Golang, Node.js, and various modern technologies, with a proven track record of delivering impactful solutions.
                </p>
            </div>

            <div className='container fs-5'>
                <div className='row'>
                <div className='col-lg-6'>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Education:</strong> BTech, IIIT Surat</p>
                  </div>
                  <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Location:</strong> Bangalore, India</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Email:</strong> raghavmaskara@gmail.com</p>
                </div>
                <div>
                    <p> <span className='righticon'> <FaAngleRight/></span> <strong> Phone:</strong> +91 8529812699</p>
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