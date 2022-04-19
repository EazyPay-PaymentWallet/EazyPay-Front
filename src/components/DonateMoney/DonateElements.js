import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  height: calc(120vh - 50px);
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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

export const Image = styled.img`
  width: 130%;
  margin-left: -200px;
  margin-top: 207px;
`;

export const Img = styled.img`
  width: 90%;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: -100px;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;