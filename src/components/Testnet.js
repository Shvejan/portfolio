import React, { useState } from "react";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import js from "../assets/img/skills/js.png";
import react from "../assets/img/skills/react.png";
import arduino from "../assets/img/skills/arduino.png";
import cpp from "../assets/img/skills/c++.png";
import cv from "../assets/img/skills/cv.png";
import dj from "../assets/img/skills/dj.png";
import flask from "../assets/img/skills/flask.png";
import java from "../assets/img/skills/java.png";
import redux from "../assets/img/skills/redux.png";
import robo from "../assets/img/skills/robo.png";
import sql from "../assets/img/skills/sql.png";
import python from "../assets/img/skills/python.png";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import unreal from "../assets/img/skills/unreal.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>;

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const skillsList = [
    { id: "1", content: "HTML5", image: html },
    { id: "2", content: "CSS3", image: css },
    {
      id: "3",
      content: "JavaScript",
      image: js,
    },
    { id: "9", content: "ReactJS", image: react },
    { id: "10", content: "Redux", image: redux },
    { id: "16", content: "React Native", image: react },

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
    { id: "17", content: "Unreal Engine", image: unreal },
  ];

  return (
    <section className="testnet" id="skills">
      <div className="container">
        <div>
          <h1>
            <span>Skills</span>
          </h1>
          <div className="grid-container">
            {skillsList.map((skill) => {
              return (
                <Bounce bottom>
                  <article key={skill.id} className="location-listing">
                    <p className="location-title">{skill.content}</p>
                    <div className="location-image">
                      <a>
                        <img width="100" height="100" src={skill.image} />
                      </a>
                    </div>
                  </article>
                </Bounce>
              );
            })}
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
