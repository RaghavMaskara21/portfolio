import React from "react";
import "./Projects.css";
import { Card, Button } from "react-bootstrap";
import HA from '../../images/HA.png'
import HD from '../../images/hd.png'
import BB from '../../images/bbad.png'
function Projects() {
  return (
    <div className="container projects_section" id="Projects" >
      <h2 class="projects_heading">
        <span>PROJECTS</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 project1">
            <Card style={{ width: "100%" }} >
              <Card.Img variant="top" src={HA} className="p1img" />
              <Card.Body>
                <Card.Title>Heavenly Attractions</Card.Title>
                <Card.Text>
                  Web Application to display popular tourist attractions all over the world.
                </Card.Text>
                <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/Heavenly-Attractions" target="_blank" className="mx-2 ">Github</Button>
                <Button variant="outline-danger" href="https://heavenlyattractions.herokuapp.com" target="_blank" className="mx-2 ">Live Demo</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 project2">
            <Card style={{ width: "100%" }} className="project2">
              <Card.Img variant="top" src={HD} />
              <Card.Body>
                <Card.Title>Hay Day</Card.Title>
                <Card.Text>
                  Trading Price Calculator for Hay Day players who trade food items and tools.
                </Card.Text>
                <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/HayDayPriceCalculator.github.io" target="_blank" className="mx-2">Github</Button>
                <Button variant="outline-danger" href="https://raghavmaskara21.github.io/HayDayPriceCalculator.github.io/" target="_blank" className="mx-2">Live Demo</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 project3">
            <Card style={{ width: "100%" }} >
              <Card.Img variant="top" src={BB} />
              <Card.Body>
                <Card.Title>Breaking Bad</Card.Title>
                <Card.Text>
                  Display the Cast and show details of popular TV Show, Breaking Bad.
                </Card.Text>
                <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/breaking-bad" target="_blank" className="mx-2">Github</Button>
                <Button variant="outline-danger" href="https://raghavmaskara21.github.io/breaking-bad/" target="_blank" className="mx-2">Live Demo</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
