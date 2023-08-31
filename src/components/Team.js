import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Team = () => {
  const work = {
    internships: [
      {
        title: "Software Information Systems and Management Associate",
        company: "Retensa",
        duration: "May 2023 - August 2023",
        description: [
          "Developed and optimized the frontend of the company's flagship revenue-generating product using jQuery, ColdFusion, serving over 1000 users.",
          "Generated innovative ideas to elevate user experience, resulting in enhanced engagement and retention rates on the application.",
          "Led end-to-end testing for new features, ensuring seamless integration and a high standard of quality in the application's functionality.",
          "Identified and reported production code bugs to senior developers, showcasing meticulous attention to detail and commitment to software excellence.",
          "Developed a streamlined CI/CD pipeline, automating deployment processes to significantly increase code release frequency and reliability.",
        ],
      },
      {
        title: "Full Stack Web Developer Intern",
        company: "NYU IT",
        duration: "January 2023 - present",
        description: [
          "Currently developing a cutting-edge Business Intelligence platform for NYU",
          "Designed and implemented complex AWS Lambda functions to extract data from multiple university data sources, including Oracle UDW+ and Workday.",
          "Developed robust RESTful APIs using API Gateway to ensure seamless data access.",
          "Demonstrated a deep understanding of the complete software development lifecycle, collaborating closely with cross-functional teams to drive the development process, from ideation to deployment, and employed best-in-class DevOps tools in AWS to ensure code quality and rapid release.",
          "Significantly enhanced the user experience of the website by redesigning the website to make it responsiveness and mobile-friendy. Additionally, implemented some architectural improvements to drive performance and scalability gains in the codebase.",
        ],
      },
      {
        title: "Full Stack Web Developer (Project Lead)",
        company: "HWSaver LLP",
        duration: "June 2020 - March 2022",
        description: [
          "Worked as a Project Lead and led a team of 10 interns working on a machine learning-based full-stack web application",
          "Leveraged a deep understanding of React to create highly maintainable, well-tested, accessible, and well-documented React components, enabling seamless integration and future-proofing of the codebase.",
          "Reviewed, merged pull requests, and provided feedback to the team members",
          "Developed middleware including access control and login systems for authenticated users on the backend using Django, Python",
          "Leveraged a deep understanding of React to create highly maintainable, well-tested, accessible, and well-documented React components, enabling seamless integration and future-proofing of the codebase.",
        ],
      },
      {
        title: "Frontend Developer Intern",
        company: "NearbyGrocer",
        duration: "May 2020 - June 2020",
        description: [
          "Built an e-commerce website that satisfied the client's requirements with aresponsive design that enhanced the user experience.",
          "Utilized industry-standard technologies, such as React and REDUX architecture, to build a reliable and functional website and pushed code to production.",
          "Collaborated closely with designers to implement wireframes to improve the user interface. Worked together to balance design requirements with technical feasibility to achieve a visually appealing and user-friendly website.",
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
                                <div style={{ width: "80%" }}>
                                  <ul>
                                    {job.description.map((line, i) => (
                                      <li className="work-description" key={i}>
                                        {line}
                                      </li>
                                    ))}
                                  </ul>
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
