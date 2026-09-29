import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roger Herzfeldt </span>
            from <span className="purple"> Texas, USA.</span>
            <br />
            I’m a Full Stack & AI Engineer passionate about turning ideas into scalable, intelligent products. 
            I have experience building modern web applications and AI-powered solutions using React, TypeScript, JavaScript, Node.js, GraphQL, cloud technologies, and AI/LLM integrations.
            <br />
            I enjoy combining full-stack engineering with AI to build reliable, user-focused products 
            and solve complex problems through technology. 
            Outside of coding, I enjoy exploring new AI technologies, building side projects, and continuously learning emerging tools and frameworks.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
