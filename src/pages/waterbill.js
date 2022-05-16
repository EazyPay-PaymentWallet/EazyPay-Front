import React from 'react'
import styled from "styled-components";
import AnimatedShapes from "../components/AnimatedShapes";

import Waterbill from '../components/WaterBill';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const WaterBillShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 20% 0, 40% 100%, 0% 100%);
  background-color: crimson;
  z-index: -1;
`;

const WaterBill = () => {
  return (
    <Container>
      <WaterBillShape />
      <Waterbill />
      <AnimatedShapes />
    </Container>
  )
}

export default WaterBill;