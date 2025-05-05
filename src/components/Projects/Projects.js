import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolio from "../../Assets/Projects/portfolio.png";
import HCG from "../../Assets/Projects/HCG.jpg";
import scm from "../../Assets/Projects/scm.jpg";
import transleto from "../../Assets/Projects/transleto.jpg";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import wanderlust from "../../Assets/Projects/wanderlust.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
     // imgPath={HCG}
      isBlog={false}
      title="Education VR Game"
      description="Developing and customizing an Educational VR game, enabling students to interact with virtual objects to learn, with interactive UI, engaging graphics, and dynamic designs to enhance the educational experience. Implemented Photon Fusion multiplayer, allowing multiple students to join the VR environment and interact in real-time, promoting collaborative learning."
      ghLink="/* Insert GitHub link if available */"
      demoLink="/* Insert demo link if available */"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
     // imgPath={/* Insert appropriate image path for ZeroWaste */}
      isBlog={false}
      title="Quiz Game"
      description="Developed a 2D quiz game in Unity featuring multiple levels, question and option data stored using JSON, and score tracking with prevention of negative scores. Implemented PlayerPrefs for session persistence, allowing players to resume progress and continue levels. Integrated Google Ads for monetization and improved user experience with support for multiple languages using a localization asset."
      ghLink="/* Insert GitHub link if available */"
      demoLink="/* Insert demo link if available */"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
     // imgPath={/* Insert appropriate image path for Multiplayer TicTacToe */}
      isBlog={false}
      title="Multiplayer Tic-Tac-Toe"
      description="Developed a multiplayer Tic-Tac-Toe game using Photon Fusion, mastering multiplayer mechanics and RPC for player connections. Designed a synchronized restart feature to allow both players to reset and clear the board seamlessly."
      ghLink="/* Insert GitHub link if available */"
      demoLink="/* Insert demo link if available */"
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;
