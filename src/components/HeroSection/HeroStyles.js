import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  height: 90vh;
  align-items: center;
  position: relative;
  background-color: 1.5px solid ${({ theme }) => theme.primary};
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    padding-right: 10px;
     padding-left: 10px;
  }
`;

export const HiItem = styled.div`
  font-size: 70px;
  color: #9bb5cc;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 3px;
  text-align: center;
`;

export const EngineerName = styled.div`
  font-size: 70px;
  color: #db7140;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 3px;
`;

export const DescriptionText = styled.div`
  font-size: 22px;
  color: #ffffff;
  line-height: 40px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  max-width: 500px;
`;

export const AvatarContainer = styled.div`
  width: 30%;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  @media (max-width: 1024px) {
    display: none;
  }
`;
