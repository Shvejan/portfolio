import React from "react";
import "../about.css";
import html from "../img/skills/html.png";
import css from "../img/skills/css.png";
import js from "../img/skills/js.png";
import react from "../img/skills/react.png";
import arduino from "../img/skills/arduino.png";
import cpp from "../img/skills/c++.png";
import cv from "../img/skills/cv.png";
import dj from "../img/skills/dj.png";
import flask from "../img/skills/flask.png";
import java from "../img/skills/java.png";
import redux from "../img/skills/redux.png";
import robo from "../img/skills/robo.png";
import sql from "../img/skills/sql.png";
import python from "../img/skills/python.png";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

import "react-cool-text/react-cool-text/output/theme.css";
import { CoolText } from "react-cool-text";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "1", content: "HTML5", image: html },
        { id: "2", content: "CSS3", image: css },
        {
          id: "3",
          content: "JavaScript",
          image: js,
        },
        { id: "9", content: "ReactJS", image: react },
        { id: "10", content: "Redux", image: redux },
        // { id: "16", content: "React Native", image: html },

        { id: "11", content: "Django", image: dj },
        { id: "12", content: "Flask", image: flask },
        { id: "15", content: "SQL", image: sql },
        {
          id: "5",
          content: "Python",
          image: python,
        },
        { id: "16", content: "Open CV", image: cv },

        {
          id: "6",
          content: "C/C++",
          image: cpp,
        },
        {
          id: "7",
          content: "Java",
          image: java,
        },
        {
          id: "8",
          content: "Arduino",
          image: arduino,
        },
        { id: "14", content: "Robotics", image: robo },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm a enthusiastic self taught full stack web and cross platform mobile app developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated to learn, grow and excel in industry. I have been working on various projects in the field of Web development for the past 2 years. I'm a quick learner and love to collaborate and work with teams.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="box-shadow-full"
                style={{ backgroundColor: "#fdb827" }}
              >
                <Slide top>
                  <div className="about-me pt-4 pt-md-0">
                    <h1 className="aboutMe">About Me</h1>
                    {this.state.about_me.map((content) => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </Slide>
                <br />
                <br />
                <br />
                <br />
                <div className="child-page-listing">
                  <h1 className="skillsText" data-text="Skills">
                    <span>Skills</span>
                  </h1>
                  {/* <h2>Skills</h2> */}
                  <div className="grid-container">
                    {this.state.skills.map((skill) => {
                      return (
                        <Bounce bottom>
                          <article key={skill.id} className="location-listing">
                            <p className="location-title">{skill.content}</p>
                            <div className="location-image">
                              <a>
                                <img
                                  width="100"
                                  height="100"
                                  src={skill.image}
                                />
                              </a>
                            </div>
                          </article>
                        </Bounce>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
