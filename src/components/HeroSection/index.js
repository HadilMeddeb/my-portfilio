import React from "react";
import {
  Container,
  HiItem,
  EngineerName,
  DescriptionText,
  ContentContainer,
  Row,
  AvatarContainer,
} from "./HeroStyles";
import "./HeroSection.css";
export default function Hero() {
  return (
    <Container>
      <Row>
        <img
          className="side-icon"
          src="assets/hero-section/icon-electric.png"
        />
        <ContentContainer>
          <HiItem>Hi, I am</HiItem>
          <EngineerName>Hadil Meddeb</EngineerName>
          <DescriptionText>
            I am a full stack Developper focused on creating IOS mobile and web
            Applications that offers the best experience
          </DescriptionText>
          <button className="btn-3d">get my cv</button>
        </ContentContainer>
        <img
          className="side-icon"
          src="assets/hero-section/icon-parametre.png"
        />
      </Row>
      <AvatarContainer>
        <img className="avatar" src="assets/hero-section/avatar.png" />
      </AvatarContainer>
    </Container>
  );
}
