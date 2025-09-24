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
            <Tiret></Tiret> -- About Me
          </AboutSectionTitle>
          <AboutTitle>
            <AboutTitleMe> Who is</AboutTitleMe> Hadil Meddeb ?
          </AboutTitle>
          <div>
            As a dedicated software engineer, I specialize in crafting efficient
            and scalable solutions that solve real-world problems. My passion
            lies in full-stack development, where I leverage modern frameworks
            like React, Node.js, Express.js, Angular, and Next.js to build
            robust web applications, along with strong backend skills in Python,
            and iOS development. I am committed to writing clean, maintainable
            code and continuously learning to adapt to the ever-evolving tech
            landscape. Explore my work to see how I transform ideas into
            functional, impactful software.
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
