import styled from "styled-components";

export const ExperienceContainer = styled.div`
  height: 90vh;
`;

export const ExperienceTitle = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
export const ExperienceSubTitle = styled.div`
  margin-bottom: 15px;
  font-size: 25px;
  text-decoration: inline;
  color: #e0d1d1ff;
  text-align: center;
`;

export const ExperienceSubTitle2 = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  text-decoration: inline;
  color: #959393ff;
  text-align: center;
`

export const ExperienceCarousal = styled.div``;
export const ExperienceItem = styled.div`
  width: 60%;

`;

export const Technologies = styled.div`
width: 100%;
  display:flex;
   flex-wrap: wrap; 
  gap:10px
`;

export const TechItem = styled.div`
  color: #f2e4dbff;
  padding: 8px 20px;
  border-radius: 30px;
  background-color: #e36833ff;
  font-size: 12px;
  font-weight: bold;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.6);
  transition: all 0.5s ease-in-out;

`;
export const TechsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); /* responsive grid */
  gap: 20px;
  width: 35%;   /* or 100% if you want full width */
  justify-items: center;  /* centers each logo horizontally */
`;
