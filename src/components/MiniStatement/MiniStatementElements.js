import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 0px 20px;
`;

export const Icon = styled(LinkR)`
  margin: 20px;
  color: white;
  text-decoration: underline white;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;

  &:hover{
      color: white;
  }
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 40%;
  margin-left: -270px;
  margin-top: 40px;
`;

export const Image = styled.img`
  width: 70%;
  margin-left: -500px;
  margin-top: 250px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 4px;
  border: 2px solid gray;
  margin-top: 5px;
  border-radius: 10px;
`;

export const ImageIcon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 30px;
  margin-top: 25px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 237px;
  margin-top: 5px;
  font-size: 18px;
`;

export const Title = styled.span`

`;

export const SubTitle = styled.span`

`;

export const Desc = styled.span`
  color: blue;
`;

export const CAmount = styled.span`
  margin-top: 5px;
  color: green;
  font-size: 20px;
`;

export const DAmount = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 20px;
`;

export const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormSelect = styled.div`
  display: flex;
  flex-direction: row;
`;
