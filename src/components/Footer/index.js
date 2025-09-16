import React from 'react'
import { Icon, IconsContainer } from './FooterStyle'
import { Container } from '@mui/material'
export default function Footer() {
  return (
    <Container>
      <IconsContainer>
        <Icon>
          <img width="30" src="assets/footer/facebook-icon.png"/>
        </Icon>
        <Icon>
          <img width="30" src="assets/footer/instagram-icon.png"/>
        </Icon>
        <Icon>
          <img width="30" src="assets/footer/linkedin-icon.png"/>
        </Icon>
      </IconsContainer>
    </Container>
  )
}