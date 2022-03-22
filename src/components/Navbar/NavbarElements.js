import styled from 'styled-components'
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"

/*
position: fixed;
z-index: 10;
width: 100%;
*/
export const Container = styled.div`
  height: 50px;
`;

export const Wrapper = styled.div`
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 72%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(LinkS)`
  font-size: 32px;
  color: black;
  font-weight: bold;
  text-decoration: underline crimson;
  cursor: pointer;

  &:hover{
    color: black;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 10px;
`;

export const MenuItem = styled(LinkS)`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: gray;
  }
`;

export const ButtonWrapper = styled.div`

`;

export const ButtonLink = styled(LinkR)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover{
    color: white;
  }
`;

export const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  margin-right: 30px;
  text-decoration: none;
  margin-top: -10px;
`;