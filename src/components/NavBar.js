import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import resumePdf from "../assets/pdfFiles/Shvejan_resume_fair.pdf";
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
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#work"
                className={
                  activeLink === "work" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("work")}
              >
                Work
              </Nav.Link>

              <Nav.Link
                href="#projects"
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
                href="#contact"
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
                href={resumePdf}
                target="_blank"
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
                  
                >
                  <img src={navIcon2} alt="Github" />
                </a>
                <a href="https://twitter.com/nodexploit" >
                  <img src={navIcon1} alt="Twitter" />
                </a>
                <a href="https://youtube.com" >
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
