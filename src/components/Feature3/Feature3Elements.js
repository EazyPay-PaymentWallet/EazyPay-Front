import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
`;

export const Image = styled.img`
  width: 92%;
  margin-left: 20px;
  margin-top: 69px;
`;

export const Right = styled.div`
  width: 50%;
`;

export const TopLine = styled.p`
  color: #02050a;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-left: 75px;
`;

export const Title = styled.span`
  max-width: 400px;
  padding-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 600;
  color: #02050a;
  margin-left: 75px;
`;

export const SubTitle = styled.span`
  max-width: 440px;
  padding-bottom: 5px;
  font-size: 20px;
  line-height: 24px;
  color: #02050a;
  letter-spacing: 0.5px;
  margin-left: 75px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: -25px;
`;