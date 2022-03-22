import React from 'react';
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Intro from "../components/IntroSection";
import AnimatedShapes from "../components/AnimatedShapes";
import Feature from "../components/Feature";
import Services from "../components/ServiceSection";
import Price from "../components/PriceSection";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(77% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: -1;
`;

const FeatureShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 55% 0%, 28% 100%, 0 100%);
  background-color: pink;
  z-index: -1;
`;

const ServicesShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 28% 0%, 28% 100%, 0 100%);
  background-color: #f88497;
  z-index: -1;
`;

const PriceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 38% 100%);
  background-color: pink;
  z-index: -1;
`;

const Feature2Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(38% 0, 100% 0%, 100% 100%, 70% 100%);
  background-color: pink;
  z-index: -1;
`;

const Feature3Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 70% 100%);
  background-color: #f88497;
  z-index: -1;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
        <AnimatedShapes />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
        <AnimatedShapes />
      </Container>
      <Container>
        <Services />
        <ServicesShape />
        <AnimatedShapes />
      </Container>
      <Container>
        <Feature2 />
        <Feature2Shape />
        <AnimatedShapes />
      </Container>
      <Container>
        <Feature3 />
        <Feature3Shape />
        <AnimatedShapes />
      </Container>
      <Container>
        <Price />
        <PriceShape />
        <AnimatedShapes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
