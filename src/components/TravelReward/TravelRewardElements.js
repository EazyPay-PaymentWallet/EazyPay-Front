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

  &:hover{
      color: white;
  }
`;

export const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 70%;
`;

export const Image = styled.img`
  width: 130%;
  margin-left: -200px;
  margin-top: 530px;
`;

export const CardContainer = styled.div`
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding: 20px;
  border-bottom: 2px solid lightgray;
`;