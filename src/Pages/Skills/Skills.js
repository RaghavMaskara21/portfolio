import React from 'react'
import './Skills.css'
import { FaCode, FaDatabase, FaTools, FaServer, FaCloud, FaMobile } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa';

function Skills() {
  return (
    <div className='container skills-section' id="Skills">
      <h2 className='skills-heading'><span>SKILLS</span></h2>
      
      <div className='container'>
        <div className='skills-grid'>
          <div className='skill-column'>
            <div className='skill-header'>
              <FaCode className='skill-icon' />
              <h3>Languages</h3>
            </div>
            <div className='skill-list'>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>C++</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Golang</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Python</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>JavaScript</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className='skill-column'>
            <div className='skill-header'>
              <FaServer className='skill-icon' />
              <h3>Backend</h3>
            </div>
            <div className='skill-list'>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Node.js</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>NestJS</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Express.js</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>RESTful APIs</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Microservices</span>
              </div>
            </div>
          </div>

          <div className='skill-column'>
            <div className='skill-header'>
              <FaDatabase className='skill-icon' />
              <h3>Databases</h3>
            </div>
            <div className='skill-list'>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>MongoDB</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>SQL</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Redis</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Firestore</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>RabbitMQ</span>
              </div>
            </div>
          </div>

          <div className='skill-column'>
            <div className='skill-header'>
              <FaCloud className='skill-icon' />
              <h3>DevOps</h3>
            </div>
            <div className='skill-list'>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>AWS</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Docker</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>CI/CD</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Git</span>
              </div>
              <div className='skill-item'>
                <FaAngleRight className='righticon' />
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
