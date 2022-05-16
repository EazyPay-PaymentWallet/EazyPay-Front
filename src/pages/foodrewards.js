import React from 'react'
import styled from "styled-components";
import AnimatedShapes from "../components/AnimatedShapes";

import Foodreward from '../components/FoodReward';

const Container = styled.div`
  height: 120vh;
  overflow: hidden;
  position: relative;
`;

const FoodRewardShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 20% 0, 40% 100%, 0% 100%);
  background-color: crimson;
  z-index: -1;
`;

const FoodReward = () => {
  return (
    <Container>
      <FoodRewardShape />
      <Foodreward />
      <AnimatedShapes />
    </Container>
  )
}

export default FoodReward;