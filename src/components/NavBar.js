import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/twitter.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/discord.svg";
import navIcon4 from "../assets/img/youtube.svg";
import { HashLink } from "react-router-hash-link";

import headerImg from "../assets/img/dp.JPG";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={headerImg} alt="Header Img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="https://blog.nodex.codes"
                target="_blank"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="https://stake.nodex.codes"
                target="_blank"
                className={
                  activeLink === "work" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("work")}
              >
                Work
              </Nav.Link>
              <Nav.Link
                href="https://explorer.nodex.codes"
                target="_blank"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="https://jumper.nodex.codes"
                target="_blank"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#testnet"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#team"
                className={
                  activeLink === "resume" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("resume")}
              >
                Resume
              </Nav.Link>
            </Nav>
            {/* <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://github.com/nodesxploit/testnet"
                  target="_blank"
                >
                  <img src={navIcon2} alt="Github" />
                </a>
                <a href="https://twitter.com/nodexploit" target="_blank">
                  <img src={navIcon1} alt="Twitter" />
                </a>
                <a href="https://youtube.com" target="_blank">
                  <img src={navIcon4} alt="Youtube" />
                </a>
              </div>
            </span> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
