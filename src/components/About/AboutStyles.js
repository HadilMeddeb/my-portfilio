import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 0px 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

export const Tiret = styled.span`
  width: 20px;
  font-weight: 300;
  height: 2px;
  background-color: ${({ theme }) => theme.text_secondary};
`;

export const AboutSectionTitle = styled.div`
  margin-bottom: 40px;
  text-transform: inherit;
  font-size: 25px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const AboutTitle = styled.div`
  margin-bottom: 50px;
  font-size: 60px;
  font-family: "Story Script", sans-serif;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0.2rem;

  @media (max-width: 768px) {

    font-size: 42px;
    text-align: center;
    line-height: 3rem;
  }
`;

export const AboutTitleMe = styled.span`
  color:#db7140;
  }
`;

export const AboutContent = styled.div`
  font-size: 20px;
  padding: 0px 100px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7rem;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    padding: 0px;
    flex-direction: column;
  }
`;
export const AboutText = styled.div`
  text-align: left;
  flex: 2;
  letter-spacing: 1px;
  line-height: 2.3rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #dd8a4eff;

  /* 3D shadow effect */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4),
    /* main shadow */ 0 6px 6px rgba(0, 0, 0, 0.3) inset; /* subtle inner shadow */

  /* Optional: slight rotation for depth */
  transform: rotateX(10deg) rotateY(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: rotateX(0deg) rotateY(0deg) scale(1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const HireButton = styled.button`
  margin: 40px 0px;
  padding: 10px 40px;
  font-size: 18px;
  font-weight: bold;
  background-color: #cc521dff;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.6);
`;

export const Divider = styled.div`
  height: 0.3px;
  background-color: ${({ theme }) => theme.text_secondary};
  width: 30%;
  margin-bottom: 20px;
`;
