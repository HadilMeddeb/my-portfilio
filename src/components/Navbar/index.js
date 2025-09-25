import { Bio } from "../../data/constants";
import { IoMenu } from "react-icons/io5";
import { DiCodeigniter } from "react-icons/di";

import "./style.css";
import {
  Nav,
  NavLink,
  MobileMenuNavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu
} from "./style";
import { useState } from "react";

export const Navbar = () => {

  const [open,setOpen]= useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Span className="Navbar-title"> <DiCodeigniter/> Hadil</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#experience">Experience</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#education">Education</NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        <MobileIcon onClick={()=>setOpen(!open)}>
          <IoMenu />
        </MobileIcon>
        {open && (
        <MobileMenu>
          <MobileMenuNavLink href="/#about">About</MobileMenuNavLink>
          <MobileMenuNavLink href="/#skills">Skills</MobileMenuNavLink>
          <MobileMenuNavLink href="/#experience">Experience</MobileMenuNavLink>  
          <MobileMenuNavLink href="/#projects">Projects</MobileMenuNavLink>
          <MobileMenuNavLink href="/#education">Education</MobileMenuNavLink>
          <MobileMenuNavLink href="/blogs">Blogs</MobileMenuNavLink> 
        </MobileMenu>)}
      </NavbarContainer>
    </Nav>
  );
};
