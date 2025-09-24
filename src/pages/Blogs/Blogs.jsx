import React from 'react'
import styled from "styled-components";
import './style.css';

export default function Blogs() {
    const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
    font-size: 20px;
    width: 100%;
    height: 90vh;
    overflow-x: hidden;
  `;

  const NotFoundTitle = styled.h2`
    font-size: 32px;
    margin-bottom: 0px;
`
const NotFoundSubTitle = styled.p`
    font-size: 20px;
    margin-top: 15px;
`
  return (
    <Body>
      <img className='ImgStyle' src="assets/Blogs/no-blogs.png" alt="Blog" />
      <NotFoundTitle>No Posts Yet</NotFoundTitle>
      <NotFoundSubTitle>Stay tuned for upcoming blog posts!</NotFoundSubTitle>
    </Body>
  )
}
