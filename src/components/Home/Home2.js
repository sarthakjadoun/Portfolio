import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a dedicated <b className="purple">Game Developer</b> with a strong focus on both Unity and Game development.<br/> With expertise in Unity, C#, and game development, VR, Photon Fusion Multiplayer, design patterns like Observer, Object Pooling, and Singleton pattern.<br/><br/>🚀 Experience:<br/><br/> I have 10 months of experience in Unity game development, having contributed to various projects, including VR applications, Photon Fusion multiplayer games, a quiz game, and several hyper-casual games.  
            <br/><br/> Technical Expertise:<br/><br/> My core skills include Unity and C#, with a focus on developing efficient and optimized game systems. I have hands-on experience with multiplayer networking, gameplay mechanics, and VR implementation.  
            <br/><br/> Design Patterns and Architecture<br/><br/>I am proficient in applying design patterns like MVP, Observer, Object Pooling, and Singleton to build scalable, maintainable, and high-performance game architectures.
              <br />
              <br />I am fluent in Technical skills like
              <i>
                <b className="purple"> Unity, C#, and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Game Design Patterns and how we can optimize the Game Development overall
                
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sarthakjadoun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarthak-jadoun-684610213"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
