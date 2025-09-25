import React from "react";
import {
  AboutContent,
  AboutTitle,
  AboutTitleMe,
  AboutContainer,
  AboutText,
  AboutImage,
  AboutSectionTitle,
  Tiret,
  HireButton,
} from "./AboutStyles";
import "./style.css";

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutText>
          <AboutSectionTitle>
            {" "}
            <Tiret></Tiret> About Me
          </AboutSectionTitle>
          <AboutTitle>
            <AboutTitleMe> Who I am ?</AboutTitleMe>
          </AboutTitle>
          <div>
            As a software engineer, I build efficient, scalable solutions that
            solve real-world problems. I specialize in full-stack development
            using React, Node.js, Express.js, Angular, Next.js, Python, and iOS.
            I write clean, maintainable code and continuously learn to adapt to
            the evolving tech landscape. Explore my work to see ideas
            transformed into impactful software.
          </div>
          <a href="#contact">
            {" "}
            <HireButton> Hire Me</HireButton>{" "}
          </a>
        </AboutText>

        <AboutImage>
          <img
            className="about-img"
            src="assets/hero-section/aboutSection-img.png"
            alt="About Me"
          />
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
}
