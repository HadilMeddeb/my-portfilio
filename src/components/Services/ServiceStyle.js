import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:90vh;
`;
export const ServicesTitle = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
export const ServicesSubTitle = styled.div`
  margin-bottom: 15px;
  font-size: 25px;
  text-decoration: inline;
  color: #e0d1d1ff;
  text-align: center;
`;

export const ServiceSubTitle2 = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  text-decoration: inline;
  color: #959393ff;
  text-align: center;
`

export const ServicesList = styled.div`
  display: inline-flex;
  gap: 20px;
`;

export const ServiceItem = styled.div`
  padding: 40px;
  height: 300px;
  border-radius: 30px;
  font-size: 25px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  background: radial-gradient(
    circle,
    rgba(181, 99, 62, 1) 0%,
    rgba(40, 11, 87, 1) 100%
  );

  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: radial-gradient(
      circle,
      rgba(181, 99, 62, 1) 0%,
      rgba(40, 11, 87, 1) 100%
    );
  }
`;

export const ServiceItemTechs = styled.div`
  display: inline-flex;
  gap: 8px;
`;

export const TechItem = styled.div`
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 30px;
  border: solid 1px #c1673dff;
  background-color: #d37347ff;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #de6730ff;
    transform: translateY(-10px);
    filter: brightness(1.2);
  }
`;
