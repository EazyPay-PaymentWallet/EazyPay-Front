import React from 'react'
import styled from "styled-components";
import AnimatedShapes from "../components/AnimatedShapes";

import Donatemoney from '../components/DonateMoney';

const Container = styled.div`
  height: 130vh;
  position: relative;
`;

const DonateMoneyShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 20% 0, 20% 100%, 0% 100%);
  background-color: crimson;
  z-index: -1;
`;

const DonateMoney = () => {
  return (
    <Container>
      <DonateMoneyShape />
      <Donatemoney />
      <AnimatedShapes />
    </Container>
  )
}

export default DonateMoney;