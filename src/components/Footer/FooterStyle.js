import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 60px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }
`;
export const Icon = styled.span`
  width: 30px;
  height: 30px;
  padding: 5px;
`;
export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  color: gray;
  gap: 20px;
  font-size: 30px;
`;

export const NeverMissAnUpdate = styled.div`
  text-align: left;
  padding: 20px 0;
  @media only screen and (max-width: 950px) {
    text-align: center;
  }
`;

export const NeverMissTitle = styled.div`
  font-size: 20px;
  font-style: italic;
  color: #ffffff;
  font-weight: 500;
`;

export const PrivacyPolicy = styled.div`
  width: 100%;
  text-align: left;
  color: #b9b5b5ff;
  font-size: 16px;
  @media only screen and (max-width: 950px) {
    text-align: center;
  }
`;


export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


export const Column = styled.div`
  height: 200px;
  color: #777373ff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 950px) {
    justify-content: center;
  }
`;


export const PolicyTerms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: left;
  @media only screen and (max-width: 950px) {
    align-items: center;
  }
  width: 100%;
`;

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 10px;
  @media only screen and (max-width: 950px) {
    align-items: center;
  }
`;

export const FooterAbout = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #b9b5b5ff;
  padding: 0px 10px;
`;
