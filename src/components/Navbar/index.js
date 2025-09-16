import { Bio } from '../../data/constants';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './style'
import { useTheme } from 'styled-components';


export const Navbar = () => {
  return (
    <Nav>
    <NavbarContainer>
      <NavLogo to='/'>
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <Span>  Portfolio</Span>
        </a>
      </NavLogo>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#experience'>Experience</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#education'>Education</NavLink>
        <NavLink href='blogs'>Blogs</NavLink>
      </NavItems>
      <ButtonContainer>
        <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
      </ButtonContainer>
    </NavbarContainer>
  </Nav>
  )
}
