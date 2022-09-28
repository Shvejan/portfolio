import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner/dp-no-bg.png";
import { ArrowRightCircle, Quote } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Node Runner", "Crypto Enthusiast"];
  const period = 2000;
  const current = new Date();
  const education = [
    {
      school: "New York University, New York, USA",
      degree: "Master of Science, Computer Engineering",
      duration: " Sep 2022 - June 2024",
      gpa: "",
    },
    {
      school: "Sreenidhi Institute of Science and Technology, Hyderabad, India",
      degree: "Bachelor of Technology, Computer Science & Engineering ",
      duration: "Aug 2018 - July 2022",
      gpa: "Overall GPA: 3.5",
    },
  ];
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="overlay">
      <section className="banner">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                    id="about"
                  >
                    {/* <span className="tagline">{date}</span> */}
                    <h1>{`Hi! I'm Shvejan ✨`} </h1>
                    <Typed
                      className="typed"
                      strings={[
                        "App Developer",
                        "Full Stack Web Developer",
                        "Robotics and AI Enthusiast",
                      ]}
                      typeSpeed={60}
                      backDelay={1100}
                      backSpeed={20}
                      loop
                    />
                    <div className="social-icons">
                      <span>
                        <a
                          href="https://www.linkedin.com/in/shvejan-shashank-a59594181"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2x"
                            className="social-icon"
                          />
                        </a>
                        <a
                          href="https://github.com/shvejan"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            className="social-icon"
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/shvejan_556/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            size="2x"
                            className="social-icon"
                          />
                        </a>
                        <a
                          href="mailto:shvejan2011@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            size="2x"
                            className="social-icon"
                          />
                        </a>
                        <a
                          href="tel:+19293661517"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faPhone}
                            size="2x"
                            className="social-icon"
                          />
                        </a>
                      </span>
                    </div>
                    <br></br>
                    <br></br>
                    <i>
                      <q>
                        I'm a enthusiastic self taught full stack web and cross
                        platform mobile app developer eager to contribute to
                        team success through hard work, attention to detail and
                        excellent organizational skills. Motivated to learn,
                        grow and excel in industry. I have been working on
                        various projects and internships in the field of Web
                        development for the past 4 years. I'm a quick learner
                        and love to collaborate and work with teams.
                      </q>
                    </i>

                    <div className="education">
                      <h2 className="header">Education</h2>
                      {education.map((edu, i) => (
                        <div key={i} className="school-data">
                          <Row>
                            <Col>{edu.school}</Col>
                            <Col className="secondary">{edu.duration}</Col>
                          </Row>
                          <i>{edu.degree}</i>
                          <br />
                          <strong>{edu.gpa}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
