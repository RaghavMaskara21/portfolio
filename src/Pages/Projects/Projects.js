import React from "react";
import "./Projects.css";
import { Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaUsers, FaChartLine, FaLanguage } from "react-icons/fa";
import HD from '../../images/hd.png';
import AV from '../../images/audioverse.png';

function Projects() {
  return (
    <div className="container projects_section" id="Projects">
      <h2 className="projects_heading">
        <span>PROJECTS</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={HD} className="project-image" />
              <Card.Body>
                <Card.Title>Hay Day Calculator</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  ReactJS, Material UI, Firebase, Google Analytics
                </Card.Subtitle>
                <Card.Text>
                  <ul className="project-features">
                    <li>Launched a responsive website that assists players in the Hay Day Game with calculating the prices of food items and trading tools.</li>
                    <li>Deployed on GitHub Pages, garnering <strong>161,300</strong> page views and <strong>31,100</strong> visitors worldwide.</li>
                    <li>Achieved <strong>110k</strong> Google search impressions with an average CTR of <strong>9.1%</strong>.</li>
                    <li>Upgraded to ReactJS and MaterialUI with Firebase to enhance user experience and performance.</li>
                  </ul>
                </Card.Text>
                <div className="project-stats">
                  <div className="stat">
                    <FaUsers className="stat-icon" />
                    <span>31.1K Visitors</span>
                  </div>
                  <div className="stat">
                    <FaChartLine className="stat-icon" />
                    <span>9.1% CTR</span>
                  </div>
                </div>
                <div className="project-links">
                  <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/HayDayPriceCalculator.github.io" target="_blank">
                    <FaGithub className="me-2" /> Code
                  </Button>
                  <Button variant="outline-danger" href="https://haydaycalculator.shootingspeed.com/" target="_blank">
                    <FaExternalLinkAlt className="me-2" /> Live Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-6 mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={AV} className="project-image" />
              <Card.Body>
                <Card.Title>AudioVerse AI</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  Next.js, TypeScript, Sarvam AI API, Tailwind CSS
                </Card.Subtitle>
                <Card.Text>
                  <ul className="project-features">
                    <li>Built a multilingual audio translation platform with speech-to-text, translation, and text-to-speech features.</li>
                    <li>Implemented audio processing pipeline using Sarvam API and MediaRecorder with customizable voice parameters.</li>
                    <li>Created an intuitive user interface for seamless audio translation across multiple languages.</li>
                  </ul>
                </Card.Text>
                <div className="project-stats">
                  <div className="stat">
                    <FaLanguage className="stat-icon" />
                    <span>Multilingual</span>
                  </div>
                </div>
                <div className="project-links">
                  <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/audioverse" target="_blank">
                    <FaGithub className="me-2" /> Code
                  </Button>
                  <Button variant="outline-danger" href="https://audioverse.shootingspeed.com/" target="_blank">
                    <FaExternalLinkAlt className="me-2" /> Live Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
