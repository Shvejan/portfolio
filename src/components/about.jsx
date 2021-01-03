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
        // {
        //   id: "second-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
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
                    <h1 style={{ color: "black" }}>About Me</h1>
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
                  <h2>Skills</h2>
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

                    {/* <article id="3685" className="location-listing">
                      <a className="location-title">San Francisco </a>

                      <div className="location-image">
                        <a>
                          <img
                            width="300"
                            height="169"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg"
                            alt="san francisco"
                          />{" "}
                        </a>
                      </div>
                    </article>

                    <article id="3688" className="location-listing">
                      <a className="location-title">London </a>

                      <div className="location-image">
                        <a>
                          <img
                            width="300"
                            height="169"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/london-768x432.jpg"
                            alt="london"
                          />{" "}
                        </a>
                      </div>
                    </article>

                    <article id="3691" className="location-listing">
                      <a className="location-title">New York </a>

                      <div className="location-image">
                        <a>
                          <img
                            width="300"
                            height="169"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/new-york-768x432.jpg"
                            alt="new york"
                          />{" "}
                        </a>
                      </div>
                    </article>

                    <article id="3694" className="location-listing">
                      <a className="location-title">Cape Town </a>

                      <div className="location-image">
                        <a>
                          <img
                            width="300"
                            height="169"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/cape-town-768x432.jpg"
                            alt="cape town"
                          />{" "}
                        </a>
                      </div>
                    </article>

                    <article id="3697" className="location-listing">
                      <a className="location-title">Beijing </a>

                      <div className="location-image">
                        <a>
                          <img
                            width="300"
                            height="169"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/beijing-768x432.jpg"
                            alt="beijing"
                          />{" "}
                        </a>
                      </div>
                    </article>

                    <article id="3700" className="location-listing">
                      <a className="location-title">Paris </a>

                      <div className="location-image">
                        <a>
                          <img
                            width="300"
                            height="169"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/paris-768x432.jpg"
                            alt="paris"
                          />
                        </a>
                      </div>
                    </article> */}
                  </div>
                </div>
                {/* <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
