import React, { useState } from "react";
import styled from "styled-components";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/HeroSection";
import Skills from "../components/Skills";
import Services from "../components/Services";

export default function Home() {
      const [openModal, setOpenModal] = useState(true);
  const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    height: 90vh;
    overflow-x: hidden;
  `;

  const Wrapper = styled.div`
    background: linear-gradient(
        38.73deg,
        rgba(204, 0, 187, 0.15) 0%,
        rgba(201, 32, 184, 0) 50%
      ),
      linear-gradient(
        141.27deg,
        rgba(0, 70, 209, 0) 50%,
        rgba(0, 70, 209, 0.15) 100%
      );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  `;

  return (
    <Body>
      <Wrapper>
        <Hero />
      </Wrapper>
      <About />
      <Services />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Wrapper>
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </Wrapper>
      <Footer />
    </Body>
  );
}
