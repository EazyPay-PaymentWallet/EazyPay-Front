import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.button`
  background: white;
  color: darkblue;
  font-size: 16px;
  width: 170px;
  height: 170px;
  padding: 10px;
  margin: 10px 20px;
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
  width: 60px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = ({ to, image, text1, text2, text3}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(to)}>
        <Image src={image}/>
        <TextWrapper>
            <Text>
                {text1}
            </Text>
            <Text>
                {text2}
            </Text>
            <Text>
                {text3}
            </Text>
        </TextWrapper>
    </Container>
  )
}

export default MiniCard