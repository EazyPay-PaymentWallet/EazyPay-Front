import React from 'react'
import styled from "styled-components";
import AnimatedShapes from "../components/AnimatedShapes";
import ChatSection from "../components/ChatSection";

const Container = styled.div`
  position: relative;
`;

const ChatShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 20% 0, 20% 100%, 0% 100%);
  background-color: crimson;
  z-index: -1;
`;

const Chat = () => {
  return (
    <Container>
      <ChatShape />
      <ChatSection />
    </Container>
  )
}

export default Chat;