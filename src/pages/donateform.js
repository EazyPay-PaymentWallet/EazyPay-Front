import React from 'react'
import styled from "styled-components";
import AnimatedShapes from "../components/AnimatedShapes";
import Donateform from '../components/DonateForm';

const Container = styled.div`
  height: 118vh;
  overflow: hidden;
  position: relative;
`;

const DonateFormShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 20% 0, 35% 100%, 0% 100%);
  background-color: crimson;
  z-index: -1;
`;

const DonateForm = () => {
  return (
    <Container>
      <DonateFormShape />
      <Donateform />
      <AnimatedShapes />
    </Container>
  )
}

export default DonateForm;