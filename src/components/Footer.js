import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import "animate.css";

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="col-md-6">
              <div className="title-box-2 pt-4 pt-md-0">
                <h5 className="title-left">Get in Touch</h5>
              </div>
              <div className="more-info">
                <p className="lead">I would love to hear it form you!</p>
                <ul className="list-ico">
                  <li>
                    <span className="ion-ios-telephone"></span> Mobile: +1 929
                    366 1517
                  </li>
                  <li>
                    <span className="ion-email"></span>Email:
                    shvejan2011@gmail.com
                  </li>
                  <li>
                    <span className="ion-ios-location"></span>Address: Brooklyn,
                    New York City, NY, USA
                  </li>
                </ul>
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
