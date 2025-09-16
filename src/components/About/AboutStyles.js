import styled from "styled-components";

export const Center = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0px 100px 0px;
`;

export const AboutTitle = styled.div`
margin-bottom:10px;
  font-size: 70px;
  font-weight: bold;
  color: #ffffff;
`;

export const AboutTitleMe = styled.span`
  color:#db7140;
  }
`;

export const AboutContent = styled.div`
  font-size: 18px;
  padding:  0px 100px  0px 100px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7rem;

`;

export const Divider = styled.div`
  height: 0.3px;
  background-color: ${({ theme }) => theme.text_secondary};
  width: 30%;
  margin-bottom : 20px;
`;
