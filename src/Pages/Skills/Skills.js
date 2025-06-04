import React from 'react'
import './Skills.css'
import { FaCode, FaDatabase, FaTools, FaServer, FaCloud, FaMobile } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa';

function Skills() {
  return (
    <div className='experience_section' id="Skills">
      <h2 className='exp_heading'><span>SKILLS</span></h2>
      
      <div className='container'>
        <div className='experience-card'>
          <div className='experience-header'>
            <h3 className='position'>Programming Languages</h3>
            <div className='company-info'>
              <FaCode className='righticon' />
              <div className='meta-info'>
                <span>Proficient in multiple languages</span>
              </div>
            </div>
          </div>
          <div className='experience-content'>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>C++</strong> - Advanced proficiency in object-oriented programming and data structures</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Golang</strong> - Extensive experience in building high-performance backend services</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Python</strong> - Strong background in scripting and automation</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>JavaScript/TypeScript</strong> - Full-stack development with modern frameworks</p>
            </div>
          </div>
        </div>

        <div className='experience-card'>
          <div className='experience-header'>
            <h3 className='position'>Backend Technologies</h3>
            <div className='company-info'>
              <FaServer className='righticon' />
              <div className='meta-info'>
                <span>Server-side development expertise</span>
              </div>
            </div>
          </div>
          <div className='experience-content'>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Node.js</strong> - Building scalable REST APIs and microservices</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>NestJS</strong> - Enterprise-grade backend applications</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Express.js</strong> - Lightweight and flexible web applications</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>RESTful APIs</strong> - Designing and implementing robust APIs</p>
            </div>
          </div>
        </div>

        <div className='experience-card'>
          <div className='experience-header'>
            <h3 className='position'>Databases & Caching</h3>
            <div className='company-info'>
              <FaDatabase className='righticon' />
              <div className='meta-info'>
                <span>Data management and optimization</span>
              </div>
            </div>
          </div>
          <div className='experience-content'>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>MongoDB</strong> - NoSQL database design and optimization</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>SQL</strong> - Relational database management and query optimization</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Redis</strong> - In-memory data structure store and caching</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Firestore</strong> - Cloud-based NoSQL database</p>
            </div>
          </div>
        </div>

        <div className='experience-card'>
          <div className='experience-header'>
            <h3 className='position'>Cloud & DevOps</h3>
            <div className='company-info'>
              <FaCloud className='righticon' />
              <div className='meta-info'>
                <span>Cloud infrastructure and deployment</span>
              </div>
            </div>
          </div>
          <div className='experience-content'>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>AWS</strong> - Cloud services and infrastructure management</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Docker</strong> - Containerization and microservices</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>CI/CD</strong> - Continuous Integration and Deployment</p>
            </div>
            <div className='achievement'>
              <FaAngleRight className='righticon' />
              <p><strong>Git</strong> - Version control and collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
