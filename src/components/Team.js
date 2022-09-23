import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Team = () => {
  const work = {
    internships: [
      {
        title: "Full Stack Web Developer (Project Lead)",
        company: "HWSaver LLP",
        duration: "June 2020 - March 2022",
        description: [
          "Used React Js on the front end and Django on the backend of the website",
          "Built an NLP-based educational website for students to get their doubts cleared.",
          "Worked as a Project Lead and led a team of 10 interns",
        ],
      },
      {
        title: "Frontend Developer Intern",
        company: "NearbyGrocer",
        duration: "May 2020 - June 2020",
        description: [
          "Built an e-commerce website using React Js and Redux architecture",
          "Worked in close collaboration with a team of senior backend developers in integrating the APIs",
        ],
      },
    ],
    others: [
      {
        title: "Marketing Head",
        company: "Roboveda",
        duration: "Aug 2021 – Dec 2021",
        description: [
          "Organized one of the biggest technical fests in South India",
          "Pitching to companies for sponsorships ( raised a record-breaking amount of money for the fest from sponsors )",
          "Worked on the branding and publicity of the Fest",
        ],
      },
      {
        title: "Technical Head for Deep Learning and Computer Vision,",
        company: "The Robotics Club - SNIST",
        duration: "Sept. 2020– Dec 2021",
        description: [
          "Taught more than 200 students on how to implement Deep Learning and Computer Vision in Robotics",
          "Mentored juniors working on multiple robotics projects under the robotics club",
        ],
      },
    ],
  };
  return (
    <section className="team" id="work">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <br></br>

                  <br></br>
                  <br></br>
                  <center>
                    <h2>Experience</h2>
                    <p>Here are some of the internships and experiences</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Internships</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            Leadership Activities
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          {work.internships.map((job, index) => {
                            return (
                              <div className="work-container">
                                <div className="work-head">
                                  <Row>
                                    <Col className="work-title">
                                      <i>{job.title}</i> |{" "}
                                      <strong>{job.company}</strong>
                                    </Col>
                                    <Col className="work-duration">
                                      <i>{job.duration}</i>
                                    </Col>
                                  </Row>
                                </div>
                                <div>
                                  {job.description.map((line, i) => (
                                    <p className="work-description" key={i}>
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {work.others.map((job, index) => {
                            return (
                              <div className="work-container">
                                <div className="work-head">
                                  <Row>
                                    <Col className="work-title">
                                      <i>{job.title}</i> |{" "}
                                      <strong>{job.company}</strong>
                                    </Col>
                                    <Col className="work-duration">
                                      <i>{job.duration}</i>
                                    </Col>
                                  </Row>
                                </div>
                                <div>
                                  {job.description.map((line, i) => (
                                    <p className="work-description" key={i}>
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </center>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
