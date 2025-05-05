import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to my portfolio!  
            <br />
            I'm <span className="purple">Sarthak Jadoun</span>, a passionate game developer from 
            <span className="purple"> Ghaziabad, India</span>. I specialize in crafting immersive and engaging gaming experiences.  
            <br />
            I have completed a Bachelor of Technology (B.Tech) in Computer Science and Engineering with Specialization in Artificial Intelligence at ABES Institute of Technology, Ghaziabad.
            <br />
            <br />
            I bring creativity and technical expertise to my projects, utilizing technologies like Unity 3D, Virtual Reality (VR), and Photon Fusion. My professional journey also includes API integrations and monetization strategies like Unity Ads and Google AdMob.
            <br />
            <br />
            Outside of coding, here are some of the activities I love to engage in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            “The computer was born to solve problems that did not exist before.”
          </p>
          <footer className="blockquote-footer">Bill Gates, Microsoft founder and former CEO</footer>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
