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
          <div className="col-lg-4">
            <Card style={{ width: "25rem" }} className="project1">
              <Card.Img variant="top" src={HA} className="p1img" />
              <Card.Body>
                <Card.Title>Heavenly Attractions</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/Heavenly-Attractions" target="_blank" className="mx-2 ">Github</Button>
                <Button variant="outline-danger" href="https://heavenlyattractions.herokuapp.com" target="_blank" className="mx-2 ">Live Demo</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={HD} />
              <Card.Body>
                <Card.Title>Hay Day</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-danger" href="https://github.com/RaghavMaskara21/HayDayPriceCalculator.github.io" target="_blank" className="mx-2">Github</Button>
                <Button variant="outline-danger" href="https://raghavmaskara21.github.io/HayDayPriceCalculator.github.io/" target="_blank" className="mx-2">Live Demo</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={BB} />
              <Card.Body>
                <Card.Title>Breaking Bad</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
