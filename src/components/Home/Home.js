import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../../Assets/engineer-avatar.svg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Roger Herzfeldt</strong>
              </h1>

              <p className="heading-description blockquote">
                I am passionate about building scalable full-stack applications and AI-powered solutions. 
                With over 10+ years of experience developing web applications using C#, .NET, React, JavaScript, 
                and cloud technologies, I specialize in creating robust backend systems, intuitive user experiences, 
                and intelligent applications powered by Generative AI and LLMs.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={heroImg}
                className="profile-pic"
                alt="Full-stack and AI engineering illustration"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
