import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.button`
  background: white;
  color: darkblue;
  font-size: 16px;
  font-weight: bold;
  width: 150px;
  height: 150px;
  padding: 20px;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid darkblue;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0 , 0.58);
  box-shadow: 0px 0px 27px -11px rgba(0, 0, 0, 0.58);

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 40px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = ({ to, image, text, props}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(to, {state: props})}>
        <Image src={image}/>
        <Text>
            {text}
        </Text>
    </Container>
  )
}


export default MiniCard