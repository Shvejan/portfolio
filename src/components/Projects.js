import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import rest1 from "../assets/img/projects/restaurent/home.png";
import rest2 from "../assets/img/projects/restaurent/menu.png";
import rest3 from "../assets/img/projects/restaurent/about.png";
import rest4 from "../assets/img/projects/restaurent/contact.png";

import shop1 from "../assets/img/projects/shop/home.png";
import shop2 from "../assets/img/projects/shop/cart.png";

import land21 from "../assets/img/projects/hws/home.png";
import land22 from "../assets/img/projects/hws/career.png";
import land23 from "../assets/img/projects/hws/services.png";

import covid1 from "../assets/img/projects/covid/home.png";
import covid2 from "../assets/img/projects/covid/page1.png";
import keplerImage from "../assets/img/projects/kepler/kepler.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import klenTag from "../assets/img/projects/klen/klen-tag.jpeg";
import visionTransformer from "../assets/img/projects/vision-transformers/vision-transformers.jpeg";
import casa from "../assets/img/projects/casa/casa.jpg";

import habitApp from "../assets/img/projects/habitApp/habit-app.jpg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Habit Builder App",
      desc: "ReactNative Firebase",
      pics: [habitApp],
      link: "https://github.com/Shvejan/habit-tracker",
    },
    {
      title: "Landing Page",
      desc: "HTML CSS ReactJS Redux",
      pics: [land21, land22, land23],
      link: "https://hwsaver.com/",
    },
    {
      title: "Online Shpoing Site",
      desc: "HTML CSS ReactJS Redux",
      pics: [shop1, shop2],
      link: "https://github.com/Shvejan/starQuik-website",
    },
    {
      title: "Restaurent Website!",
      desc: "HTML CSS ReactJS Redux",
      pics: [rest1, rest2, rest3, rest4],
      link: "https://shvejan.github.io/Restaurent-react-app/",
    },
    {
      title: "Covid19 Tracker ",
      desc: "ReactJS Redux CSS",
      pics: [covid1, covid2],
      link: "https://shvejan.github.io/covid-19-tracker/",
    },
    {
      title: "3D Video game",
      desc: "Unreal Engine C++",
      pics: [keplerImage],
      link: "https://www.youtube.com/watch?v=n-eEt-vpYhI",
    },
    {
      title: "Smart Assistant Robot",
      desc: "Arduino C++ Image Processing",
      pics: [casa],
      link: "https://drive.google.com/file/d/1TkLyPscdbcQNvwmBdIkqcSj8vAGDzrIs/view?usp=sharing",
    },
    {
      title: "Behaviour Cloning for Self Driving Cars",
      desc: "Deep Learning Python OpenCv",
      pics: [visionTransformer],
      link: "https://ijisrt.com/assets/upload/files/IJISRT21DEC025.pdf",
    },
    {
      title: "Klen-The smart tag",
      desc: "IoT Arduion Google Firebase",
      pics: [klenTag],
      link: "https://drive.google.com/file/d/12hb86OY-efAqRFNBFBQojYb_Aw0Ar2Bt/view?usp=sharing",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>Here are some of my cool projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col className="col-md-3" key={index}>
                              <a href={project.link} target="_blank">
                                <div className="project-card">
                                  <img
                                    src={project.pics[0]}
                                    className="project-img"
                                  />
                                  <div className="card-content">
                                    <h5 className="project-title">
                                      {project.title}
                                    </h5>
                                    <h4 className="project-desc">
                                      {project.desc}
                                    </h4>
                                  </div>
                                </div>
                              </a>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
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
