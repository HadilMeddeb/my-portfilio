import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 880px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: red ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


export const GitHubButton = styled.a`
  border: 1.8px solid #bf653b;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 400;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 880px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const MobileIcon = styled.button`
background: none;
border: none;
  display: none;  
  color:#ffffff;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  @media screen and (max-width: 880px) {
    display: block;
  } `;

  export const MobileMenu = styled.div`
  display: none; 
  width: 100%;
  align-items: center;
  text-align: center;

  background: ${({ theme }) => theme.card_light};  
  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: ${({ theme }) => theme.card};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    z-index: 10;
  }`

  export const MobileMenuNavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 400;
    font-size: 25px;
    width: 100%;
    border-bottom: 0.1px solid #37223eff;
    padding: 30px 0px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;
