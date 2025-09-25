import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import {
  FooterContainer,
  IconsContainer,
  NeverMissAnUpdate,
  NeverMissTitle,
  PrivacyPolicy,
  Row,
  ContactInfos,
  Column,
  PolicyTerms,
  FooterAbout,
} from "./FooterStyle";
import "./style.css";

export default function Footer() {
  return (
    <FooterContainer>
      <Column>
        <NeverMissAnUpdate>
          <NeverMissTitle>Never Miss an update</NeverMissTitle>
          <p>get all the latest news, Blogs, projects and more </p>
          <p>stay tuned for more updates</p>
        </NeverMissAnUpdate>

        <PrivacyPolicy>@copy Right : Hadil Meddeb 2025</PrivacyPolicy>
      </Column>

      <Column>
        <IconsContainer>
          <a href="https://www.linkedin.com/in/hadil-meddeb/">
            {" "}
            <IoLogoLinkedin />
          </a>
          <a href="https://github.com/HadilMeddeb">
            {" "}
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/hedil.meddeb.5">
            {" "}
            <FaFacebook />{" "}
          </a>
          <a href="">
            {" "}
            <FaSquareInstagram />{" "}
          </a>
        </IconsContainer>
        <Row>
          <a href="#about">
            <FooterAbout>About Me</FooterAbout>
          </a>
          <a href="#contact">
            {" "}
            <FooterAbout>Contact Me</FooterAbout>
          </a>
          <a href="#services">
            {" "}
            <FooterAbout>My Services</FooterAbout>
          </a>
        </Row>
      </Column>

      <Column>
        <PolicyTerms>
          <div>Privacy and Policy</div>
          <div>Terms of Service</div>
        </PolicyTerms>

        <ContactInfos>
          <Row>
            <IoCall />
            <div>+216 95 929 808</div>
          </Row>
          <Row>
            <MdEmail />
            <div>Hadil.meddeb@outlook.com</div>
          </Row>
          <Row>
            <IoLocation />
            <div>Tunisia, Monastir</div>
          </Row>
        </ContactInfos>
      </Column>
    </FooterContainer>
  );
}
