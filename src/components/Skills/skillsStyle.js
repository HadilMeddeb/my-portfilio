import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const SkillsWrapper = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const SkillsTitle = styled.div`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;

export const ListSkills = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  animation: ${slide} 15s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const SkillCard = styled.div`
  min-width: 70px;
  height: 70px;
  padding: 10px;
  background-color: rgba(15, 10, 43, 1);
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin: 50px 0px;
`;
