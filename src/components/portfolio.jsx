import React from "react";
import "../portfolio.css";
import Zoom from "react-reveal/Zoom";

import rest1 from "../img/restaurent/home.png";
import rest2 from "../img/restaurent/menu.png";
import rest3 from "../img/restaurent/about.png";
import rest4 from "../img/restaurent/contact.png";

import shop1 from "../img/shop/home.png";
import shop2 from "../img/shop/cart.png";

import land11 from "../img/landingPage/home (1).png";
import land12 from "../img/landingPage/home2.png";

import land21 from "../img/hws/home.png";
import land22 from "../img/hws/career.png";
import land23 from "../img/hws/services.png";
import wea1 from "../img/weather/home.png";

import covid1 from "../img/covid/home.png";
import covid2 from "../img/covid/page1.png";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Landing Page 1",
          desc: "HTML CSS ReactJS Redux",
          pics: [land21, land22, land23],
        },
        {
          title: "Online Shpoing Site",
          desc: "HTML CSS ReactJS Redux",
          pics: [shop1, shop2],
        },
        {
          title: "Restaurent Website!",
          desc: "HTML CSS ReactJS Redux",
          pics: [rest1, rest2, rest3, rest4],
        },
        {
          title: "Landing Page 2",
          desc: "JavaScript HTML CSS ",
          pics: [land11, land12],
        },
        {
          title: "Weather App",
          desc: "ReactJS Redux CSS",
          pics: [wea1],
        },
        {
          title: "Covid19 Tracker ",
          desc: "ReactJS Redux CSS",
          pics: [covid1, covid2],
        },
      ],
    };
  }
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route workCards">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Some of my cool projects!</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.projects.map((project, index) => (
              <Zoom top>
                <div className="col-md-4" key={index}>
                  <div className="work-box">
                    <a href={project.pics[0]} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img
                          src={project.pics[0]}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div
                        className="work-content"
                        style={{ backgroundColor: "#0E131B" }}
                      >
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{project.title}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">{project.desc}</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {project.pics.map(
                      (pic, index) =>
                        index > 0 && (
                          <a
                            key={index}
                            href={pic}
                            data-lightbox="gallery-vmarine"
                            style={{ display: "none" }}
                          >
                            jsx-a11y/anchor-has-content warning
                          </a>
                        )
                    )}
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
